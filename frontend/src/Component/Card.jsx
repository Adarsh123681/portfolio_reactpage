import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Card({ item, content,  Url, image }) {
  const [show, setShow] = useState(false)
  const showContent = async () => {
    setShow(!show)
  }
  const limit = content.slice(0, 150)
  return (
    <>
      <div className="w-fit h-fit bg-black gap-1 shadow-cyan-100 shadow-md border- border-cyan-100 rounded-md align-items-center m-4">
        <div className="p-2 text-[.9rem] md:text-[1.3rem] text-lime-200 hover:underline">
          {item}
        </div>
        <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem] ">
          {
            show ? (
              <>
                {content}
                <Link variant="secondary" className="text-red-300" onClick={showContent} sx={{ margin: 0 }}>Read Less</Link>
              </>
            ) : (
              <>
                {limit}....
                {
                  content.length > 150 && (
                    <Link className="text-red-300" onClick={showContent}>Read More</Link>
                  )
                }

              </>
            )
          }
        </div>
        <div className="flex justify-center my-4">
          <button className='w-fit h-fit text-sm border-2 border-white rounded-[.8rem] dark:bg-blue-700 hover:bg-red-300 p-2'><a href={Url}>Code</a></button>
        </div>
      </div>
    </>
  )
}

export default Card
