import React from "react";
//import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa"
function Services() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <h1 className="min-w-fit text-3xl py-4 p-2 bg-gray-600 text-cyan-300 rounded-lg  text-center m-auto">SERVICES PROVIDED</h1>
        <div className=""> <p className=" p-10 text-white">We specialize in crafting responsive and user-friendly websites, ensuring seamless navigation and optimal performance across all devices. Our expertise includes front-end and back-end development, database integration, e-commerce solutions, and custom web applications tailored to your specific needs. Whether you're a small business looking to establish an online presence or a large enterprise seeking to streamline your digital operations, we're here to turn your vision into reality. Let's build something amazing together!</p>
          <div className="m-1 text-white px-10">
            <li className="font-semiBold text-xl py-2 ">Blog Web Pages</li>
            <li className="font-semiBold text-xl py-2 ">Static Web Pages</li>
            <li className="font-semiBold text-xl py-2 ">Dynamic web Pages</li>
            <li className="font-semiBold text-xl py-2 ">Ecommerce Web Pages</li></div>
        </div>
      </div>
    </>
  )
}

export default Services;
