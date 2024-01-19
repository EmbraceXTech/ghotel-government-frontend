import React from "react";
import HeaderLeftBg from "../svgs/HeaderLeftBg";
import HeaderRightBg from "../svgs/HeaderRightBg";

export default function LandingHeader() {
  return (
    <div className="bg-brand w-full h-[200px] flex items-center flex-col pt-10 relative -z-10">
      <p className="text-white text-xl font-medium">
        2024 Travel together in Thailand
      </p>
      <p className="text-white text-sm">
        Reimagining the evolution of new world of payments on blockchain
      </p>
      <HeaderLeftBg />
      <HeaderRightBg />
    </div>
  );
}
