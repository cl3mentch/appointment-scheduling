import type { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";
import { database } from "../../../src/lib/http/settings";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { web3_address } = request.body;

    if (!web3_address) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "web3 address required",
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

    if (!database) {
      return response.status(500).json({
        success: false,
        data: "",
        msg: "DATABASE_URL is not defined",
      });
    }

    const sql = postgres(database, { ssl: "require" });
    const data =
      await sql`SELECT sales_group, nft_amount FROM whitelist WHERE web3_address = ${web3_address}`;

    await sql.end();
    return response.status(200).json({
      success: true,
      data: data,
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
