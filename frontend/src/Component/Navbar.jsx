import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
   const [open, setOpen] = useState(false)
   return (
      <>
         <div className="w-screen h-16 bg-gray-700 font-medium transition-all duration-500 transition-all">
            {/* lOGO */}
            <div className="flex">
               <img src="./image/Adarsh.jpeg" alt="" className="w-12 h-12 border-2 border-black rounded-full m-2 " />
               <ul className="w-1/2 text-lime-100 font-semiBold m-auto hidden md:flex">
                  <Link to="/" className='mx-3 lg:mx-2 mt-2 hover:text-lime-800 active transition-all'>Home</Link>
                  <Link to="/about" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 transition-all'>About</Link>
                  <Link to="/project" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 active transition-all'>Project</Link>
                  <Link to="/services" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 active transition-all'>Services</Link>
                  <Link to="/contact" className='mx-3 lg:mx-3 my-2 hover:text-lime-800 transition-all duration-200 tracking-wide'>Contact Me</Link>
                  <div className='absolute right-9'>
                     <Link to="/signIn"><input type="button" value="SignIn" className='w-20 rounded-lg my-1 mx-2 p-1 bg-green-800 hover:bg-green-300 hover:text-black transition-all duration-200' />
                     </Link> 
                     <Link to="/signUp"><input type="button" value="SignUp" className='w-20 rounded-lg my-1 p-1 bg-red-900 hover:bg-red-200 hover:text-black transition-all duration-200' />
                     </Link>
                  </div>
               </ul>
               <div className="absolute right-2 top-3 md:hidden text-gray-200 transition-all" onClick={() => { setOpen(!open) }}>
                  {
                     open ? <AiFillCloseCircle size={35} /> : <GiHamburgerMenu size={35} />
                  }
               </div>
            </div>
            {
               open && (<ul className="w-screen h-[20rem] flex flex-col absolute right-0 bg-gray-700 text-white text-center text-md font-mono transition-all delay-500 duration-300">
                  <Link to="/" className='mx-3 lg:mx-2 my-2 hover:text-red-500 transition-all duration-200 tracking-wide font-bold'>Home</Link>
                  <Link to="/about" className='mx-3 lg:mx-3 my-2 hover:text-red-500 transition-all duration-200 tracking-wide font-bold font-mono'>About</Link>
                  <Link to="/project" className='mx-3 lg:mx-3 my-2 hover:text-red-500 transition-all duration-200 tracking-wide font-bold font-mono'>Project</Link>
                  <Link to="/services"><input type="button" className='lg:mx-3 hover:text-red-500 transition-all duration-200 tracking-wide font-bold font-mono' />Services</Link>
                  <Link to="/review" className='mx-3 lg:mx-3 my-2 hover:text-red-500 transition-all duration-200 tracking-wide font-bold'>Review</Link>
                  <Link to="/contact" className='mx-3 lg:mx-3 my-2 hover:text-red-500 transition-all duration-200 tracking-wide font-bold'>Contact Me</Link>
                  <Link to="/signIn"><input type="button" value="SignIn" className='w-20 rounded-lg my-1 mx-auto p-1 bg-green-800 hover:bg-green-200 hover:text-black transition-all duration-200' /></Link>
                  <Link to="/signUp"><input type="button" value="SignUp" className='w-20 rounded-lg my-1 mx-auto p-1 bg-red-900 hover:bg-red-200 hover:text-black transition-all duration-200' /></Link>
                  {/* <button className='w-28 text-sm bg-blue-800 hover:bg-blue-300 hover:scale-105 rounded-lg shadow-lg md:flex mx-auto my-2'> <a href="./PortFolio_Page.pdf" download="./PortFolio_Page.pdf" className='m-auto'>Download Resume</a></button> */}

               </ul>)
            }

         </div>
      </>
   )
}

export default Navbar