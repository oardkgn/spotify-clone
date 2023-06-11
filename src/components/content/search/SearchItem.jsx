import React from 'react'

function SearchItem({item}) {
  return (
    <div style={{backgroundColor:item.color}} className="rounded-lg cursor-pointer overflow-hidden before:pt-[100%] before:block relative">
        <div className=' absolute inset-0'>
        <h3 className='pt-3 pl-4 text-[1.5rem] font-bold tracking-tighter'>{item.title}</h3>
        </div>
        <img className={`absolute rotate-[25deg]  -right-4 bottom-0 w-24 h-24`} src={item.cover} alt="" />
    </div>
  )
}

export default SearchItem