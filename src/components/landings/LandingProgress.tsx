import React from "react";
import { Progress } from "@nextui-org/react";
import BadgeIcon from "../svgs/BadgeIcon";

export default function LandingProgress() {
  return (
    <div className="w-[1100px] h-[140px] bg-white border rounded-lg -mt-14 mb-[73px]">
      <BadgeIcon />
      <Progress
        label="Monthly expenses"
        size="sm"
        value={4000}
        maxValue={10000}
        color="warning"
        formatOptions={{ style: "currency", currency: "ARS" }}
        showValueLabel={true}
        className="max-w-md"
      />
    </div>
  );
}
