import { Address } from "viem";

export type NftPurchaseWhitelist = {
  web3_address: Address;
  nft_amount: bigint;
  sales_group: SaleGroup;
};

export enum SaleGroup {
  GenesisUserAirdrop,
  PrivateSaleAirdrop,
  WhitelistSale,
  GuaranteedMint,
  PublicSale,
}

export type RngResultList = {
  id: bigint;
  is_winner: 1n | 0n;
};
