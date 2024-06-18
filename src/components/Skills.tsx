import Image from "next/image";
import React from "react";

import jsicon from "../../public/assets/js-icon.png";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css-icon.png";
import tailwind from "../../public/assets/tailwind-icon.png";
import mongo from "../../public/assets/mongo-icon.png";
import nodejs from "../../public/assets/nodejs-icon.png";
import reactjs from "../../public/assets/react-icon.png";
import nextjs from "../../public/assets/nextjs-icon.png";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2 py-7" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full my-6">
        <p className="uppercase tracking-widest text-[#0c4f57] text-2xl">
          My Skills
        </p>
        <h2 className="py-4">What do I do</h2>
        <p className="py-4 text-xl">
          I prioritize minimalist design and enjoy crafting interactive
          experiences from scratch, using these technologies listed below.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:text-sm py-4 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={html} alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML 5</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={jsicon} alt="javascript" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={css} alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={reactjs} alt="React" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={nextjs} alt="next" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={tailwind} alt="tailwind" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={mongo} alt="mongodb" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-lg hover:scale-105 ease-in duration-200 hover:bg-[#5db2bc]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image width="96" height="96" src={nodejs} alt="node js" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
