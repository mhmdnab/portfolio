"use client";
import Link from "next/link";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import ScrollLink from "./ScrollLink";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div
      className="
      fixed top-2 left-1/2 transform -translate-x-1/2
      z-[100]
      px-6 py-3
    bg-white/30          
      backdrop-blur-md     
      border border-[#147b86]
      rounded-xl          
      shadow-sm
      shadow-[#147b86]"
    >
      <ul
        className="
        flex 
        items-center 
        gap-4 
        text-sm 
        uppercase 
        whitespace-nowrap
      "
      >
        <li className="hover:text-[#0d5d66] hover:scale-105 transition-transform">
          <ScrollLink href="#about">About</ScrollLink>
        </li>
        <li className="hover:text-[#0d5d66] hover:scale-105 transition-transform">
          <ScrollLink href="#skills">Skills</ScrollLink>
        </li>
        <li className="hover:text-[#0d5d66] hover:scale-105 transition-transform">
          <ScrollLink href="#projects">Projects</ScrollLink>
        </li>
        <li className="hover:text-[#0d5d66] hover:scale-105 transition-transform">
          <ScrollLink href="#contact">Contact Me</ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
