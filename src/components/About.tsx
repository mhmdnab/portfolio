import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2 my-6">
          <p className="uppercase tracking-widest text-[#0c4f57] text-2xl">
            About me
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            I specialize in building full stack websites with their front-end
            and back-end that connect with APIs and other backend technologies.
            Im passionate about learning new technologies and understand more
            about thsi domain. Though I am most proficient in building front-end
            applications using HTML, CSS, Javascript, React and Next. I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>
          <p className="py-2">
            I started web developement in 2021 managing multiple e-commerce
            websites on different platforms. I have experience working directly
            with clients and taking mock wireframes all the way to deployed
            applications. In my spare time I make projects and learn more
            frameworks that are useful for this purpose.
          </p>
          <p className="py-2 cursor-pointer underline">
            <a
              href={"https://www.github.com/moesecc"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my latest projects down below
            </a>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-ceneter hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="abtImg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

//FIRST PARAGRAPH

//SECOND PARAGRAPH
