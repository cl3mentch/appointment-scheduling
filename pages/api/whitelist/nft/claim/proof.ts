import type { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { database } from "../../../../../src/lib/http/settings";
import { abi } from "../abi";
import { RngResultList } from "../interfaces";
import { merkleTree } from "../merkleTree";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { web3_address, contract } = request.body;

    if (!web3_address || !contract) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "web3 address and contract required",
      });
    }

    const web3AddressRegex = /^0x[0-9a-fA-F]{40}$/;
    if (!web3AddressRegex.test(web3_address)) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid web3 address format",
      });
    }

    const contractRegex = /^0x[0-9a-fA-F]{40}$/;
    if (!contractRegex.test(contract)) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid contract format",
      });
    }

    let rngResultId: bigint | null = null;

    try {
      // init client
      const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(),
      });

      // get rng_result_id
      rngResultId = (await publicClient.readContract({
        address: contract,
        abi: abi,
        functionName: "getRngResultIdForUser",
        args: [web3_address],
      })) as bigint;
    } catch (e) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "unable to fetch rng result id",
      });
    }

    if (!database) {
      return response.status(500).json({
        success: false,
        data: "",
        msg: "DATABASE_URL is not defined",
      });
    }

    const sql = postgres(database, { ssl: "require" });

    // get user
    let userList =
      await sql`SELECT * FROM whitelist where web3_address = ${web3_address} and sales_group = 'WhitelistSale'`;

    if (userList.length == 0) {
      await sql.end();
      return response.status(400).json({
        success: false,
        data: "",
        msg: "user not eligible",
      });
    }

    // check rng result id
    const checkRngResultID =
      await sql`SELECT * FROM rnglist where id = ${Number(rngResultId)}`;

    if (checkRngResultID.length == 0) {
      await sql.end();
      return response.status(400).json({
        success: false,
        data: "",
        msg: "rng result id not found",
      });
    }

    // get whole rnglist
    const rnglist: RngResultList[] = await sql<
      RngResultList[]
    >`SELECT * FROM rnglist order by id`;

    // generate tree and get proof for user
    const tree = merkleTree.generateRngResultListMerkleTree(rnglist);
    const proof = merkleTree.obtainProofForRngResult(tree, rngResultId);

    if (!proof) {
      await sql.end();
      return response.status(400).json({
        success: false,
        data: "",
        msg: "unable to get proof",
      });
    }

    await sql.end();
    return response.status(200).json({
      success: true,
      data: {
        nftAmount: userList[0].nft_amount,
        rngProof: proof,
        rngResultId: Number(rngResultId),
        rngResultIsWinner: checkRngResultID[0].is_winner,
      },
      msg: "",
    });
  } else if (request.method === "OPTIONS") {
    return response.status(200).json({
      success: true,
      data: "",
      msg: "",
    });
  } else {
    response.setHeader("Allow", ["POST", "OPTIONS"]);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
