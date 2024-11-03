CREATE TYPE sales_group_enum AS ENUM ('GenesisUserAirdrop','PrivateSaleAirdrop','WhitelistSale','GuaranteedMint','PublicSale');

CREATE TABLE account_address (
  id SERIAL NOT NULL PRIMARY KEY,
  web3_address VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE account_email (
  id SERIAL NOT NULL PRIMARY KEY,
  email VARCHAR NOT NULL
);

CREATE TABLE whitelist (
  id SERIAL NOT NULL PRIMARY KEY,
  web3_address VARCHAR NOT NULL,
  nft_amount INT NOT NULL DEFAULT 0,
  sales_group sales_group_enum NOT NULL
);

CREATE TABLE rnglist (
  id SERIAL NOT NULL PRIMARY KEY,
  is_winner INT NOT NULL DEFAULT 0
);