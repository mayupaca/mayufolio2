import React from "react";

const Skill = () => {
  return (
    <section id="skills" className="text-gray-700 border-t border-gray-200">
      <div className="flex container px-5 py-24 mx-auto flex-wrap">
        <div className=" mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./img/takachiho.jpg" alt="" className="rounded" />
        </div>
        <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
            My Skill
          </h1>
          <div>
          <h2>HTML</h2>
                <div className="shadow bg-green-100">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h2>CSS</h2>
                <div className="shadow bg-green-100">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h2>Python</h2>
                <div className="shadow bg-green-100">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
                <h2>JavaScript</h2>
                <div className="shadow bg-green-100">
                  <div
                    className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;