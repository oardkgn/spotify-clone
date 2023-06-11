import React from 'react'
import categories from '../../data/categories'
import SearchItem from './search/SearchItem'

function Search() {
  return (
    <div className='bg-[#121212] p-6'>
      <h1 className='text-[1.4rem] font-bold text-white tracking-tight'>Browse all</h1>
      <div className=' grid grid-cols-5 gap-6 mt-5 max-w-7xl'>
      {categories.map(item => 
          <SearchItem item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}

export default Search