import React from "react";
import { ConnectKitButton } from "connectkit";
import SiteLogo from "./svgs/SiteLogo";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center w-full min-h-20 bg-white px-[150px] justify-between border-b">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => router.replace("/")}>
          {/* <SiteLogo /> */}
          <Image
            src="/images/govLogo.png"
            alt="logo"
            width={150}
            height={100}
          />
        </div>
        <div className="flex ml-7 space-x-5 items-center mb-[2px]">
          <a
            href="https://ghotrip-ghota.vercel.app/"
            target="_blank"
            className="font-medium hover:text-brand cursor-pointer text-gray-600"
          >
            GHOta
          </a>
          <a
            href="https://ghotrip-wallet.vercel.app/"
            target="_blank"
            className="font-medium hover:text-brand cursor-pointer text-gray-600"
          >
            GHOWallet
          </a>
        </div>
      </div>
      <ConnectKitButton mode="light" />
    </div>
  );
}
