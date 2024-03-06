"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen text-center my-5">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div id="home">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets reach out and build together
          </p>
          <h1 className="py-4">
            Hey, I am <span className="text-[#0c4f57]">Mohamad</span>
          </h1>
          <h1 className="py-2">A Full Stack Web Developer (MERN)</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a MERN Full-Stack web developer creating sleek and functional
            websites. Proficient in HTML, CSS, JavaScript (React Js and Next
            Js), MongoDB, and Node.js, I stay current with web trends through
            continuous learning. I thrive on collaborative projects, ensuring
            websites are both visually appealing and user-friendly.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            {/* Make links here for each logo for my social media */}
            <Link
              href={"https://www.linkedin.com/in/mohamad-el-naboulsi-6480311aa"}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"https://www.github.com/moesecc"}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href={"mailto:mhmdnab004@gmail.com"}
              // onClick={() => {
              //   router.push("mailto:mhmdnab004@gmail.com");
              // }}
              className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
