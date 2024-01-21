import React, { useEffect, useState } from "react";
import { Progress, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { Tabs, Tab } from "@nextui-org/react";
import { useQuery } from "react-query";
import { BUSINESS_TYPE_MAP } from "@/constants/businessType";
import contractService from "@/services/contract.service";

export default function LandingProgress() {
  const [businessType, setBusinessType] = useState("Hotel");

  const { data, isLoading } = useQuery({
    queryKey: ["tokenDetails", businessType],
    queryFn: () =>
      contractService.getAirdropStatus(
        BUSINESS_TYPE_MAP[businessType as keyof typeof BUSINESS_TYPE_MAP]
      ),
  });

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

          {isLoading ? (
            <Spinner size="sm" className="mt-1" />
          ) : (
            <p className="text-sm text-gray-400">
              The remaining vouchers are {data?.remaining} / {data?.totalSupply}
            </p>
          )}
        </div>
        <Tabs
          onSelectionChange={(value) => {
            setBusinessType(value as string);
          }}
          className="ml-auto"
          color="primary"
          aria-label="Tabs colors"
          radius="full"
        >
          <Tab key="Hotel" title="Hotel" />
          <Tab key="Food" title="Food" />
          <Tab key="Flight" title="Flight" />
        </Tabs>
      </div>
      <Progress
        isStriped
        aria-label="airdrop-progress"
        color="primary"
        value={60}
        className="w-full mt-5"
      />
    </div>
  );
}
