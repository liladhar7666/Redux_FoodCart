import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
            <img src="logo.png" alt="" />
           <h1 className='text-3xl font-bold '>FoodFleet</h1>
           <h6 className='text-base font-bold text-gray-600 py-2'>{new Date().toUTCString().slice(0, 16)}</h6>     
        </div>
        <div>
            <input type="text" name='search' id='' placeholder='Search here' autoComplete='off'
            className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
            />
        </div>
    </nav>
  )
}

export default Navbar