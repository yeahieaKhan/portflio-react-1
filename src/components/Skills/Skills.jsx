import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {  SiFirebase, SiGithub, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-7xl mx-auto p-6 py-20 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center pb-3">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 gap-6">
        {/* HTML */}
        <div className="flex  flex-col items-center justify-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <FaHtml5 className="text-center" color="#E34F26" size={32} />
          <h3 className="text-lg font-semibold">HTML</h3>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center justify-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <FaCss3Alt color="#1572B6" size={32} />
          <h3 className="text-lg font-semibold">CSS</h3>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center justify-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <BiLogoTailwindCss color="#06B6D4" size={32} />
          <h3 className="text-lg font-semibold">Tailwind</h3>
        </div>

        {/* React */}
        <div className="flex flex-col items-center gap-3 justify-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <FaReact color="#61DAFB" size={32} />
          <h3 className="text-lg font-semibold">React</h3>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center gap-3 p-4 justify-center border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <FaNodeJs color="#339933" size={32} />
          <h3 className="text-lg font-semibold">Node</h3>
        </div>

        {/* Firebase */}
        <div className="flex flex-col items-center gap-3 p-4 justify-center border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <SiFirebase color="#FFCA28" size={32} />
          <h3 className="text-lg font-semibold">Firebase</h3>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center gap-3 p-4  justify-center border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <SiMongodb color="#47A248" size={32} />
          <h3 className="text-lg font-semibold">Mongodb</h3>
        </div>
        {/* GitHub */}
        <div className="flex flex-col items-center gap-3 p-4 justify-center border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-default">
          <SiGithub color="#181717" size={32} />
          <h3 className="text-lg font-semibold">GitHub</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
