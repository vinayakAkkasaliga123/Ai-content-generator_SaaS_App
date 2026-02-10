import React from 'react'
import SideNav from './__components/SideNav';
import Header from './__components/Header';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-slate-800 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
        </div>
       <div className='md:ml-64'>
        <div>
            <Header/>
        </div>
        {children}
       </div>
       
    </div>
  )
}


export default layout;

