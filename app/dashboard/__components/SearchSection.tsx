import { Search } from 'lucide-react';
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='bg-linear-to-br from-purple-500 via-purple-700 to-blue-600  flex flex-col justify-center items-center text-white p-10 '>
      <h1 className=' text-3xl font-bold'>Browse All Templates</h1>
      <p>What would you like to create ?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center bg-white rounded-md py-2 my-5  w-[50%]' >
            <Search className='text-primary'/>
            <input type="text" placeholder='Search....' 
            onChange={(event)=>onSearchInput(event.target.value)}
            className='text-black w-full outline-none'
            suppressHydrationWarning={true}
            />
        </div>
      </div>
    </div>
  )
}

export default SearchSection;
