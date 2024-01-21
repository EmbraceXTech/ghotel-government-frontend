import { addressList } from "@/constants/addressList";
import { connectToDatabase } from "@/lib/mongodb";
import { signer } from "@/lib/signer";
import { GovHelper__factory } from "@/typechain-types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();
  if (req.method === "POST") {
    const data = await db
      .collection("traveler")
      .findOne({ walletAddress: req.body.walletAddress });
    if (data) res.status(401).json({ message: "Already registered" });

    const GovHelper = GovHelper__factory.connect(addressList.GovHelper, signer);

    const tx = await GovHelper.whitelistTravelersAndAirdrop([
      req.body.walletAddress,
    ]);

    tx.wait();

    const ghovernment = await db.collection("traveler").insertOne({
      ...req.body,
    });

    res.status(200).json(ghovernment);
  } else {
    const data = await db.collection("traveler").find().toArray();
    res.status(200).json(data);
  }
}
