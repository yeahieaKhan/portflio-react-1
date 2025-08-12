import React from "react";
import Lottie from "lottie-react";
import LottieItems from "../../assets/developer skills.json";

const About = () => {
  return (
    <div className="py-20">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <Lottie
              animationData={LottieItems}
              loop={true}
              className="md:w-xl w-80 h-80"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">About Me!</h1>
            <p className="py-6">
              Hi, I’m Yeahiea Khan — a MERN Stack Developer from Dhaka,
              Bangladesh, with nearly one year of experience building modern,
              responsive web applications.
            </p>
            <p className="py-6">
              <b> Technical Expertise</b> MERN Stack Developer with nearly 1
              year of experience building modern, responsive web applications
              using React.js, Next.js, Express.js, JavaScript, MongoDB, and
              Tailwind CSS. Skilled in creating efficient, scalable, and
              user-focused solutions.
            </p>
            <p className="py-6">
              <b> Passion & Goals</b> Passionate about problem-solving,
              continuous learning, and innovation. Currently focused on
              mastering full-stack development while expanding into DevOps and
              AWS Cloud to provide complete end-to-end solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
