"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { useAccount } from "wagmi";

export const RouteButtons = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-4">
      <Button
        variant="default"
        size="lg"
        onClick={() => router.push("/upload")}
      >
        Create Balance Request
      </Button>

      <Button variant="default" size="lg" onClick={() => router.push("/sign")}>
        Verify Balance Request
      </Button>
    </div>
  );
};
