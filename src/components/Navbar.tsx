import React from "react";
import { ConnectKitButton } from "connectkit";

export default function Navbar() {
  return (
    <div className="flex items-center w-full h-20 bg-slate-200 px-5 justify-end">
      <ConnectKitButton />
    </div>
  );
}
