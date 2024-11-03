import type { NextApiRequest, NextApiResponse } from "next";
import {
  ContractFunctionParameters,
  createPublicClient,
  http,
  MulticallReturnType,
} from "viem";
import { mainnet } from "viem/chains";

const abi = [
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { contract, rpc_url } = request.body;

    if (!contract || !rpc_url) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "contract and rpc_url required",
      });
    }

    try {
      // init client
      const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(rpc_url),
      });

      // get total supply
      const getTotalSupply = (await publicClient.readContract({
        address: contract,
        abi: abi,
        functionName: "totalSupply",
      })) as bigint;

      const totalSupply = Number(getTotalSupply);
      const tokenArray: number[] = [];
      for (let i = 1; i <= totalSupply; i++) {
        tokenArray.push(i);
      }

      let ownerList: MulticallReturnType = [];

      if (tokenArray.length > 0) {
        // push contract object to contracts for multicall
        const contracts = tokenArray.map((token) => ({
          address: contract,
          abi: abi,
          functionName: "ownerOf",
          args: [token],
        })) as ContractFunctionParameters[];

        ownerList = (await publicClient.multicall({
          contracts,
          allowFailure: false,
        })) as MulticallReturnType;
      }

      return response.status(200).json({
        success: true,
        data: ownerList,
        msg: "",
      });
    } catch (error) {
      return response.status(500).json({
        success: false,
        data: "",
        msg: error,
      });
    }
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
