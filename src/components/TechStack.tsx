import { Backend_skill, Frontend_skill, Full_stack } from "../constants";
import { motion } from "framer-motion";
import { IoSparklesSharp } from "react-icons/io5";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full z-20 overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <div key={index} className="w-28 h-28 relative z-20">
            <Stack key={index} src={image.Image} index={index} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <div key={index} className="w-28 h-28 relative z-20">
            <Stack key={index} src={image.Image} index={index} />
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <div key={index} className="w-28 h-28 relative z-20">
            <Stack key={index} src={image.Image} index={index} />
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute z-[1] object-cover">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-5 border border-[#7042f88b] opacity-[0.9]"
      >
        <IoSparklesSharp className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Think better with Next.js</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};
interface Props {
  src: string;
  index: number;
}

const Stack = ({ src, index }: Props) => {
  const animationDelay = 0.3;
  return (
    <motion.div
      initial="hidden"
      variants={slideInFromRight(animationDelay * index)}
      animate="visible"
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex justify-center items-center"
    >
      <img src={src} className="w-16 h-16" alt="Stack image" />
    </motion.div>
  );
};

export default TechStack;
