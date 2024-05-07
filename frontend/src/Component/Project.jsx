import React, { useState } from 'react'
import Card from './Card';
import data from "./Data"
function Project() {
  
  return (
    <>
      <h1 className="text-center text-2xl py-4 md:text-sm  p-2 bg-gray-600 text-cyan-300 font-bold text-center">PROJECTS</h1>
      <div className="h-fit bg-gray-800 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center align-items-center item-center text-white">
        {
          data.map((ele) => {
            const { name, content, url, img } = ele
            return (
              <>
                <Card item={name} content={content} Url={url} image={img} />
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default Project