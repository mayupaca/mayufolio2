import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="text-gray-700 border-b border-gray-200 fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">mayufolio</span>
        </a>
        <nav className="md:ml-auto text-base">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-custom-gold duration-300"
          >
            HOME
          </Link>
          <Link
            to="skill"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-custom-gold duration-300"
          >
            SKILLS
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-custom-gold duration-300"
          >
            PROJECTS
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-custom-gold duration-300"
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
