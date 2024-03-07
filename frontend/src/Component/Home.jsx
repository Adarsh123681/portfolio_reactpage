import React from 'react'
import Project from "./Project";
import Skills from './Skills';
import Services from "./Services"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import resume from "./Resume.pdf"
function Home() {

  return (
    <>
      <div className="bg-gray-800 text-white">
        {/* content */}
        <div className="w-fill md:flex md:ml-28">
          <div className="md:h-96 lg:ml-60 lg:mt-20 flex flex-col text-center md:text-left m-auto md:mt-8 tracking-wider skew-12">
            {/*  big text*/}
            <span className="text-3xl mt-3 transition-all delay-500">Hello</span>
            <div className="text-xl sm:text-xl md:text-3xl font-bold   my-2">
              Welcome To My Portfolio
            </div>
            {/* text medium */}
            <span className="text-3xl">I am</span>
            <span className="text-xl leading-10 bold text-gradient-to-r from-blue-600 via-green-500 to-indigo-400">Adarsh Tripathi</span>
            {/* text-small */}
            <span className="text-md mb-5">Web Developer</span> 
            <a
              href={resume}
              download="Resume.pdf"
            >
              <button className='w-40 h-10 bg-red-800 hover:bg-red-300 hover:scale-110 rounded-lg shadow-md shadow-red-100 hidden md:flex p-2' download="resume">Download Resume</button>
            </a>
            <div className="flex m-auto md:ml-3 md:mt-3 md:flex">
              <a href="https://www.linkedin.com/feed/"><BsLinkedin className='w-6 md:10 md:h-10 h-6 mx-[.2rem] hover:scale-110 duration-150 text-blue-400' /></a>
              <a href="https://www.instagram.com/invites/contact/?i=1nubf8w7k89q0&utm_content=eb0oqd3"> <BsInstagram className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-red-700' /></a>
              <a href="https://web.telegram.org/z/"><BsTelegram className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-blue-400' /></a>
              <a href="https://github.com/Adarsh123681"><BsGithub className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-blue-400' /></a>
            </div>
          </div>
          {/* image */}
          <div className="md:w-1/2">
            <img src="/image/Adarsh.jpeg" alt="" className="w-40 h-40 lg:mt-24 md:w-60 md:h-60 m-auto my-5 md:mt-16 lg:mx-24 rounded-full shadow-blue-200" />
          </div>
        </div>
        <Skills />
        <Project />
        <Services />
      </div>
    </>
  )
}
export default Home