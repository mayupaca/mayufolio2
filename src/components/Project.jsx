import React from "react";
import { PiggyBankIcon, ArrowIcon } from "./Icon";

function Project() {
  return (
    <section id="project" className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
          Projects
        </h1>
        <div className="flex flex-wrap">
          <div className="md:w-1/3 p-4">
            <div className="border-4 border-custom-gold rounded-lg pt-5">
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src="./img/demoVideogif.gif"
                  alt=""
                  className="w-48 h-32 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-[#AF9221] text-white rounded-full flex justify-center items-center w-8 h-8">
                    <PiggyBankIcon />
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Tiny Cash Book
                  </h2>
                </div>
                <div>
                  <p>
                    About Tiny Cash Book is a simple Python app that teaches
                    kids financial management by tracking allowances and
                    spending with visual charts.
                  </p>
                  <a
                    href="https://github.com/mayupaca/tiny-cash-book"
                    className="flex mt-3 text-custom-gold items-center"
                  >
                    MORE
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
