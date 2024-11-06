"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaLaptopCode } from "react-icons/fa";

const cc = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });
const Main = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen text-center my-8">
      <div className="max-w-[1240px] w-full h-full mx-auto my-5 flex justify-center items-center">
        <div id="home" className="md:py-12 py-32">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets reach out and build together
          </p>
          <h1 className="py-4">
            Hey, I am <span className={cc.className}>Mohamad</span>
          </h1>
          <h1 className="py-2">
            A Web Developer <FaLaptopCode className="text-5xl m-auto mt-8" />
          </h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a MERN web developer, creating sleek and functional websites.
            Proficient in HTML, CSS, JavaScript (React Js and Next Js), MongoDB,
            and Node.js, I stay current with web trends through continuous
            learning. I thrive on collaborative projects, ensuring websites are
            both visually appealing and user-friendly.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {/* Make links here for each logo for my social media */}
            <Link
              href={"https://www.linkedin.com/in/mohamad-el-naboulsi-6480311aa"}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 hover:shadow-[#0ea2b3] hover:shadow-xl p-5 cursor-pointer hover:scale-110 ease-in duration-100"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
            <Link
              href={"https://www.github.com/moesecc"}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 hover:shadow-[#0ea2b3] hover:shadow-xl p-5 cursor-pointer hover:scale-110 ease-in duration-100"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link
              href={"mailto:mhmdnab004@gmail.com"}
              className="rounded-full shadow-lg shadow-gray-400 hover:shadow-[#0ea2b3] hover:shadow-xl p-5 cursor-pointer hover:scale-110 ease-in duration-100"
            >
              <AiOutlineMail className="text-xl" />
            </Link>
            <Link
              href={"https://wa.link/ssvq0l"}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 hover:shadow-[#0ea2b3] hover:shadow-xl p-5 cursor-pointer hover:scale-110 ease-in duration-100"
            >
              <BsWhatsapp className="text-xl" />
            </Link>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
