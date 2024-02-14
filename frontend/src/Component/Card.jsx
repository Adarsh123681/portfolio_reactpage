import React, { useState } from 'react'
function Card({ item, content, Link, image }) {
  const [change, setChange] = useState(false);
  return (
    <>

      <div className={`w-[20rem] h-[20rem] bg-gray-800 m-auto my-3 rounded-lg relative ${change ? "tranform hover:scale-200 ease-in duration-500 rounded-l transition-transform duration 500 " : ""}`}
        onMouseEnter={() => {
          setChange(true)
        }}
        onMouseLeave={() => {
          setChange(false)
        }}>
        {
          change ? (<>
            <img src={image} alt="" srcset="" className='w-80 h-80 transition-all delay-300' />
            <div className="flex justify-center mt-2">
              <button className='w-16 h-8 text-sm border-2 border-white rounded-[.8rem] bg-red-700 hover:bg-red-300 p-1 mr-2 absolute bottom-4 right-28'><a href={Link} target="_blank">Code</a></button>
            </div></>
          ) :
            <div className="w-fit h-64 md:h-48 bg-gray-800 text-white text-[.8rem] sm:text-[1.2rem] text-center border-black rounded-[3rem] m-auto">
              <div className="m-1 text-[.9rem] md:text-[1.3rem] text-lime-200">
                {item}
              </div>
              <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem] ">
                {content}
              </div>
              <div className="flex justify-center mt-2">
                <button className='w-16 h-8 text-sm border-2 border-white rounded-[.8rem] bg-red-700 hover:bg-red-300 p-1 mr-2 absolute bottom-4 right-28'><a href={Link} target="_blank">Code</a></button>
              </div>

            </div>
        }

      </div >
    </>
  )
}

export default Card