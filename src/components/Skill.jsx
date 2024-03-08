import React from "react";

function Skill() {
  return (
    <section id="skill" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./img/takachiho.jpg" alt="" className="rounded" />
        </div> */}

        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
          My Skill
        </h1>
        <div className="lg:pl-10 lg:py-6 w-full lg:w-1/2">
          <h2>HTML</h2>
          <div className="shadow bg-[#eadb9f]">
            <div
              className="bg-[#AF9221] text-xs leading-none py-1 text-center text-white"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <h2>CSS</h2>
          <div className="shadow bg-[#eadb9f]">
            <div
              className="bg-[#AF9221] text-xs leading-none py-1 text-center text-white"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <h2>Python</h2>
          <div className="shadow bg-[#eadb9f]">
            <div
              className="bg-[#AF9221] text-xs leading-none py-1 text-center text-white"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
          <h2>React</h2>
          <div className="shadow bg-[#eadb9f] ">
            <div
              className="bg-[#AF9221] text-xs leading-none py-1 text-center text-white"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
