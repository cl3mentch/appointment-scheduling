/* eslint-disable @next/next/no-img-element */
"use client";

import { useAppKit } from "@reown/appkit/react";

export default function ConnectWallet() {
  const { open } = useAppKit();
  return (
    <button
      onClick={() => {
        open();
      }}
    >
      <img src="/img/ConnectWallet.png" alt="" />
    </button>
  );
}
