"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

interface PROPS{
    selectedTemplate?:TEMPLATE;
    userFormInput:any;
    loading:boolea;
}

function FormSection({selectedTemplate,userFormInput,loading}:PROPS) {
  const [formData,setFormData] = useState<any>();
 
  const handleInputChange = (event:any)=>{
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})

  }

  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData)

  }
  return (
    <div className='p-5 rounded-lg shadow border'>
        <Image src={selectedTemplate?.icon} alt='icon' height={70} width={70}/>
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate.name}</h2>
      <h2 className='text-black text-sm'>{selectedTemplate?.desc}</h2>

      <form className='mt-6 flex-col justify-center' onSubmit={onSubmit}>
        {selectedTemplate?.form.map((item,index)=>
        <div key={index}>
            <label className='font-bold'>{item.label}</label>
            {item.field=='input'?
            <Input suppressHydrationWarning={true} name={item.name} required={item.required}
            onChange={handleInputChange}
            />
            :item.field=='textarea'?
            <Textarea suppressHydrationWarning={true} name={item.name} required={item.required}
            onChange={handleInputChange}/>:null
          }
            
        </div>
        )}
        <Button type='submit' className=' py-5 mt-5 flex justify-center  ' disabled={loading} suppressHydrationWarning={true} >
          {loading&&<Loader className='animate-spin'/> }
          
          Generate Button</Button>
      </form>
    </div>
  )
}

export default FormSection
