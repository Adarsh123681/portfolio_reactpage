import React from 'react'
function Card({ item, content, Link, image }) {

  return (
    <> 
       <div className="w-fit h-fit bg-black gap-1 shadow-cyan-500 shadow-lg border-2 border-cyan-300 rounded-md align-items-center my-2">
       <div className="p-2 text-[.9rem] md:text-[1.3rem] text-lime-200 hover:underline">
          {item}
        </div>
        <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem] ">
          {content}
        </div>
        <div className="flex justify-center my-4">
          <button className='w-fit h-fit text-sm border-2 border-white rounded-[.8rem] dark:bg-blue-700 hover:bg-red-300 p-2'><a href={Link}>Code</a></button> 
      </div>
       </div>
    </>
  )
}

export default Card
