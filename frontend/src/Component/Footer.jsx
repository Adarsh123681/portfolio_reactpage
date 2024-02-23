import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="w-full h-32 lg:h-32 md:h-32 bg-gray-700 text-lime-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center md:gap-0 relative my-2 fixed bottom-0">
        <Link to="/" className='w-80 h-2 pl-24 py-2 text-xl md:pl-32 md:my-8'>Adarsh tripathi</Link>
        <div className='w-50 text-[.5rem] flex flex-col'>
          <div className='p-4 md:text-center'>@Copyright 2022</div>
          <div >All Rights Are Reserved</div>
        </div>
      </div>
    </>
  )
}

export default Footer