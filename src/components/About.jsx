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
            Hello, I'm Mayu Suzumura, navigating my way from full-stack web development to becoming a software automation engineer. 
          </p>
          <p>
            I'm deeply passionate about coding and testing, challenging myself daily to merge technology with creativity. Based in Toronto, Canada, I'm currently honing my skills in Python and software testing, eagerly searching for new opportunities.<br />
            
            In my personal life, I find immense joy in spending time with cats, exploring the world, keeping fit at the gym, and savoring delicious meals. I have a particular passion for exploring diverse culinary cultures. These experiences enrich my creativity, providing unique perspectives that inspire fresh ideas in my daily work.<br />

            With a strong foundation in programming, I deeply value adaptability, precision, and a commitment to lifelong learning. My ability to remain calm under pressure and exceptional stress management and resilience make me a reliable team member. Skills in self-directed learning and time management, honed through an intensive web development bootcamp and continuous self-improvement, are cornerstones of my professional life.<br />

            This portfolio showcases my technical journey and growth. I look forward to opportunities where I can apply my technical skills and creativity to co-create the future. I'm excited to find partners to embark on this stimulating journey together.<br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
