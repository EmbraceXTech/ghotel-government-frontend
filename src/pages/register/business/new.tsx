import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function NewBusiness() {
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
        <div className="flex space-x-3">
          <Button
            onClick={() => router.back()}
            className="mt-7 w-40"
            color="primary"
            variant="bordered"
          >
            Back
          </Button>
          <Button className="mt-7 w-40" color="primary">
            Register
          </Button>
        </div>
      </div>
    </main>
  );
}
