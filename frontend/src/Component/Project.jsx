import React from 'react'
import Card from './Card';
import data from "./Data"
function Project() {
  return (
    <>
      <h1 className="text-2xl py-4 md:text-xl m-2 p-2 bg-gray-600 text-cyan-300 rounded-lg font-bold text-center">PROJECTS</h1>
      <div className="w-screen h-fit bg-zinc-700 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-3 justify-center item-center mb-8 text-white">
        {
          data.map((ele) => {
            const { name, content, link, img } = ele
            return (
              <>
                <Card item={name} content={content} Link={link} image={img} />
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default Project