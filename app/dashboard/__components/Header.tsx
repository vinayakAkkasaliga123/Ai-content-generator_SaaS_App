import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 items-center justify-between flex bg-slate-100'>
      <div className='flex gap-2 items-center p-2 rounded-md max-w-lg shadow bg-slate-100'>
        <Search/>
        <input type='text' placeholder='Search....' className='outline-none' suppressHydrationWarning={true}/>
      </div>
      <div className='p-1 rounded-full text-xs bg-primary text-white max-w-sm '>
        <h2>Join Membership for just $9.99/Month</h2>
      </div>
    </div>
  )
}

export default Header
