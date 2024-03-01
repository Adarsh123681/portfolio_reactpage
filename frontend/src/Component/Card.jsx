import React from 'react'
function Card({ item, content, Link, image }) {

  return (
    <> 
       <div className="lg:w-[27rem] w-[22rem] sm:h-[25rem] h-[26rem] bg-black m-2 shadow-cyan-400 shadow-2xl border-2 border-cyan-300 rounded-md align-items-center my-2 relative overflow-hidden">
       <div className="m-1 text-[.9rem] md:text-[1.3rem] text-lime-200">
          {item}
        </div>
        <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem] ">
          {content}
        </div>
        <div className="flex justify-center mt-2">
          <button className='w-16 h-8 text-sm border-2 border-white rounded-[.8rem] bg-red-700 hover:bg-red-300 p-1 absolute bottom-3'><a href={Link}>Code</a></button> 
      </div>
       </div>
    </>
  )
}

export default Card
