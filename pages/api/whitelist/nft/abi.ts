export const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "EnforcedPause", type: "error" },
  { inputs: [], name: "ExpectedPause", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amountToTransfer", type: "uint256" },
    ],
    name: "FailedToSendEther",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "expectedFee", type: "uint256" },
      { internalType: "uint256", name: "givenFee", type: "uint256" },
    ],
    name: "IncorrectFee",
    type: "error",
  },
  { inputs: [], name: "InvalidInitialization", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "givenNftAmount", type: "uint256" },
    ],
    name: "InvalidNftAmountInput",
    type: "error",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
      { internalType: "bytes32", name: "root", type: "bytes32" },
      { internalType: "bytes32", name: "leaf", type: "bytes32" },
    ],
    name: "InvalidWhitelistProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "givenAmount", type: "uint256" },
    ],
    name: "MintNftAmountExceedAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      { internalType: "uint256", name: "remainingSupply", type: "uint256" },
      { internalType: "uint256", name: "toMintNftAmount", type: "uint256" },
    ],
    name: "MintNftAmountExceedSupply",
    type: "error",
  },
  { inputs: [], name: "NotInitializing", type: "error" },
  {
    inputs: [
      {
        internalType: "enum RGZSale.RaffleStatus",
        name: "currentRaffleStatus",
        type: "uint8",
      },
    ],
    name: "RaffleAlreadyRevealed",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "closeRoundStartTime", type: "uint256" },
      { internalType: "uint256", name: "currentTime", type: "uint256" },
    ],
    name: "RaffleCanCloseAt",
    type: "error",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
      { internalType: "bytes32", name: "root", type: "bytes32" },
      { internalType: "bytes32", name: "leaf", type: "bytes32" },
    ],
    name: "RaffleInvalidRngProof",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "expectedRngResultId", type: "uint256" },
      { internalType: "uint256", name: "givenRngResultId", type: "uint256" },
    ],
    name: "RaffleInvalidRngResultId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.RaffleStatus",
        name: "expected",
        type: "uint8",
      },
      {
        internalType: "enum RGZSale.RaffleStatus",
        name: "actual",
        type: "uint8",
      },
    ],
    name: "RaffleInvalidStatus",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.RaffleStatus",
        name: "currentRaffleStatus",
        type: "uint8",
      },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "endTime", type: "uint256" },
    ],
    name: "RaffleIsClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.RaffleStatus",
        name: "currentRaffleStatus",
        type: "uint8",
      },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "endTime", type: "uint256" },
    ],
    name: "RaffleIsOpened",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256", name: "rngDrawn", type: "uint256" }],
    name: "RaffleRngNotDrawn",
    type: "error",
  },
  {
    inputs: [{ internalType: "bytes32", name: "rngResult", type: "bytes32" }],
    name: "RaffleRngResultNotSet",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "userPosition", type: "uint256" },
    ],
    name: "RaffleUserAlreadyJoined",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "expectedIsWinner", type: "uint256" },
      { internalType: "uint256", name: "givenIsWinner", type: "uint256" },
    ],
    name: "RaffleUserCantClaimNft",
    type: "error",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "SaleGroupClaimableNotEnded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      { internalType: "uint256", name: "startTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "SaleGroupNotClaimable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      { internalType: "uint256", name: "openTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "SaleGroupNotOpened",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
    ],
    name: "UserNotJoined",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      {
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
    ],
    name: "UserRevoked",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "AirdropToGenesisUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "AirdropToPrivateSaleUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "BuyNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "BuyNFTForGuaranteedMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "ClaimNftFromGuaranteedMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "closeTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rngDrawn",
        type: "uint256",
      },
    ],
    name: "RaffleClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "RaffleOpened",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "RaffleRevealed", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "bool", name: "isWinner", type: "bool" },
      {
        indexed: false,
        internalType: "uint256",
        name: "refundedFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintedNftAmount",
        type: "uint256",
      },
    ],
    name: "RaffleUserClaimedNFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "userPosition",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nftAmount",
        type: "uint256",
      },
    ],
    name: "RaffleUserJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRngResult",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRngResult",
        type: "bytes32",
      },
    ],
    name: "RngResultListUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RGZSale.SaleGroup",
        name: "currentStageGroup",
        type: "uint8",
      },
    ],
    name: "SetFromGenesisAirdropToPrivateSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RGZSale.SaleGroup",
        name: "currentStageGroup",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingSupply_privateSaleAirdrop",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxSupply_whitelistSaleAirdrop",
        type: "uint256",
      },
    ],
    name: "SetFromGuaranteedMintToWhitelistSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RGZSale.SaleGroup",
        name: "currentStageGroup",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingSupply_privateSaleAirdrop",
        type: "uint256",
      },
    ],
    name: "SetFromPrivateSaleToGuaranteedMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RGZSale.SaleGroup",
        name: "currentStageGroup",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingSupply_whitelistSaleAirdrop",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingSupply_guaranteedMint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxSupply_publicSale",
        type: "uint256",
      },
    ],
    name: "SetFromWhitelistSaleToPublicSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum RGZSale.SaleGroup",
        name: "saleGroup",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalClaimedETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalClaimedNfts",
        type: "uint256",
      },
    ],
    name: "TransferUnclaimedNftAndETHToTreasury",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
    ],
    name: "WhitelistUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "userAddress", type: "address" },
          { internalType: "uint256", name: "nftAmount", type: "uint256" },
          { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
        ],
        internalType: "struct RGZSale.AirdropParam[]",
        name: "param",
        type: "tuple[]",
      },
    ],
    name: "airdropToGenesisUsers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "userAddress", type: "address" },
          { internalType: "uint256", name: "nftAmount", type: "uint256" },
          { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
        ],
        internalType: "struct RGZSale.AirdropParam[]",
        name: "param",
        type: "tuple[]",
      },
    ],
    name: "airdropToPrivateSales",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "nftAmount", type: "uint256" }],
    name: "buyNft",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
      { internalType: "uint256", name: "eligibleNftAmount", type: "uint256" },
      { internalType: "uint256", name: "toMintNftAmount", type: "uint256" },
    ],
    name: "buyNftInGuaranteedMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "nftAmount", type: "uint256" },
          { internalType: "bytes32[]", name: "rngProof", type: "bytes32[]" },
          { internalType: "uint256", name: "rngResultId", type: "uint256" },
          {
            internalType: "uint256",
            name: "rngResultIsWinner",
            type: "uint256",
          },
        ],
        internalType: "struct RGZSale.ClaimFromRaffleParam",
        name: "param",
        type: "tuple",
      },
    ],
    name: "claimFromGuaranteedMintAndRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "nftAmount", type: "uint256" },
          { internalType: "bytes32[]", name: "rngProof", type: "bytes32[]" },
          { internalType: "uint256", name: "rngResultId", type: "uint256" },
          {
            internalType: "uint256",
            name: "rngResultIsWinner",
            type: "uint256",
          },
        ],
        internalType: "struct RGZSale.ClaimFromRaffleParam",
        name: "param",
        type: "tuple",
      },
    ],
    name: "claimFromRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimNftFromGuaranteedMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxNftSupplyClaimableForRaffle",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaffleInfo",
    outputs: [
      {
        components: [
          {
            internalType: "enum RGZSale.RaffleStatus",
            name: "status",
            type: "uint8",
          },
          { internalType: "uint32", name: "startTime", type: "uint32" },
          { internalType: "uint32", name: "endTime", type: "uint32" },
          { internalType: "uint32", name: "countParticipant", type: "uint32" },
          { internalType: "uint64", name: "entryFeePerNft", type: "uint64" },
          { internalType: "uint16", name: "maxSupply", type: "uint16" },
          { internalType: "uint16", name: "remainingSupply", type: "uint16" },
          { internalType: "uint32", name: "rngDrawn", type: "uint32" },
          { internalType: "bytes32", name: "rngResultRoot", type: "bytes32" },
        ],
        internalType: "struct RGZSale.RaffleInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getRngResultIdForUser",
    outputs: [
      { internalType: "uint256", name: "rngResultId", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSaleInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "guaranteedMint_saleOpenTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "guaranteedMint_saleCloseTime",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "guaranteedMint_maxSupply",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "guaranteedMint_remainingSupply",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "gtd_raffle_claimOpenTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "gtd_raffle_claimCloseTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "publicSale_saleOpenTime",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "publicSale_saleCloseTime",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "publicSale_remainingSupply",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "publicSale_nftPurchaseLimit",
            type: "uint16",
          },
          {
            internalType: "uint64",
            name: "nftSalePrice_guaranteedMint",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "nftSalePrice_publicSale",
            type: "uint64",
          },
        ],
        internalType: "struct RGZSale.SaleInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserGuaranteedMintInfo",
    outputs: [
      {
        components: [
          { internalType: "uint16", name: "nftAmountToMint", type: "uint16" },
          { internalType: "bool", name: "isClaimed", type: "bool" },
        ],
        internalType: "struct RGZSale.GuaranteedMintUserInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserRaffleInfo",
    outputs: [
      {
        components: [
          { internalType: "uint16", name: "nftAmount", type: "uint16" },
          { internalType: "uint32", name: "userPosition", type: "uint32" },
          { internalType: "bool", name: "isClaimed", type: "bool" },
        ],
        internalType: "struct RGZSale.RaffleUserInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IRGZNft", name: "_rgz", type: "address" },
      { internalType: "address", name: "_treasury", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
      { internalType: "uint256", name: "eligibleNftAmount", type: "uint256" },
      { internalType: "uint256", name: "toMintNftAmount", type: "uint256" },
    ],
    name: "joinRaffle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "callerConfirmation", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "revokedNftPurchase",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rgz",
    outputs: [{ internalType: "contract IRGZNft", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "startNow", type: "bool" },
      { internalType: "uint256", name: "startLaterTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "setGuaranteedMintAndRafflePhaseClaimable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "startNow", type: "bool" },
      { internalType: "uint256", name: "startLaterTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "setGuaranteedMintPhaseTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "startNow", type: "bool" },
      { internalType: "uint256", name: "startLaterTime", type: "uint256" },
      { internalType: "uint256", name: "closeTime", type: "uint256" },
    ],
    name: "setPublicSalePhaseTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IRGZNft", name: "_rgz", type: "address" },
    ],
    name: "setRGZ",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_rngResultRoot", type: "bytes32" },
    ],
    name: "setRngResultList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_treasury", type: "address" }],
    name: "setTreasuryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "_root", type: "bytes32" }],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "startTime", type: "uint32" },
      { internalType: "uint32", name: "duration", type: "uint32" },
    ],
    name: "startRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transferRemainingNftsToPublicSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "userAddress", type: "address[]" },
    ],
    name: "transferUnclaimedGTDToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "userAddress", type: "address" },
          { internalType: "uint256", name: "nftAmount", type: "uint256" },
          { internalType: "bytes32[]", name: "rngProof", type: "bytes32[]" },
          { internalType: "uint256", name: "rngResultId", type: "uint256" },
          {
            internalType: "uint256",
            name: "rngResultIsWinner",
            type: "uint256",
          },
        ],
        internalType: "struct RGZSale.TransferUnclaimedRaffleToTreasuryParam[]",
        name: "param",
        type: "tuple[]",
      },
    ],
    name: "transferUnclaimedRaffleToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];