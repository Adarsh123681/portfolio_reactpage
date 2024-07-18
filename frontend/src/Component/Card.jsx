import React, { useState } from 'react'

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
        <div className="text-[.7rem] md:text-[1rem] p-2 sm:text-[1rem]">
          {
            show ? (
              <>
                {content}
                <button variant="secondary" className="text-red-300" onClick={showContent} sx={{ margin: 0 }}>Read Less</button>
              </>
            ) : (
              <>
                {limit}....
                {
                  content.length > 150 && (
                    <button className="text-red-300" onClick={showContent}>Read More</button>
                  )
                }

              </>
            )
          }
        </div>
        <div className="flex justify-center my-4">
          <button className='w-fit h-fit text-md p-3 rounded-md dark:bg-blue-900 hover:bg-blue-300 p-2 hover:text-black'><a href={Url} >View Code</a></button>
        </div>
      </div>
    </>
  )
}

export default Card
