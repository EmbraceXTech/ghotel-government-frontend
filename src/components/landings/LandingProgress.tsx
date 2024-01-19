import React from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";

export default function LandingProgress() {
  return (
    <div className="w-full h-[140px] bg-white border rounded-lg -mt-[70px] mb-[50px] shadow-md py-5 px-7">
      <div className="flex">
        <Image
          src={"/images/badgeIcon.png"}
          alt="badgeIcon"
          width={58}
          height={53}
        />
        <div className="ml-5">
          <p className="text-brand-sec font-bold">Current Airdrop Status</p>
          <p className="text-sm text-gray-400">
            The remaining vouchers are 313,555 / 1,000,000
          </p>
        </div>
      </div>
      <Progress
        isStriped
        aria-label="airdrop-progress"
        color="secondary"
        value={60}
        className="w-full mt-5"
      />
    </div>
  );
}
