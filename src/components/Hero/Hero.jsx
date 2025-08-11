import React from "react";
import HeroImg from "../../assets/hero-img.jpg";
import { Typewriter } from "react-simple-typewriter";

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
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
