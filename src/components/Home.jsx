import React from "react";
import { LinkedInIcon, GitHubIcon } from "./Icon";

function Home() {
  return (
    <section id="home" className="text-gray-700">
      <div className="container mx-auto py-20 px-5 flex flex-col items-center md:flex-row">
        <div className="flex flex-col items-center md:items-start md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
            Hello world!
            <br />
            I am Mayu Suzumura
            <br />
            {/* Web Developer */}
          </h1>
          <p className="mb-8 leading-relaxed">
            After graduating from a Full-Stack Web Developer bootcamp,
            Passionate about blending technology with creativity, I'm currently
            sharpening my skills in Python for testing. This portfolio showcases
            my journey. I'm on the lookout for opportunities to apply my
            technical skills and creativity. Excited to collaborate the future
            together.
          </p>
          <div className="text-custom-gold w-24 text-lg font-bold">CONTACT</div>
          <p className="text-lg">mayusuzumura55@gmail.com</p>
          <div className="mt-1 w-full flex justify-center md:justify-start">
            <div className="flex justify-center md:justify-start text-custom-gold mt-2">
              <a
                href="https://www.linkedin.com/in/mayu-suzumura"
                className="pr-2 hover:opacity-50 duration-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/mayupaca"
                className="hover:opacity-50 duration-300"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/02.JPG" alt="" className="rounded" />
        </div>
      </div>
    </section>
  );
}

export default Home;
