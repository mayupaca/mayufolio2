/* cSpell:ignore mayu */
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">MayuFolio</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              HOME
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              ABOUT
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              SKILLS
            </a>
            <a href="#projects" className="hover:text-blue-400 duration-300">
              PROJECTS
            </a>
          </nav>
        </div>
      </header>
      {/* Home */}
      <section id="home" className="text-gray-700">
        <div className="container flex mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hello world!
              <br />
              I am Mayu Suzumura
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              rerum quisquam vel aperiam! Reiciendis libero itaque natus eum
              aliquam beatae!
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/02.JPG" alt="" className="rounded"/>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              ABOUT ME
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              dolore officiis odio unde odit corporis nulla quae impedit
              deserunt laboriosam provident hic, fugiat veritatis blanditiis
              quidem sed maiores. Aliquam ullam officiis tenetur debitis
              accusamus dolore sit inventore saepe alias! Sequi vitae
              laboriosam, commodi, quibusdam neque eos sunt, voluptates eius
              recusandae nemo quos architecto sit natus quam! Doloremque
              repellat quaerat suscipit. Perspiciatis blanditiis fuga veniam
              culpa fugiat libero est unde voluptatum consequatur! Similique
              inventore quasi illo facilis fuga eum consectetur fugit,
              laudantium consequatur aperiam nobis iure sunt ea culpa maiores
              deserunt a porro minus doloribus! Nemo porro mollitia sapiente
              adipisci eum.
            </p>
          </div>
          {/* cards div */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque iusto optio cumque debitis quia nam amet omnis
                    quisquam placeat commodi.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque iusto optio cumque debitis quia nam amet omnis
                    quisquam placeat commodi.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque iusto optio cumque debitis quia nam amet omnis
                    quisquam placeat commodi.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill */}
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
    </>
  );
}

export default App;
