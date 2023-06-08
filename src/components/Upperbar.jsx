import React from 'react'
import { Icon } from '../assets/icons'
import Navbar from './upperbar/Navbar'

function Upperbar() {
  return (
    <div className='h-[60px] sticky top-0 px-5 bg-black bg-opacity-40 w-full flex justify-between'>
        <div className='flex items-center h-full gap-2'>
          <button className='p-2 cursor-not-allowed bg-black rounded-full'><Icon name="prev" size={18}/></button>
          <button className='p-2 cursor-not-allowed bg-black rounded-full'><Icon name="next" size={18}/></button>
        </div>
        <div>
          <Navbar />
        </div>
    </div>
  )
}

export default Upperbar