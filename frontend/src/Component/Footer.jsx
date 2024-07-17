import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer class="bg-gray-800 sshadow dark:bg-gray-900 -mt-1 py-10">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="./image/Adarsh.jpeg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ADARSH TRIPTHI PORTFOLIO</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-xl sm:text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <Link to="/" className='mx-3 lg:mx-2 mt-2 hover:text-lime-800 active transition-all'>Home</Link>
                            <Link to="/about" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 transition-all'>About</Link>
                            <Link to="/project" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 active transition-all'>Project</Link>
                            <Link to="/workexperience" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 active transition-all'>Work-Experience</Link>
                            <Link to="/services" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 transition-all duration-200 tracking-wide'>Services</Link>
                            <Link to="/contact" className='mx-3 lg:mx-3 mt-2 hover:text-lime-800 transition-all duration-200 tracking-wide'>Contact Me</Link>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer