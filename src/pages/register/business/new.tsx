import HeaderLeftBg from "@/components/svgs/HeaderLeftBg";
import { useRouter } from "next/router";
import {
  Input,
  Select,
  SelectItem,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useAccount } from "wagmi";
import { useState } from "react";
import SuccessModal from "@/components/SuccessModal";

export default function NewBusiness() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [businessType, setBusinessType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [document, setDocument] = useState<File | undefined>(undefined);
  const account = useAccount();
  const [email, setEmail] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log({
      businessType: businessType,
      companyName,
      companyAddress,
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
        <p className="font-bold">Business Registration</p>
        <p>
          Please provide the following information.{" "}
          <br className="hidden md:block" />
          Your information will only be used for verification purpose.
        </p>
        <p className="text-sm mt-5 mb-1">Business Type</p>
        <Select
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          isRequired
          placeholder="Select an business type"
          labelPlacement="outside"
          disableSelectorIconRotation
        >
          {["Hotel", "Restaurant"].map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </Select>
        <p className="text-sm mt-5 mb-1">Business Information</p>
        <Input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          isRequired
          type="text"
          label="Company Name"
        />
        <p className="text-sm mt-5 mb-1">Address</p>
        <Input
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
          isRequired
          type="text"
          label="Comapny Address"
        />
        <p className="text-sm mt-5 mb-1">Verification Document</p>
        <Input onChange={(e) => setDocument(e.target.files?.[0])} type="file" />
        <p className="text-sm mt-5 mb-1">Wallet Address</p>
        <Input
          isRequired
          variant="faded"
          value={account.address}
          type="text"
          disabled
        />
        <p className="text-sm mt-5 mb-1">Email</p>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired
          type="email"
          label="Email"
        />
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
