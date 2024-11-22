"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { Cedarville_Cursive } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import ScrollLink from "./ScrollLink";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl backdrop-blur-md z-[100]">
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <h1 className={cc.className}>
          <Link className="text-[#147b86]" href="/">
            moe
          </Link>
        </h1>
        <div>
          <ul className="hidden md:flex text-md ">
            <li className="ml-10 uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
              <ScrollLink href={"#about"}>About</ScrollLink>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
            </li>
            <li className="ml-10 uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
              <ScrollLink href={"#skills"}>Skills</ScrollLink>
            </li>
            <li className="ml-10 uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
              <ScrollLink href={"#projects"}>Projects</ScrollLink>
            </li>
            <li className="ml-10 uppercase hover:text-[#147b86] hover:scale-105 transition-transform">
              <ScrollLink href={"#contact"}>Contact Me</ScrollLink>
            </li>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} className="text-[#0c4f57]" />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 m-auto p-auto w-full h-screen bg-black/50"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full items-center">
              <Link href="/" className="text-[#0c4f57]">
                <h1 className={cc.className}>MOE</h1>
              </Link>
              <div onClick={handleNav} className="cursor-pointer">
                <AiOutlineClose size={22} className="text-[#0c4f57]" />
              </div>
            </div>
            <div className="border-b border-gray-800 my-5">
              <p className="w-[85%] md:w-[90%] py-4">
                Crafting websites that blend style with simplicity
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <ScrollLink href={"#about"}>
                <li className="py-4 text-sm hover:text-[#147b86]">About</li>
              </ScrollLink>
              <ScrollLink href={"#skills"}>
                <li className="py-4 text-sm hover:text-[#147b86]">Skills</li>
              </ScrollLink>
              <ScrollLink href={"#projects"}>
                <li className="py-4 text-sm hover:text-[#147b86]">Projects</li>
              </ScrollLink>
              <ScrollLink href={"#contact"}>
                <li className="py-4 text-sm hover:text-[#147b86]">
                  Contact Me
                </li>
              </ScrollLink>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#11717e] ">
                Lets reach out and build together
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://www.linkedin.com/in/mohamad-el-naboulsi-6480311aa/"
                    rel="noopener"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://github.com/moesecc"
                    rel="noopener"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="mailto:mhmdnab004@gmail.com"
                    rel="noopener"
                    target="_blank"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a
                    href="https://wa.link/ssvq0l"
                    rel="noopener"
                    target="_blank"
                  >
                    <BsWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
