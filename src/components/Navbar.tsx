"use client";
import Link from "next/link";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import ScrollLink from "./ScrollLink";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className="fixed w-full h-auto bg-white/80 backdrop-blur-md shadow-xl z-[100] py-4">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Logo */}
        <h1
          className={`${cc.className} md:text-4xl text-3xl text-[#147b86] mb-4`}
        >
          <Link href="/">moe</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 md:text-md text-sm">
          <li className="uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
            <ScrollLink href={"#about"}>About</ScrollLink>
          </li>
          <li className="uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
            <ScrollLink href={"#skills"}>Skills</ScrollLink>
          </li>
          <li className="uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
            <ScrollLink href={"#projects"}>Projects</ScrollLink>
          </li>
          <li className="uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
            <ScrollLink href={"#contact"}>Contact Me</ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
