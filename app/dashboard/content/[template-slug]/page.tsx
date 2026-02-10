"use client"
import React, { use, useState } from 'react'
import FormSection from '../FormSection'
import ContentSection from '../ContentSection'
import Templates from '../../(data)/Templates'
import { TEMPLATE } from '../../(data)/Templates'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/AiModel'

interface PROPS {
  params: Promise<{
    'template-slug': string
  }>
}

function CreateNewContent({ params }: PROPS) { 
    const resolvedParams = use(params);
    const slug = resolvedParams['template-slug'];

    const selectedTemplate: TEMPLATE | undefined = Templates?.find(
        (item) => item.slug === slug
    );
    const [loading,setLoading] = useState(false);
    const generateAiContent = async(FormData:any)=>{
      setLoading(true)
      const selectedPrompt=selectedTemplate?.aiprompt;
      const FinalAiPrompt = JSON.stringify(FormData)+","+ selectedPrompt;
      const Result = await chatSession.sendMessage(FinalAiPrompt)
      console.log(Result.response.text());
      setLoading(false);
    }
    
  return (
    <div className='p-5 '>
       <Link suppressHydrationWarning={true} href={"/dashboard"}>
       <Button suppressHydrationWarning={true}><ArrowLeft/>Go Back</Button>
       </Link>
    <div className='grid grid-cols-1 md:grid-cols-6 gap-5 p-5'> 
      <div className='col-span-1 md:col-span-2'>
         <FormSection 
          selectedTemplate={selectedTemplate}
          userFormInput={(v:any)=>generateAiContent(v)}
          loading={loading}
         />
      </div>

      <div className='col-span-1 md:col-span-4'>
         <ContentSection/>
      </div>
    </div>
  </div>
  )
}

export default CreateNewContent