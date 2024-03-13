import { TypeAnimation } from "react-type-animation";
import HeroCanvas from "./canvas/HeroCanvas";

const Hero = () => {
  return (
    <div className="relative h-[100vh] text-3xl max-w-7xl mx-auto">
      <HeroCanvas />
      <div className="flex gap-5 p-5 mt-10">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-blue-900" />
          <div className="w-1 h-80 bg-gradient-to-b from-blue-900 to-transparent" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-blue-900">Kaleab</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I'm a Frontend Web Developer",
              1000,
              "I'm a Frontend Web",
              1000,
              "I'm a Frontend",
              1000,
              "I'm a Frontend Web",
              1000,
              "I'm a Frontend Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
