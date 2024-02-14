import React from 'react'
import Review from './Review'
import Project from "./Project";
import Skills from './Skills';
import Services from "./Services"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

function Home() {

  return (
    <>
      <div className="w-screen bg-gradient-to-t from-gray-800 to-gray-700 text-white overscroll-none">
        {/* content */}
        <div className="w-fill md:flex md:ml-28">
          <div className="md:h-96 lg:ml-60 lg:mt-40 flex flex-col text-center md:text-left m-auto md:mt-8 tracking-wider skew-12">
            {/*  big text*/}
            <span className="text-3xl mt-3 transition-all delay-500">Hello</span>
            <div className="text-xl sm:text-xl md:text-3xl font-bold leading-tight my-2">
              Welcome To My Portfolio
            </div>
            {/* text medium */}
            <span className="text-3xl mt-3">I am</span>
            <span className="text-xl leading-10 bold text-gradient-to-r from-blue-600 via-green-500 to-indigo-400">Adarsh Tripathi</span>
            {/* text-small */}
            <span className="text-md mb-5">Web Developer</span>

            <button className='w-40 h-10 bg-red-800 hover:bg-red-300 hover:scale-110 rounded-lg shadow-md shadow-red-100 hidden md:flex p-2'>Download Resume</button>

            <div className="flex m-auto md:ml-3 mt-2 md:mt-3 md:flex">
              <a target="_blank" href=""><BsLinkedin className='w-6 md:10 md:h-10 h-6 mx-[.2rem] hover:scale-110 duration-150 text-blue-400' /></a>
              <a target="_blank" href="https://www.instagram.com/invites/contact/?i=1nubf8w7k89q0&utm_content=eb0oqd3"> <BsInstagram className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-red-700' /></a>
              <a href="https://web.telegram.org/z/" target="_blank"><BsTelegram className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-blue-400' /></a>
              <a target="_blank" href="https://github.com/Adarsh123681"><BsGithub className='w-6 md:10 md:h-10 h-6 mx-2 hover:scale-110 duration-150 text-blue-400' /></a>
            </div>
          </div>
          {/* image */}
          <div className="md:w-1/2">
            <img src="./image/Adarsh.jpeg" alt="" className="w-40 h-40 lg:mt-40 md:w-60 md:h-60 m-auto my-5 md:mt-16 lg:mx-24 rounded-full shadow-blue-200" />
          </div>
        </div>
        <Skills />
        <Project />
        <Services />
        <Review />
      </div>
    </>
  )
}
export default Home