import React from 'react'
import Card from './Card';
import data from "./Data"
function Project() {

  return (
    <>
     <h1 className="min-w-fit text-3xl py-4 p-2 bg-gray-600 text-cyan-300 rounded-lg  text-center m-auto">PROJECTS</h1>
      <div className="h-fit bg-gray-800 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center align-items-center item-center text-white">
        {/* map method */}
        {
          data.map((ele , id) => {
            const { name, content, url, img} = ele
            return (
              <>
                 <div key={id}><Card item={name} content={content} Url={url} image={img} /></div>
              </>
            )
          })
        }
      </div>
    </>
  )
}
export default Project