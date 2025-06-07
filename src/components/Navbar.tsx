"use client";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import ScrollLink from "./ScrollLink";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div
      className="
    fixed top-4 left-1/2 transform -translate-x-1/2
    z-50
    inline-flex
    px-4 py-2
    bg-white/30 backdrop-blur-lg
    border border-teal-500/50
    rounded-full
    shadow-lg shadow-teal-500/20
    transition-all duration-300
    hover:bg-white/40
  "
    >
      <ul
        className="
      flex items-center
      gap-4 sm:gap-6
      text-xs sm:text-sm font-semibold uppercase
      tracking-wider
      text-teal-900/80
    "
      >
        {["about", "skills", "projects", "contact"].map((id) => (
          <li
            key={id}
            className="
          relative
          before:absolute before:-bottom-1 before:left-0 before:w-0 
          before:h-[2px] before:bg-teal-500 before:transition-all
          hover:before:w-full
          hover:text-teal-800/100
        "
          >
            <ScrollLink href={`#${id}`}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
