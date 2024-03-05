import React from "react";

function About() {
  return (
    <section id="about" className="text-gray-700 border-t border-gray-200">
      <div className="flex container px-5 py-24 mx-auto flex-wrap">
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./img/takachiho.jpg" alt="" className="rounded" />
        </div>
        <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
            ABOUT ME
          </h1>
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolore officiis odio unde odit corporis nulla quae impedit deserunt
            laboriosam provident hic, fugiat veritatis blanditiis quidem sed
            maiores. Aliquam ullam officiis tenetur debitis accusamus dolore sit
            inventore saepe alias! Sequi vitae laboriosam, commodi, quibusdam
            neque eos sunt, voluptates eius recusandae nemo quos architecto sit
            natus quam! Doloremque repellat quaerat suscipit. Perspiciatis
            blanditiis fuga veniam culpa fugiat libero est unde voluptatum
            consequatur! Similique inventore quasi illo facilis fuga eum
            consectetur fugit, laudantium consequatur aperiam nobis iure sunt ea
            culpa maiores deserunt a porro minus doloribus! Nemo porro mollitia
            sapiente adipisci eum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
