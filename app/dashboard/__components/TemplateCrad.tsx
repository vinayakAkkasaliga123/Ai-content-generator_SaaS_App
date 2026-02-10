import React from 'react'
import { TEMPLATE } from './TemplatesSections'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCrad(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='p-5 border rounded-md shadow bg-white flex flex-col cursor-pointer gap-3 hover:scale-105 transition-all'>
      <Image src={item.icon} alt='logo' height={50} width={50}/>
      <h2 className='font-medium text-lg'>{item.name}</h2>
      <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
    
  )
}

export default TemplateCrad
