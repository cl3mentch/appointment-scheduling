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
  title: "Appointment Booking",
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
          "gradientScrollBar min-h-screen bg-background text-black bg-[#F6F6F6]",
          fontSans.variable
        )}
      >
        <AllProviders>
          <Toaster />
          <Navbar />
          {children}
        </AllProviders>
      </body>
    </html>
  );
}
