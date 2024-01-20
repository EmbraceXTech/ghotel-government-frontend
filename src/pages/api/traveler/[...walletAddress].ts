import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress } = req.query;
  if (walletAddress?.length) {
    let { db } = await connectToDatabase();
    const data = await db
      .collection("traveler")
      .findOne({ walletAddress: walletAddress[0] });
    if (data) res.status(200).json({ isExist: true });
    else res.status(200).json({ isExist: false });
  } else res.status(200).json({ isExist: true });
}
