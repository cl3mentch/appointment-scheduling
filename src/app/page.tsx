/* eslint-disable @next/next/no-img-element */
"use client";

import { truncateString } from "@/lib/helper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useAppKit } from "@reown/appkit/react";
import { error } from "console";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount } from "wagmi";

export default function Home() {
  const { open } = useAppKit();
  const account = useAccount();
  const [isEligible, setIsEligible] = useState<any | null>(null);
  const [loading, setIsLoading] = useState(false);
  const [inputAddress, setInputAddress] = useState<string | undefined>(
    undefined
  );
  const [inputEmail, setInputEmail] = useState<any>(undefined);
  const [eligibleList, setEligibleList] = useState<any>(undefined);

  async function checkWhitelist() {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/whitelist/read`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ web3_address: inputAddress }),
      });
      const result = await response.json();

      if (result.success && result.data) {
        setEligibleList(result.data);
        const salesGroups = new Set(
          result.data.map((item: any) => item.sales_group)
        );

        if (salesGroups.has("GuaranteedMint")) {
          if (
            salesGroups.has("GenesisUserAirdrop") ||
            salesGroups.has("PrivateSaleAirdrop")
          ) {
            setIsEligible("airdrop&guarantee");
          } else {
            setIsEligible("guarantee");
          }
        } else if (salesGroups.has("WhitelistSale")) {
          setIsEligible("raffle");
        } else if (
          salesGroups.has("GenesisUserAirdrop") ||
          salesGroups.has("PrivateSaleAirdrop")
        ) {
          setIsEligible("airdrop");
        } else {
          setIsEligible("no whitelist");
        }
      } else {
        console.error("Error: ", result);
        toast.error(result.msg);
        setIsEligible(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  }

  async function onSubmitEmail() {
    if (inputEmail === "" || inputEmail === undefined) {
      return toast.error("Email cannot be empty");
    }
    fetch(`/api/email/addresssave`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        web3_address: account.address,
        email: inputEmail,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setInputEmail("");
          toast.success("Email has been submitted");
        } else if (result.msg === "web3 address and email required") {
          toast.error("Please Connect Wallet");
        } else {
          toast.error(result.msg);
        }
      });
  }

  useEffect(() => {
    if (account?.address !== undefined) {
      setInputAddress(account.address);
    } else {
      setIsEligible(null);
      setIsLoading(false);
      setEligibleList(undefined);
      setInputEmail("");
    }
  }, [account.address]);

  useEffect(() => {
    if (eligibleList) {
      // console.log("Updated eligibleList:", eligibleList);
    }
  }, [eligibleList]);

  useEffect(() => {
    if (inputAddress === "") {
      setIsEligible(null);
    }
  }, [inputAddress]);
  return (
    <main className=" min-h-screen relative xl:max-w-[80vw] h-screen m-auto w-full pt-5 space-y-8 px-3 flex justify-between items-center ">
      {/* desktop view */}
      <div className="max-w-[40%] space-y-16 hidden xl:block ">
        <div className="space-y-3">
          <div className="">
            <img
              src="/img/title desktop.png"
              className="-translate-x-10 "
              alt=""
            />
            <img
              src="/img/element-01.png"
              className="max-w-[50%] -translate-y-2"
              alt=""
            />
          </div>

          <p className="text-xl eurostile-font max-w-[80%]">
            Input your wallet address to check your inventory of raffle spots
            and guaranteed whitelist spots.
          </p>
        </div>
        <div className="xl:-translate-x-3">
          <div className="relative">
            <img src="/img/button/input.gif" className="" alt="" />
            <input
              type="text"
              placeholder={"ENTER WALLET ADDRESS"}
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              className="eurostile-font w-[90%] left-[5%] h-full absolute top-0 bg-transparent text-center text-lg 3xl:text-xl placeholder:text-white transition outline-none"
            />
          </div>
          <div className="-mt-3 flex flex-col items-center">
            {loading ? (
              <Icon
                icon="eos-icons:bubble-loading"
                className="w-10 h-10 mt-10"
              />
            ) : isEligible === null ? (
              <button
                disabled={inputAddress === undefined || inputAddress === ""}
                onClick={() => {
                  checkWhitelist();
                }}
                className="hover:brightness-75 transition outline-none active:scale-95 disabled:cursor-not-allowed disabled:scale-100 disabled:brightness-75 px-2"
              >
                <img src="/img/button/review.png" alt="" />
              </button>
            ) : isEligible ? (
              <img src={`/img/button/${isEligible}.png`} alt="" />
            ) : (
              <img src="/img/button/no whitelist.png" alt="" />
            )}
          </div>
        </div>
        <div className="w-[70%] ml-[2%] xl:-translate-x-4">
          <img src="/img/button/email title.png" className="w-[70%]" alt="" />
          <form
            className="relative"
            onSubmit={(e: any) => {
              e.preventDefault();
              onSubmitEmail();
            }}
          >
            <img src="/img/button/email input.gif" className="" alt="" />
            <button
              type="submit"
              className="absolute top-0 right-2 h-full w-[40%] z-10"
            ></button>
            <input
              value={inputEmail}
              onInput={(e: any) => setInputEmail(e.target.value)}
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-[50%] left-[5%] h-full absolute top-0 bg-transparent text-center text-sm 3xl:text-lg eurostile-font placeholder:text-white transition outline-none"
            />
          </form>
        </div>
      </div>

      {/* mobile view */}
      <div className="w-full h-full flex flex-col items-center pt-5 space-y-2 relative xl:hidden z-[90]">
        {account?.address !== undefined ? (
          <div
            onClick={() => {
              open();
            }}
            className="absolute -top-3 right-5"
          >
            <img
              src="/img/button/profile.png"
              className="max-w-[110px] "
              alt=""
            />
            <p className="absolute top-[30%] left-[37%] text-red-500 font-bold poppins-black text-[9px]">
              {truncateString(account.address.toString(), 5, 3)}
            </p>
          </div>
        ) : null}
        <a
          href={
            process.env.NODE_ENV === "production"
              ? "https://www.redactedhq.com/"
              : "https://redacted-landing.imhero.pro/"
          }
          target="_blank"
        >
          <img
            src="img/mobile/button/home.png"
            className="max-w-[100px]"
            alt=""
          />
        </a>

        <div className="flex flex-col items-center">
          <img
            src="img/title mobile.png"
            className=" m-auto max-w-[90%]"
            alt=""
          />
          <img
            src="img/mobile/element-01.png"
            className="max-w-[200px] m-auto my-2 "
            alt=""
          />
          <p className="text-center text-sm max-w-[70%] eurostile-font">
            Input your wallet address to check your inventory of raffle spots
            and guaranteed whitelist spots.
          </p>
        </div>

        {account?.address === undefined ? (
          <button
            className="max-w-[90%] outline-none"
            onClick={() => {
              open();
            }}
          >
            <img src="/img/mobile/button/connect wallet-01.png " alt="" />
          </button>
        ) : null}
        <div className="">
          <div className="relative">
            <img src="/img/button/input.gif" className="" alt="" />
            <input
              type="text"
              placeholder={"ENTER WALLET ADDRESS"}
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              className="w-[90%] left-[5%] h-full absolute top-0 bg-transparent text-center  eurostile-font placeholder:text-white transition outline-none"
            />
          </div>

          <div className="-mt-2 flex flex-col items-center w-full px-1">
            {loading ? (
              <Icon
                icon="eos-icons:bubble-loading"
                className="text-2xl my-10"
              />
            ) : isEligible === null ? (
              <button
                disabled={inputAddress === undefined || inputAddress === ""}
                onClick={() => {
                  checkWhitelist();
                }}
                className="hover:brightness-75 transition outline-none active:scale-95 disabled:cursor-not-allowed disabled:scale-100"
              >
                <img src="/img/button/review.png" alt="" />
              </button>
            ) : isEligible ? (
              <img src={`/img/button/${isEligible}.png`} alt="" />
            ) : (
              <img src="/img/button/no whitelist.png" alt="" />
            )}
          </div>

          <div className="flex flex-col items-center w-full mt-4">
            <div className="w-[70%] ml-[2%] ">
              <img
                src="/img/button/email title.png"
                className="w-[70%] m-auto"
                alt=""
              />
              <form
                className="relative"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  onSubmitEmail();
                }}
              >
                <img src="/img/button/email input.gif" className="" alt="" />
                <button
                  type="submit"
                  className="absolute top-0 right-2 h-full w-[40%] z-10"
                ></button>
                <input
                  value={inputEmail}
                  onInput={(e: any) => setInputEmail(e.target.value)}
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-[50%] left-[5%] h-full absolute top-0 bg-transparent text-center text-[10px] eurostile-font placeholder:text-white transition outline-none"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
