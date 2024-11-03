import type { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";
import { database } from "../../../src/lib/http/settings";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { web3_address, email } = request.body;

    if (!web3_address || !email) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "web3 address and email required",
      });
    }

    // Validate web3_address against regex
    const web3AddressRegex = /^0x[0-9a-fA-F]{40}$/;
    if (!web3AddressRegex.test(web3_address)) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid web3 address format",
      });
    }

    // Validate email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({
        success: false,
        data: "",
        msg: "invalid email format",
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
    const checkExist =
      await sql`SELECT * FROM account_address where web3_address = ${web3_address}`;

    if (checkExist.length == 0) {
      await sql`INSERT INTO account_address (web3_address, email) VALUES (${web3_address}, ${email})`;
    } else {
      await sql`UPDATE account_address SET email = ${email} WHERE id = ${checkExist[0].id}`;
    }

    await sql.end();
    return response.status(200).json({
      success: true,
      data: "",
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
