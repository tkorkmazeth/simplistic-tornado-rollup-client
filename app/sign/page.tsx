"use client";

import { useState } from "react";
import BasicCard from "@/components/Card/BasicCard";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Buttons/Button";
import { useRouter } from "next/navigation";

const Sign = () => {
  const [requestId, setRequestId] = useState<string>("");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center mt-8 p-4">
      <BasicCard
        title="Find request"
        description="Find and verify a fund request using your wallet."
        className="min-w-[400px] p-6 bg-white rounded-lg shadow-lg"
      >
        <Input
          placeholder="Enter request address"
          value={requestId}
          onChange={(e) => setRequestId(e.target.value)}
          className="mb-4"
        />

        <Button
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          onClick={() => {
            console.log("Sign request");
            router.push(`/sign/${requestId}`);
          }}
        >
          Go to request page
        </Button>
      </BasicCard>
    </div>
  );
};

export default Sign;
