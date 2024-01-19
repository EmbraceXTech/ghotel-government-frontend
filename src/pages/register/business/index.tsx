import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { CustomRadio } from "@/components/ui/CustomRadio";
import { RadioGroup, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function RegisterBusiness() {
  const router = useRouter();

  return (
    <main className="w-full h-full flex items-center bg-gray-50">
      <div className="h-full w-[100px] lg:w-[420px] bg-brand">
        <HeaderLeftBg />
      </div>
      <div className="h-full p-14 px-20">
        <p className="font-bold">Business Registration</p>
        <p>
          Please provide the following information.{" "}
          <br className="hidden md:block" />
          Your information will only be used for verification purpose.
        </p>
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
            description="Create your KYB Profile with us and get verified."
            value="kyc"
          >
            Create new KYB Profile
          </CustomRadio>
        </RadioGroup>
        <Button
          onClick={() => router.push("/register/business/new")}
          className="mt-7 w-40"
          color="primary"
        >
          Continue
        </Button>
      </div>
    </main>
  );
}
