import type { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";
import { database } from "../../../../../src/lib/http/settings";
import { NftPurchaseWhitelist } from "../interfaces";
import { merkleTree } from "../merkleTree";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { web3_address, nft_amount, sales_group } = request.body;

    if (!web3_address || !nft_amount || !sales_group) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "web3 address, nft amount and sales group required",
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

    const parsedNftAmount = Number(nft_amount);
    if (!Number.isInteger(parsedNftAmount) || parsedNftAmount <= 0) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid nft amount",
      });
    }

    // WhitelistSale 2, GuaranteedMint 3
    if (sales_group != 2 && sales_group != 3) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid sales group",
      });
    }

    let salesGroupName = null;
    if (sales_group == 2) {
      salesGroupName = "WhitelistSale";
    } else if (sales_group == 3) {
      salesGroupName = "GuaranteedMint";
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
    let userList: NftPurchaseWhitelist[] = await sql<
      NftPurchaseWhitelist[]
    >`SELECT web3_address, nft_amount, 
        CASE 
          WHEN sales_group = 'GenesisUserAirdrop' THEN 0
          WHEN sales_group = 'PrivateSaleAirdrop' THEN 1
          WHEN sales_group = 'WhitelistSale' THEN 2
          WHEN sales_group = 'GuaranteedMint' THEN 3
          WHEN sales_group = 'PublicSale' THEN 4
        END AS sales_group
        FROM whitelist
      where web3_address = ${web3_address} and sales_group = ${salesGroupName}`;

    if (userList.length == 0) {
      await sql.end();
      return response.status(400).json({
        success: false,
        data: "",
        msg: "user not eligible",
      });
    }

    const user = userList[0];
    if (parsedNftAmount > user.nft_amount) {
      await sql.end();
      return response.status(400).json({
        success: false,
        data: "",
        msg: "cannot mint more than eligible amount",
      });
    }

    // get whole whitelist
    const whitelist: NftPurchaseWhitelist[] = await sql<
      NftPurchaseWhitelist[]
    >`SELECT web3_address, nft_amount, 
        CASE 
          WHEN sales_group = 'GenesisUserAirdrop' THEN 0
          WHEN sales_group = 'PrivateSaleAirdrop' THEN 1
          WHEN sales_group = 'WhitelistSale' THEN 2
          WHEN sales_group = 'GuaranteedMint' THEN 3
          WHEN sales_group = 'PublicSale' THEN 4
        END AS sales_group
      FROM whitelist order by id`;

    // generate tree and get proof for user
    const tree = merkleTree.generateWhitelistUserMerkleTree(whitelist);
    const proof = merkleTree.obtainProofForUser(
      tree,
      user.web3_address,
      user.sales_group
    );

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
        proof: proof,
        eligibleNftAmount: user.nft_amount,
        toMintNftAmount: parsedNftAmount.toString(),
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
