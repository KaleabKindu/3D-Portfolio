import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { projects } from "../constants";
import withWrapper from "./hoc/Wrapper";
import {
  slideInFromBottom,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
};
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <motion.div variants={slideInFromBottom(0.5 + index)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative z-20">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center"
      viewport={{ once: true }}
    >
      <motion.div variants={slideInFromTop}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          My Works
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="mt-3 text-secondary text-center text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default withWrapper(Projects);
