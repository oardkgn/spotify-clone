import React from 'react'

function Navbar() {
  return (
   
    <div className='flex items-center h-full'>
        <ul className='flex border-r pr-8 border-white gap-2 text-base tracking-widest font-semibold text-inactive-text-color'>
            <li className='transition-all hover:text-white hover:scale-105'><a className='py-1' href="">Premium</a></li>
            <li className='transition-all hover:text-white hover:scale-105'><a className='py-1' href="">Support</a></li>
            <li className='transition-all hover:text-white hover:scale-105'><a className='py-1' href="">Download</a></li>
        </ul>
        <ul className='flex items-center ml-8 gap-8 text-md font-semibold text-inactive-text-color'>
            <li className='transition-all hover:text-white hover:scale-105'><a className='py-1' href="">Sign up</a></li>
            <li className='py-3 px-8 cursor-pointer transition-all hover:scale-105 bg-white text-black rounded-full'><a href="">Log in</a></li>
        </ul>
    </div>

    
  )
}

export default Navbar