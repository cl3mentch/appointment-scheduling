/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  return (
    <main className=" min-h-screen relative h-screen w-full flex flex-col items-center justify-center space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-4 py-8 border border-black/10 w-full max-w-[900px] space-y-2">
        <div className="space-y-5">
          <div className="bg-black max-w-[30%] h-[200px] m-auto text-white flex flex-col items-center justify-center">
            IMAGE LOGO
          </div>
          <p className="text-center font-bold">Company Name</p>
        </div>
        <div className="space-y-2">
          <p className="font-bold">Rescheduling and Cancellation Policy</p>
          <p className="text-sm">
            Please make any rescheduling or cancellation at least 24 hours in
            advance. Rescheduling or cancellation made less than 24 hours from
            the scheduled session will forfeit the full session fee. No-shows
            will also forfeit the session.
          </p>
          <p className="text-sm">
            All prices below are inclusive of any applicable service tax.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 py-8 border border-black/10 w-full max-w-[900px] "></div>
    </main>
  );
}
