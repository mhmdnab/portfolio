"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ScrollLink from "./ScrollLink";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl backdrop-blur-md z-[100]">
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <h1 className="text-[#0c4f57]">
          <Link href="/">MOE</Link>
        </h1>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:text-[#147b86]">
              <ScrollLink href={"#about"}>About</ScrollLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-[#147b86]">
              <ScrollLink href={"#skills"}>Skills</ScrollLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-[#147b86]">
              <ScrollLink href={"#projects"}>Projects</ScrollLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-[#147b86]">
              <ScrollLink href={"#contact"}>Contact Me</ScrollLink>
            </li>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
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
                <h1>MOE</h1>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-600 p-2 cursor-pointer"
              >
                <AiOutlineClose />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
