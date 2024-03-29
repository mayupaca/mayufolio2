import React from "react";
import SkillLevel from "./SkillLevel";

function Skill() {
  return (
    <section id="skill" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
          My Skill
        </h1>
        <div className="lg:pl-10 lg:py-6 p-4">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">HTML</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">CSS</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Python</h2>
              <SkillLevel level={4} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">React</h2>
              <SkillLevel level={4} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">TailwindCSS</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Node.js</h2>
              <SkillLevel level={4} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">PostgreSQL</h2>
              <SkillLevel level={3} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Communication</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Adaptability</h2>
              <SkillLevel level={6} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Accuracy</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Hardworking</h2>
              <SkillLevel level={5} />
            </div>
            <div className="flex justify-center items-center mb-2 w-full md:w-1/2 lg:w-1/3 px-2">
              <h2 className="mr-2 w-32">Lifelong Learning</h2>
              <SkillLevel level={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
