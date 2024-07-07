// import { arbitrumStylus } from "@/components/wallet/arbitrum-stylus";
import { createConfig, http, cookieStorage, createStorage } from "wagmi";
import { scrollSepolia, scroll } from "wagmi/chains";

export const config = createConfig({
  chains: [scroll, scrollSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [scroll.id]: http(),
    [scrollSepolia.id]: http(),
    // [arbitrumSepolia.id]: http(),
  },
});
