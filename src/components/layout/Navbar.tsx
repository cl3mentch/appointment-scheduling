/* eslint-disable @next/next/no-img-element */
"use client";

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
      </div>
    </main>
  );
}
