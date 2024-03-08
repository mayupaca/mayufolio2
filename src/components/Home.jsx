import React from "react";

function Home() {
  return (
    <section id="home" className="text-gray-700">
      <div className="container flex mx-auto py-20 px-5 flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
            Hello world!
            <br />
            I am Mayu Suzumura
            <br />
            {/* Web Developer */}
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            rerum quisquam vel aperiam! Reiciendis libero itaque natus eum
            aliquam beatae!
          </p>
          <button className="text-white bg-[#AF9221] py-2 px-6 border-0 rounded text-lg hover:opacity-70 duration-300">
            Contact
          </button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/02.JPG" alt="" className="rounded" />
        </div>
      </div>
    </section>
  );
}

export default Home;
