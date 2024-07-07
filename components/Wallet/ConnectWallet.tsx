"use client";

import { useAccount } from "wagmi";
import { WalletOptions } from "./WalletOpt";
import { Account } from "./Account";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default ConnectWallet;
