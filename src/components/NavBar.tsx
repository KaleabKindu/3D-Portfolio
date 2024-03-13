import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full z-50 sticky:bg-red">
      <div className="flex justify-between max-w-7xl mx-auto p-5">
        <Link to={"/"} className="flex items-center gap-5">
          <img
            src="/logo-4.svg"
            className="rounded-full w-16 lg:w-24 h-16 lg:h-24 object-cover"
            alt=""
          />
          <p className="font-bold text-md lg:text-xl">
            Kaleab | <span className="text-blue-900">Web Developer</span>{" "}
          </p>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-poppins font-semibold text-lg"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
