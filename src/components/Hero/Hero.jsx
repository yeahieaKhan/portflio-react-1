import React from "react";
import HeroImg from "../../assets/hero-img.jpg";
import { Typewriter } from "react-simple-typewriter";

import { FaFacebook, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  const handleType = (count) => {
    console.log(count); // logs the typing progress
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm YEAHIEA KHAN!</h1>
          <p
            style={{
              paddingTop: "2rem",
              fontWeight: "normal",
              fontSize: "1.5rem",
            }}
          >
            <span style={{ color: "red", fontWeight: "bold" }}>
              <Typewriter
                words={[
                  "MERN Stack developer",
                  "Frontend Developer",
                  "Web Developer",
                  "Full Stack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </p>
          <p className="py-6">
            I specialize in creating full-stack web applications using{" "}
            <b>
              JavaScript, React.js, Node.js, Express.js, Tailwind CSS, MongoDB,
              Firebase
            </b>
            . I'm always eager to learn and take on new challenges.
          </p>
          <ul className="flex gap-4 items-center">
            <li>
              <button className="btn btn-secondary flex items-center gap-2">
                <FaFileAlt size={18} /> Resume
              </button>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yeahieaKhan83"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:scale-110 transition-transform duration-200"
              >
                <FaFacebook size={32} />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/yeahiea21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077B5] hover:scale-110 transition-transform duration-200"
              >
                <FaLinkedin size={32} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/yeahieaKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#181717] hover:scale-110 transition-transform duration-200"
              >
                <FaGithub size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
