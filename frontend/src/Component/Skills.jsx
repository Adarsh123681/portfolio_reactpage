import React from 'react'

function Skills() {
  const style = "w-16 h-16 sm:w-28 sm:h-28 sm:ml-4 md:w-28 md:h-28 lg:w-32 lg:h-32 my-5 border-1 rounded-[1rem] p-1 shadow-md hover:scale-110 transition-all duration-500 shadow-[2rem] grid sm:grid-cols-4 gap-2";

  const icons = [
    {
      id: 1,
      name: "/image/react.png",
      style: `${style} shadow-blue-700`,
    },
    {
      id: 2,
      name: "/image/html.png",
      style:`${style} shadow-red-700`,
    },
    {
      id: 3,
      name: "/image/node.png",
      style:`${style} shadow-green-700`,
    },
    {
      id: 4,
      name: "/image/bootstrap.jpeg",
      style:`${style} shadow-blue-400`,
    },
    {
      id: 5,
      name: "/image/express.png",
      style:`${style} shadow-yellow-700`,
    },
    {
      id: 6,
      name: "/image/appwriteProject.png",
      style:`${style} shadow-red-700`,
    },
    {
      id: 7,
      name: "/image/netlify.png",
      style:`${style} shadow-white`,
    },
    {
      id: 6,
      name: "/image/api-clients.png",
      style:`${style} shadow-orange-700`,
    },
    {
      id: 6,
      name: "/image/mongoose.png",
      style:`${style} shadow-red-900`,
    } 
  ];
  return (
    <>
      <div className="min-w-fit h-fit m-auto">
        <h1 className="text-2xl py-4 md:text-xl p-2 bg-gray-600 text-cyan-300 rounded-lg font-bold text-center">TECHNICAL SKILLS</h1>
        <div className="my-12 ml-8 mb-16 md:mx-5 grid grid-cols-3 md:grid md:grid-cols-4 md:h-68 lg:grid-cols-5 gap-4 lg:content-start">
          {icons.map((ele) => {
            const { id, name, style } = ele;
            return (
              <>
                <img key={id} src={name} alt="" srcset="" className={style} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills