import { Backpack, Hotel } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function LandingRegisterSelector() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between">
      <div className="rounded-lg border w-[410px] h-[260px] flex items-center justify-center px-16 flex-col">
        <Backpack
          className="text-brand bg-slate-100 rounded-full p-3"
          size={55}
        />
        <p className="font-medium mt-3">Traveler</p>
        <p className="text-center text-sm text-gray-400 mt-3">
          Complete identity verification to access all Ghotel services
        </p>
        <Button
          className="mt-5 w-[240px]"
          color="primary"
          onClick={() => router.push("/register/traveler")}
        >
          Register
        </Button>
      </div>
      <div className="rounded-lg border w-[410px] h-[260px] flex items-center justify-center px-16 flex-col">
        <Hotel className="text-brand bg-slate-100 rounded-full p-3" size={55} />
        <p className="font-medium mt-3">Business</p>
        <p className="text-center text-sm text-gray-400 mt-3">
          Complete identity verification to access all Ghotel services
        </p>
        <Button
          className="mt-5 w-[240px]"
          color="primary"
          onClick={() => router.push("/register/business")}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
