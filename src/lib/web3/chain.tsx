import { defineChain, mainnet } from "@reown/appkit/networks";
import { mainnet as ethnet, holesky as testnet } from "wagmi/chains";

const holesky = defineChain({
  id: 17000,
  caipNetworkId: "eip155:17000",
  chainNamespace: "eip155",
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://holesky.etherscan.io",
    },
  },
  contracts: {
    // Add BSC Testnet specific contracts here
  },
});

const isProduction = process.env.NEXT_PUBLIC_APP_ENV === "production";
export const ethChain = isProduction ? ethnet : testnet;

export const reownChain = isProduction ? mainnet : holesky;
