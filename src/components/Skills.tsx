"use client";

import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import jsicon from "../../public/assets/js-icon.png";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css-icon.png";
import tailwind from "../../public/assets/tailwind-icon.png";
import mongo from "../../public/assets/mongo-icon.png";
import nodejs from "../../public/assets/nodejs-icon.png";
import reactjs from "../../public/assets/react-icon.png";
import nextjs from "../../public/assets/nextjs-icon.png";

const skills = [
  {
    name: "HTML 5",
    icon: html,
    color: "#ff4a00",
    description: "Semantic markup & accessibility",
  },
  {
    name: "JavaScript",
    icon: jsicon,
    color: "#f7df1f",
    description: "ES6+ & modern features",
  },
  {
    name: "CSS",
    icon: css,
    color: "#0277bd",
    description: "Responsive design & animations",
  },
  {
    name: "React",
    icon: reactjs,
    color: "#0ea2b3",
    description: "Hooks, context & performance",
  },
  {
    name: "Next.js",
    icon: nextjs,
    color: "#000000",
    description: "SSR, SSG & App Router",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#43aab5",
    description: "Utility-first styling",
  },
  {
    name: "MongoDB",
    icon: mongo,
    color: "#5e9029",
    description: "NoSQL database design",
  },
  {
    name: "Node.js",
    icon: nodejs,
    color: "#24a769",
    description: "Server-side JavaScript",
  },
];

const Skills = () => {
  return (
    <section className="w-full py-16 lg:py-24" id="skills">
      <div className="mx-auto max-w-6xl md:px-12 px-2">
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase text-[#0c4f57]">
            My Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What do I do
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            I prioritize minimalist design and enjoy crafting interactive
            experiences from scratch, using these technologies listed below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={
                {
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  "--hover-shadow": `0 20px 40px ${skill.color}40`,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${skill.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
              }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 transition-colors duration-300 group-hover:bg-gray-100 sm:h-20 sm:w-20">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
                  />
                </div>

                <h3 className="text-sm font-semibold text-gray-900 sm:text-base lg:text-lg">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-sm">
                  {skill.description}
                </p>

                {/* Animated border */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: skill.color }}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Always learning and exploring new technologies to stay current with
            industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
