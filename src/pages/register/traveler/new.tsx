import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Input, Select, SelectItem, Avatar } from "@nextui-org/react";
import { COUNTRIES } from "@/constants/countries";
import { useState } from "react";
import { useAccount } from "wagmi";
import SuccessModal from "@/components/SuccessModal";

export default function NewTraveler() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [document, setDocument] = useState<File | undefined>(undefined);
  const account = useAccount();
  const [email, setEmail] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log({
      country,
      firstName,
      middleName,
      lastName,
      dob,
      document,
      walletAddress: account.address,
      email,
    });
    onOpen();
  };

  return (
    <main className="w-full h-full flex items-center bg-gray-50">
      <SuccessModal onOpenChange={onOpenChange} isOpen={isOpen} />
      <div className="h-full w-[100px] lg:w-[420px] bg-brand">
        <HeaderLeftBg />
      </div>
      <form onSubmit={handleSubmit} className="h-full p-14 px-20">
        <p className="font-bold">Traveler (Foreigner) Registration</p>
        <p>
          Please provide the following information.{" "}
          <br className="hidden md:block" />
          Your information will only be used for verification purpose.
        </p>
        <div className="pt-5">
          <Select
            isRequired
            labelPlacement="outside"
            className="max-w-md"
            placeholder="Select country"
            label="Nationality"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
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
          <p className="text-sm mt-5 mb-1">Legal Name</p>
          <div className="space-y-3">
            <Input
              isRequired
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              label="First Name"
            />
            <Input
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              type="text"
              label="Middle Name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isRequired
              type="text"
              label="Last Name"
            />
          </div>
          <p className="text-sm mt-5 mb-1">Date of Birth</p>
          <Input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            isRequired
            type="date"
          />
          <p className="text-sm mt-5 mb-1">Verification Document</p>
          <Input
            onChange={(e) =>
              e.target.files?.length && setDocument(e.target.files[0])
            }
            type="file"
          />
          <p className="text-sm mt-5 mb-1">Wallet Address</p>
          <Input
            isRequired
            variant="faded"
            value={account.address}
            type="text"
            disabled
          />
          <p className="text-sm mt-5 mb-1">Email </p>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            type="email"
            label="Email Address"
          />
        </div>
        <div className="flex space-x-3 mt-10">
          <Button
            className="w-full"
            onClick={() => router.back()}
            color="primary"
            variant="bordered"
          >
            Back
          </Button>
          <Button type="submit" className="w-full" color="primary">
            Register
          </Button>
        </div>
      </form>
    </main>
  );
}
