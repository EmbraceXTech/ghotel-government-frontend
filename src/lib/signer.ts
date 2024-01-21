import { ethers } from "ethers";
import { provider } from "./provider";

const ADMIN_PK = process.env.ADMIN_PK || "";

export const signer = new ethers.Wallet(ADMIN_PK, provider);
