import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { slideInFromLeft } from "../utils/motion";
import withWrapper from "./hoc/Wrapper";

type ServiceProps = {
  index: number;
  title: string;
  icon: string;
};
const ServiceCard = ({ index, title, icon }: ServiceProps) => (
  <Tilt className="relatie z-20">
    <motion.div
      variants={slideInFromLeft(0.1 + 0.5 * index)}
      className="xs:w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center h-[80vh]"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.1)}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={slideInFromLeft(0.5)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default withWrapper(About);
