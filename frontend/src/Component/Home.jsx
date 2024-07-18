import React from 'react'
import Project from "./Project";
import Skills from './Skills';
import Services from "./Services"
import resume from "./updatedNewResume.pdf"
import { BsGithub, BsInstagram, BsLinkedin, BsTelegram } from "react-icons/bs";
function Home() {

  return (
    <>
      <div className=" relative bg-gray-800 text-white">
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
              download="updatedNewResume.pdf"
            >
              <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-red-900 rounded-2xl group-hover:bg-opacity-0">Download Resume
              </span>
            </a>
            <div className="absolute top-60  right-0  p-2 bg-black hidden md:block">
              <a href="https://www.linkedin.com/feed/" target='_blank'><BsLinkedin className='w-12 mx-2 md:10 md:h-10 h-12 hover:scale-110  duration-150 text-blue-400 bottom-2 mb-4 '  ></BsLinkedin> </a>
              <a href="https://www.instagram.com/invites/contact/?i=1nubf8w7k89q0&utm_content=eb0oqd3" target='_blank'> <BsInstagram className='w-12 mx-2 md:10 md:h-10 h-12 hover:scale-110  duration-150 text-red-600 bottom-2 mb-4' /></a>
              <a href="https://web.telegram.org/z/" target='_blank'><BsTelegram className='w-12 mx-2 md:10 md:h-10 h-12 hover:scale-110  duration-150 text-blue-600 bottom-2 mb-4 border-inherit border-white text-2xl' /></a>
              <a href="https://github.com/Adarsh123681" target='_blank'><BsGithub className='w-12 mx-2 md:10 md:h-10 h-12 hover:scale-110  duration-150 text-blue-300 bottom-2 mb-4 border-inherit border-white text-2xl' /></a>
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