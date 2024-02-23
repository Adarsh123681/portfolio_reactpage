import React, { useEffect } from "react";
function About() {
  return (
    <>
      {/* main */}
      <div
        className="h-screen mb-20 text-center p-2 bg-gray-700"
        method="Get"
        action="/about"
      >
 <h1 className="text-2xl py-4 md:text-xl m-2 p-2 bg-gray-600 text-cyan-300 rounded-lg font-bold text-center tracking-wide">About Me</h1>
        {/* image */}
        <img
          src="./image/Adarsh.jpeg"
          alt=""
          className="w-28 h-28 rounded-lg shadow-zinc-200 shadow-md m-auto my-5 md:"
        />
        {/* cotntent */}
        <div className="w-[45rem] h-fill text-sm md:my-4 md:text-xl text-lime-50 tracking-wider break-words m-auto">
        Hello there! I'm <b className="text-red-600">ADARSH TRIPATHI</b>, a budding web developer with a passion for crafting beautiful and functional digital experiences. While I may be new to the world of web development, my enthusiasm and eagerness to learn are boundless. I'm ready to dive headfirst into the exciting realm of coding and design, eager to make my mark in this dynamic field.
        </div>
      </div>
    </>
  );
}

export default About;
