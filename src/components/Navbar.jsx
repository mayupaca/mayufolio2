import React from "react";

function Navbar() {
  return (
    <header className="text-gray-700 border-b border-gray-200 fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">MayuFolio</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
            HOME
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
            SKILLS
          </a>
          <a href="#projects" className="mr-5 hover:text-blue-400 duration-300">
            PROJECTS
          </a>
          <a href="#about" className="hover:text-blue-400 duration-300">
            ABOUT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;