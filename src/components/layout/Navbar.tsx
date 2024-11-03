/* eslint-disable @next/next/no-img-element */
"use client";

import { truncateString } from "@/lib/helper";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";

export default function Navbar() {
  return (
    <main className=" w-full top-0 z-[999]  py-3 px-3 md:px-5 hidden xl:block">
      <div className="max-w-[80vw] w-full m-auto flex justify-between items-center">
        {/* <img src="/img/logo.png" className="w-16" alt="" /> */}
        <a
          href={
            process.env.NODE_ENV === "production"
              ? "https://www.redactedhq.com/"
              : "https://redacted-landing.imhero.pro/"
          }
          target="_blank"
        >
          <img src="/img/button/home.png" className="max-w-[200px]" alt="" />
        </a>
        <ConnectButton />
      </div>
    </main>
  );
}

function ConnectButton() {
  const { open } = useAppKit();
  const account = useAccount();
  return (
    <button
      className="outline-none hover:brightness-75 transition relative"
      onClick={() => {
        open();
      }}
    >
      {account?.address !== undefined ? (
        <div>
          <img
            src="/img/button/profile.png"
            className="max-w-[200px] "
            alt=""
          />
          <p className="absolute top-[30%] left-[37%] text-red-500 font-bold eurostile-font text-xl">
            {truncateString(account.address.toString(), 5, 3)}
          </p>
        </div>
      ) : (
        <img
          src="/img/button/connect wallet-01.png"
          className="max-w-[350px]"
          alt=""
        />
      )}
    </button>
  );
}
