import { CustomRadio } from "@/components/ui/CustomRadio";
import { RadioGroup, Button } from "@nextui-org/react";

export default function RegisTraveler() {
  return (
    <main className="w-full h-full flex justify-end items-center">
      <div className="h-full w-[1050px] bg-gray-50 p-14 px-20">
        <p className="font-bold">Traveler (Foreigner) Registration</p>
        <p>Please provide the following information.</p>
        <p>Your information will only be used for verification purpose.</p>
        <RadioGroup className="mt-7" value="kyc">
          <CustomRadio
            isDisabled
            disabled
            description="Use your previous PoloygonID verification."
            value="polygonid"
          >
            Connect with PolygonID
          </CustomRadio>
          <CustomRadio
            className="mt-3"
            description="Create your KYC Profile with us and get verified."
            value="kyc"
          >
            Create new KYC Profile
          </CustomRadio>
        </RadioGroup>
        <Button className="mt-7 w-40" color="primary">
          Continue
        </Button>
      </div>
    </main>
  );
}
