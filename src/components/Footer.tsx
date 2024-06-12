import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      id="contact"
      className="p-4 m-auto items-center w-full flex-col justify-center bg-gradient-to-r from-[#147b86] to-[#055b64] border shadow-2xl"
    >
      <div className="items-center py-4">
        <p className="text-[#caf3f8] text-center text-xl">
          Follow me on my social media for the latest updates.
        </p>
        <div className="text-[#caf3f8] w-auto p-4 text-center flex justify-center gap-8">
          <a href="mailto:mhmdnab004@gmail.com" rel="noopener" target="_blank">
            <AiOutlineMail
              size={30}
              className="hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/mhmadnab/"
            rel="noopener"
            target="_blank"
          >
            <FaInstagram
              size={30}
              className="hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamad-el-naboulsi-6480311aa/"
            rel="noopener"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              className="hover:scale-125 transition-transform duration-200"
            />
          </a>
          <a href="https://github.com/moesecc" rel="noopener" target="_blank">
            <FaGithub
              size={30}
              className="hover:scale-125 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
