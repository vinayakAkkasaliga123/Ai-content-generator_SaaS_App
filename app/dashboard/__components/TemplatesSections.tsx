import React from 'react'
import Templates from '../(data)/Templates'
import TemplateCrad from './TemplateCrad'

export interface TEMPLATE{
    name:string,
    desc:string,
    cateogary:string,
    icon:string,
    aiprompt : string,
    slug:string,
    form?: FORM[]

}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function TemplatesSections() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {Templates.map((item:TEMPLATE,index:number)=>(
        <TemplateCrad key={index} {...item}/>

      ))}
    </div>
  )
}

export default TemplatesSections
