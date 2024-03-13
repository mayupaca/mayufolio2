import React from "react";
import { projects } from "../data/projectsData";
import { ArrowIcon } from "./Icon";

function Project() {
  return (
    <section id="project" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
          Projects
        </h1>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <div key={index} className="md:w-1/3 p-4">
              <div className="border-4 border-custom-gold rounded-lg pt-5">
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-48 h-32 object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#AF9221] text-white rounded-full flex justify-center items-center w-8 h-8">
                      {project.icon}
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium ml-2">
                      {project.name}
                    </h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                    <a
                      href={project.git_repo}
                      className="flex mt-3 text-custom-gold items-center"
                    >
                      MORE
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
