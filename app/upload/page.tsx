"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form/Form";

import { Input } from "@/components/Input/Input";
import { useState } from "react";
import {
  getExplorerUrl,
  getPlaceholderDescription,
  isEmpty,
  signUrl,
} from "@/lib/util";

import Link from "next/link";

import { Textarea } from "@/components/Text/TextArea";
import { ReloadIcon } from "@radix-ui/react-icons";

import { useAccount, useChainId, useChains } from "wagmi";
import { deployContract } from "@/lib/contract/deploy";
import { useSigner } from "@/lib/sign";
import { Chain } from "viem";

import { uploadFile } from "@/store/store";
import { Button } from "@/components/Buttons/Button";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Request name must be at least 3 characters.",
  }),
  recipientName: z.string().min(3, {
    message: "Recipient name must be at least 3 characters.",
  }),
  recipientAddress: z.string().min(3, {
    message: "Recipient address must be at least 3 characters.",
  }),
  balance: z.string(),
  file: z.any().optional(),
  description: z.string().optional(),
});

function UploadForm() {
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { address } = useAccount();
  const chainId = useChainId();
  const chains = useChains();
  const currentChain: Chain | undefined = (chains || []).find(
    (c) => c.id === chainId
  );
  const signer = useSigner({ chainId });

  const setDemoData = async () => {
    form.setValue("title", "Balance verification request");
    form.setValue("description", getPlaceholderDescription());
    form.setValue("recipientName", "John Doe");
    form.setValue(
      "recipientAddress",
      address || "0x1234567890123456789012345678901234567890"
    );
    form.setValue("balance", "0.0001");
    form.setValue("file", null);
  };

  const clearForm = () => {
    form.setValue("title", "");
    form.setValue("description", "");
    form.setValue("recipientName", "");
    form.setValue("balance", "0");
    form.setValue("recipientAddress", "");
    form.setValue("file", null);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    try {
      const res: any = {};
      let balance = parseFloat(values.balance);
      if (isNaN(balance) || balance <= 0) {
        throw new Error("Balance must be a valid number greater than 0.");
      }

      const file = values.file;
      let cid = "";
      if (file) {
        cid = await uploadFile(file);
        console.log("fileAddress", cid);
      }

      const { title, description, recipientName, recipientAddress } = values;

      const contractAddress = await deployContract(
        signer,
        title,
        description || "",
        balance,
        recipientName,
        recipientAddress,
        cid,
        currentChain?.name || ""
      );
      res["contractAddress"] = contractAddress;
      res["contractUrl"] = getExplorerUrl(contractAddress, currentChain);
      res["cid"] = cid;
      res["message"] =
        "Request created successfully. Share the below url with the intended recipient.";
      res["url"] = signUrl(contractAddress);
      setResult(res);
      window.scrollTo(0, document.body.scrollHeight);
      clearForm();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  const hasResult = !isEmpty(result);
  const currency = currentChain?.nativeCurrency?.symbol || "ETH";

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-md shadow-md">
      {!hasResult && (
        <Form {...form}>
          <a
            href="#"
            className="hover:underline text-blue-500 cursor-pointer pointer mb-4 inline-block"
            onClick={setDemoData}
          >
            Set demo data
          </a>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter fund request name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`.1 ${currency} balance request verification`}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Name of the request.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter request description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Additional description for the request.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="recipientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient name</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipient name" {...field} />
                  </FormControl>
                  <FormDescription>Name of the recipient.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recipientAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient address</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipient address" {...field} />
                  </FormControl>
                  <FormDescription>
                    Known address used for authentication and ownership
                    attestation. You should collect the desired address from the
                    recipient before making this request.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="balance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Required balance ({currency})</FormLabel>
                  <FormControl>
                    <Input placeholder="Required balance" {...field} />
                  </FormControl>
                  <FormDescription>
                    Required balance. Uses native{" "}
                    {currentChain?.name || "chain"}
                    &nbsp;currency.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add attachment</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        form.setValue("file", e.target.files);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Optional attachment for the recipient to download / access
                    from the verification page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              disabled={loading || !address}
              type="submit"
            >
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              {!address ? "Connect wallet to continue" : "Create request"}
            </Button>
          </form>
        </Form>
      )}
      {hasResult && (
        <div className="pt-8">
          <Button
            className="mb-4 py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors duration-200"
            onClick={() => setResult(null)}
          >
            {" "}
            ← Create another request
          </Button>

          <div className="flex flex-col items-center mt-8">
            <svg
              width="128"
              height="128"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="text-xl mb-4">Request created successfully</div>
            <div className="flex flex-col items-center">
              <div className="text-gray-500 text-sm my-2">
                Share the below url with the intended recipient
              </div>
            </div>
            <Link
              href={result.url}
              target="_blank"
              className="text-blue-500 text-sm hover:underline"
              rel="noopener noreferrer"
            >
              {result.url}
            </Link>
            <div className="mt-2 flex space-x-4">
              {result?.contractUrl && (
                <Button
                  variant={"secondary"}
                  className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => {
                    window.open(result.contractUrl);
                  }}
                >
                  View contract
                </Button>
              )}
              {result?.url && (
                <Button
                  variant={"default"}
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => {
                    window.open(result.url);
                  }}
                >
                  View request page
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      {error && <div className="mt-2 text-red-500 max-w-3xl">{error}</div>}
    </div>
  );
}

export default UploadForm;
