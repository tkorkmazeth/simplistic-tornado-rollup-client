import crypto from "crypto";
import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  OffChainSignType,
  IndexService,
  OffChainRpc,
} from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import { SchemaEntry } from "./types";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { useMemo } from "react";
import type { Account, Chain, Client, Transport } from "viem";
import { type Config, useConnectorClient } from "wagmi";

var id = crypto.randomBytes(32).toString("hex");
const privateKey: any = `0x${id}`;

const SCHEMA_ID: string = process.env.NEXT_PUBLIC_SCHEMA_ID + "";

const schemaItem = (name: string): { name: any; type: any } => ({
  name,
  type: "string",
});

const getClient = () => {
  const client = new SignProtocolClient(SpMode.OffChain, {
    signType: OffChainSignType.EvmEip712,
    rpcUrl: OffChainRpc.mainnet,
    account: privateKeyToAccount(privateKey),
  });
  return client;
};

// create schema
export const createSchema = async () => {
  const client = getClient();
  const data = [
    schemaItem("name"),
    schemaItem("request"),
    schemaItem("timestamp"),
    schemaItem("signature"),
  ];
  const title = "CashProof";
  const schemaInfo = await client.createSchema({
    name: title,
    data,
  });
  return { schemaId: schemaInfo.schemaId, data: JSON.stringify(data), title };
};

export const createAttestation = async (signer: any, data: SchemaEntry) => {
  const client = getClient();

  const indexingValue = `${data.request}_${data.timestamp}`;
  console.log("create sign request", SCHEMA_ID, indexingValue, data, signer);
  const attestationInfo = await client.createAttestation({
    schemaId: SCHEMA_ID,
    data,
    indexingValue,
  });
  return attestationInfo;
};

export const getAttestations = async (page: number, indexingValue?: string) => {
  const indexService = new IndexService("testnet");
  return await indexService.queryAttestationList({
    schemaId: SCHEMA_ID,
    indexingValue,
    page: page,
  });
};

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}
