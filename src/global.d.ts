import { MetaMaskInpageProvider } from "@metamask/providers";
import { PrismaClient } from "@prisma/client";

declare global {
  interface Window {
    ethereum: MetamaskProvider;
  }
  var prisma: PrismaClient | undefined;
}
