import React from "react";
import { ConnectKitButton } from "connectkit";
import SiteLogo from "./svgs/SiteLogo";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center w-full min-h-20 bg-white px-[150px] justify-between border-b">
      <div className="cursor-pointer" onClick={() => router.replace("/")}>
        <SiteLogo />
      </div>
      <ConnectKitButton mode="light" />
    </div>
  );
}
