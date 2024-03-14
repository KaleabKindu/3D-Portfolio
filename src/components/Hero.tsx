import { TypeAnimation } from "react-type-animation";
import HeroCanvas from "./canvas/ComputerCanvas";
import withWrapper from "./hoc/Wrapper";
import { IoSparklesSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="relative flex h-[90vh] w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute -top-[520px] h-auto w-full  z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <HeroCanvas />
    </div>
  );
};

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-5 items-center justify-center w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-5 ml-8 border border-[#7042f88b] opacity-[0.9]"
        >
          <IoSparklesSharp className="text-[#b49bff] lg:mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>
        <div className="flex gap-5">
          <motion.div
            variants={slideInFromTop}
            className="flex flex-col items-center"
          >
            <div className="w-4 h-4 rounded-full bg-purple-500" />
            <div className="w-1 h-80 bg-gradient-to-b from-purple-500 to-transparent" />
          </motion.div>
          <div className="flex flex-col gap-5">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  the best{" "}
                </span>
                <TypeAnimation
                  sequence={[
                    "Project experience",
                    1000,
                    "Project",
                    1000,
                    "",
                    1000,
                    "Project",
                    1000,
                    "Project experience",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              I&apos;m a Frontend Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and
              skills.
            </motion.p>
          </div>
        </div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 ml-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default withWrapper(Hero);
