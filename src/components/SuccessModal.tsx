import React from "react";
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { LucideCheckCircle } from "lucide-react";
import { useRouter } from "next/router";

export default function SuccessModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  const router = useRouter();
  return (
    <Modal
      radius={"lg"}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className="h-[300px] flex flex-col justify-center items-center">
                <LucideCheckCircle size={70} className="text-brand" />
                <p className="font-bold mb-1 mt-5">Registered Successfully</p>
                <p className="text-gray-500 text-center px-[80px]">
                  You have successfully registered to Travel Together Campaign!
                </p>
                <Button
                  className="mt-7"
                  onClick={() => router.replace("/")}
                  color="primary"
                  fullWidth
                >
                  Done
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
