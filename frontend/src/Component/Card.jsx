import React from 'react'
function Card({ item, content, Link, image }) {

  return (
    <> 
       <div className="sm:w-[28rem] h-[22rem] bg-black m-5 shadow-cyan-400 shadow-2xl border-2 border-cyan-300 rounded-md justify-center m-auto">
       <div className="m-1 text-[.9rem] md:text-[1.3rem] text-lime-200">
          {item}
        </div>
        <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem] ">
          {content}
        </div>
        <div className="flex justify-center mt-2">
          <button className='w-16 h-8 text-sm border-2 border-white rounded-[.8rem] bg-red-700 hover:bg-red-300 p-1 mr-2'><a href={Link} target="_blank">Code</a></button> 
      </div>
       </div>
    </>
  )
}

export default Card
