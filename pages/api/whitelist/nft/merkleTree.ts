import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import { Address, Hex } from "viem";
import { NftPurchaseWhitelist, RngResultList, SaleGroup } from "./interfaces";

export class merkleTree {
  // whitelist
  static generateWhitelistUserMerkleTree(lstWhitelist: NftPurchaseWhitelist[]) {
    const array = Object.entries(lstWhitelist).map(([, entry]) => {
      return [entry.web3_address, BigInt(entry.nft_amount), entry.sales_group];
    });

    // generate tree
    const tree = StandardMerkleTree.of(array, [
      "address",
      "uint256",
      "uint256",
    ]);

    return tree;
  }

  static obtainProofForUser(
    merkleTreeOutput: StandardMerkleTree<
      (bigint | `0x${string}` | SaleGroup)[]
    >,
    userAddress: Address,
    saleGroup: SaleGroup
  ) {
    // obtain proof
    for (const [i, v] of merkleTreeOutput.entries()) {
      if (v[0] === userAddress && v[2] == saleGroup) {
        return merkleTreeOutput.getProof(i) as Hex[];
      }
    }

    return false;
  }

  // rng
  static generateRngResultListMerkleTree(lstRng: RngResultList[]) {
    const array = Object.entries(lstRng).map(([, entry]) => {
      return [BigInt(entry.id), BigInt(entry.is_winner)];
    });

    // generate tree
    const tree = StandardMerkleTree.of(array, ["uint256", "uint256"]);

    return tree;
  }

  static obtainProofForRngResult(
    merkleTreeOutput: StandardMerkleTree<bigint[]>,
    rngId: bigint
  ) {
    // obtain proof
    for (const [i, v] of merkleTreeOutput.entries()) {
      if (v[0] === rngId) {
        return merkleTreeOutput.getProof(i) as Hex[];
      }
    }

    return false;
  }
}
