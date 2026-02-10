"use client";

import { Bold, Clock, FileClock, Home, HomeIcon, Settings, Wallet } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';



function SideNav() {

    const MenuOptions = [
        {
            name:"Home",
            icon:HomeIcon,
            path:"/dashboard"
        },
        {
            name:"History",
            icon:FileClock,
            path:"/dashboard/history"
        },
        {
            name:"Billing",
            icon:Wallet,
            path:"/dashboard/billing"
        },
        {
            name:"Settings",
            icon:Settings,
            path:"/dashboard/settings"
        },
    ]
    const [isMounted, setIsMounted] = useState(false);
    const path=usePathname();
    useEffect(()=>{
        setIsMounted(true);
        console.log(path)

    },[path])
    if (!isMounted) return null;
  return (
    <div className='h-screen shadow p-5 border bg-slate-100'>
        <div className='flex justify-center '>
            <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-5 '>
            {MenuOptions.map((menu,index)=>(
               <div key={index} className={`flex gap-2 p-2 
               hover:bg-primary hover:text-white rounded-lg
               cursor-pointer items-center
               ${path==menu.path&& 'bg-primary text-white'}
               
               `}
               >
                <menu.icon/>
                <h1 className='h-6 w-6'>{menu.name}</h1>
               </div>

            ))}
        </div>
    </div>
    
  )
}

export default SideNav;
