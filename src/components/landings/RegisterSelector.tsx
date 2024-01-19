import { Backpack, Briefcase } from "lucide-react";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function RegisterSelector() {
  const router = useRouter();

  return (
    <div className="flex justify-center space-x-14">
      <div className="rounded-lg border w-[400px] h-[300px] flex items-center p-10 flex-col">
        <Backpack
          className="text-brand bg-slate-100 rounded-full p-3"
          size={60}
        />
        <p className="font-medium mt-5">Traveler</p>
        <p className="text-center text-gray-400 mt-3">
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
      <div className="rounded-lg border w-[400px] h-[300px] flex items-center p-10 flex-col">
        <Briefcase
          className="text-brand bg-slate-100 rounded-full p-3"
          size={60}
        />
        <p className="font-medium mt-5">Business</p>
        <p className="text-center text-gray-400 mt-3">
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
