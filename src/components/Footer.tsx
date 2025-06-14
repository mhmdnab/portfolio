import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Cedarville_Cursive } from "next/font/google";

import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
    <div
      id="contact"
      className="p-4 m-auto items-center w-full flex-col justify-center bg-gradient-to-r from-[#147b86] to-[#055b64] border shadow-2xl"
    >
      <div className="items-center py-4">
        <h1
          className={`${cc.className} md:text-4xl text-3xl text-center text-[#caf3f8] mb-2`}
        >
          <Link href="/">moe</Link>
        </h1>
        <div className="text-[#caf3f8] w-auto p-4 text-center flex justify-center gap-8 mb-2">
          <a href="mailto:mhmdnab004@gmail.com" rel="noopener" target="_blank">
            <AiOutlineMail
              size={28}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/mhmadnab/"
            rel="noopener"
            target="_blank"
          >
            <FaInstagram
              size={27}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-el-naboulsi-6480311aa/"
            rel="noopener"
            target="_blank"
          >
            <FaLinkedin
              size={27}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://github.com/mhmdnab" rel="noopener" target="_blank">
            <FaGithub
              size={27}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="https://wa.link/ssvq0l" rel="noopener" target="_blank">
            <BsWhatsapp
              size={27}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
        <p className="text-[#caf3f8] text-center text-md">
          Lets reach out and build together
        </p>
      </div>
    </div>
  );
};

export default Footer;
