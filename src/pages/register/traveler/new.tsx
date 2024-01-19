import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { COUNTRIES } from "@/constants/countries";
import { useState } from "react";

export default function NewTraveler() {
  const router = useRouter();
  const [country, setCountry] = useState(undefined);

  return (
    <main className="w-full h-full flex items-center bg-gray-50">
      <div className="h-full w-[100px] lg:w-[420px] bg-brand">
        <HeaderLeftBg />
      </div>
      <div className="h-full p-14 px-20">
        <p className="font-bold">Traveler (Foreigner) Registration</p>
        <p>
          Please provide the following information.{" "}
          <br className="hidden md:block" />
          Your information will only be used for verification purpose.
        </p>
        <div className="pt-5">
          <Select
            labelPlacement="outside"
            className="max-w-md"
            placeholder="Select country"
            label="Nationality"
            value={country}
            onSelectionChange={setCountry as any}
            renderValue={(value) => {
              const { key } = value[0];
              return (
                <div className="flex items-center">
                  {country && (
                    <Avatar
                      className="w-6 h-6"
                      src={COUNTRIES[key as keyof typeof COUNTRIES].src}
                    />
                  )}
                  <span className="ml-2">{key as keyof typeof COUNTRIES}</span>
                </div>
              );
            }}
          >
            {Object.entries(COUNTRIES).map(([key, value]) => (
              <SelectItem
                key={key}
                startContent={
                  <Avatar alt={key} className="w-6 h-6" src={value.src} />
                }
              >
                {key}
              </SelectItem>
            ))}
          </Select>
        </div>
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
