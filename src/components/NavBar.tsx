import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { IoLogoLinkedin, IoLogoDiscord, IoLogoGithub } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="sticky flex items-center justify-between top-0 w-full z-50 px-2 lg:px-20 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
      <Link to={"/"} className="flex flex-1 items-center gap-5 ">
        <img
          src="/logo-4.svg"
          className="rounded-full w-12 lg:w-16 h-12 lg:h-16 object-cover"
          alt=""
        />
        <p className="font-bold text-md lg:text-xl">
          Kaleab |{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Web Developer
          </span>{" "}
        </p>
      </Link>
      <div className="hidden md:flex flex-1 w-[500px] h-full flex-row items-center justify-between ">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden md:flex gap-5 justify-end items-center flex-1">
        <a href="http://">
          <IoLogoGithub size={30} />
        </a>
        <a href="http://">
          <IoLogoLinkedin size={30} />
        </a>
        <a href="http://">
          <IoLogoDiscord size={30} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
