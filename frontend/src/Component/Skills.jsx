import React, { useState } from 'react'

function Skills() {
  const style = "w-16 h-16 sm:w-28 sm:h-28 sm:ml-4 md:w-28 md:h-28 lg:w-32 lg:h-32 my-5 border-1 rounded-[1rem] p-1 shadow-md hover:scale-110 transition-all duration-500 shadow-[2rem] grid sm:grid-cols-4 gap-2";

  const icons = [
    {
      id: 1,
      name: "REACT",
      img: "/image/react.png",
      style: `${style} shadow-blue-700`,
    },
    {
      id: 2,
      name: "HTML",
      img: "/image/html.png",
      style: `${style} shadow-red-700`,
    },
    {
      id: 3,
      name: "NODE",
      img: "/image/node.png",
      style: `${style} shadow-green-700`,
    },
    {
      id: 4,
      name: "BOOTSTRAP",
      img: "/image/bootstrap.jpeg",
      style: `${style} shadow-blue-400`,
    },
    {
      id: 5,
      name: "EXPRESS",
      img: "/image/express.png",
      style: `${style} shadow-yellow-700`,
    },
    {
      id: 6,
      name: "APPWRITE",
      img: "/image/appwriteProject.png",
      style: `${style} shadow-red-700`,
    },
    {
      id: 7,
      name: "NETLIFY",
      img: "/image/netlify.png",
      style: `${style} shadow-white`,
    },
    {
      id: 6,
      name: "API",
      img: "/image/api-clients.png",
      style: `${style} shadow-orange-700`,
    },
    {
      id: 6,
      name: "MONGOOSE",
      img: "/image/mongoose.png",
      style: `${style} shadow-red-900`,
    }
  ];

   
  return (
    <>
      <div className="min-w-fit h-fit m-auto">
        <h1 className="min-w-fit text-3xl py-4 md:text-3xl p-2 bg-gray-600 text-cyan-300 rounded-lg   text-center">TECHNICAL SKILLS</h1>
        <div className="my-12 ml-8 mb-16 md:mx-5 grid grid-cols-3 md:grid md:grid-cols-4 md:h-68 lg:grid-cols-5 gap-4 lg:content-start">
          {icons.map((ele) => {
            const { id, img, style, name } = ele;
            return (
              <>
                <div className="text-center">  
                  <img key={id} src={img} alt="" srcset="" className={style} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills