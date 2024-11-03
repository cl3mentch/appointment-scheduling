/* eslint-disable @next/next/no-img-element */
import Toaster from "@/components/ui/toast/toast";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import AllProviders from "./provider";
import Navbar from "@/components/layout/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "RGZ WHITELIST CHECKER",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-y-scroll overflow-x-hidden gradientScrollBar min-h-screen bg-background bg-black bg-[url('/img/mobile/background.jpg')] bg-cover xl:bg-[url('/img/background.jpg')] bg-no-repeat relative font-sans antialiased text-white w-full h-[900px] xl:h-full text-md flex flex-col poppins-regular ",
          fontSans.variable
        )}
      >
        <img
          src="/img/1920x1080.png"
          className="w-full top-0 right-0 h-full absolute hidden xl:block"
          alt=""
        />
        <img
          src="/img/mobile/1024 × 1366.gif"
          className="w-full bottom-0 h-auto absolute xl:hidden z-10 "
          alt=""
        />
        <div className=" bg-[url('/img/mobile/bgframe.png')] xl:bg-none bg-no-repeat bg-[length:100vw_900px] xl:bg-auto flex flex-col ">
          <AllProviders>
            <Toaster />
            <Navbar />
            {children}
          </AllProviders>
        </div>
      </body>
    </html>
  );
}
