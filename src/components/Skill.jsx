import React from "react";
import SkillLevel from "./SkillLevel";

function Skill() {
  return (
    <section id="skill" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
          My Skill
        </h1>
        <div className="lg:pl-10 lg:py-6 w-full lg:w-1/2">
          <div className="flex items-center mb-2">
            <h2 className="mr-2 w-24">HTML</h2>
            <SkillLevel level={4} />
          </div>
          <div className="flex items-center mb-2">
            <h2 className="mr-2 w-24">CSS</h2>
            <SkillLevel level={4} />
          </div>
          <div className="flex items-center mb-2">
            <h2 className="mr-2 w-24">Python</h2>
            <SkillLevel level={3} />
          </div>
          <div className="flex items-center mb-2">
            <h2 className="mr-2 w-24">React</h2>
            <SkillLevel level={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
