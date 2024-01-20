import { connectToDatabase } from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  if (req.method === "POST") {
    const supercall = await db.collection("business").insertOne({
      ...req.body,
    });
    res.status(200).json(supercall);
  } else {
    const data = await db.collection("business").find().toArray();
    res.status(200).json(data);
  }
}
