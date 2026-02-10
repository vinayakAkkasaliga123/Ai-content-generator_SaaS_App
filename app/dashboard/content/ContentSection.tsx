import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const Editor = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Editor),
  { ssr: false }
);

function ContentSection() {
  const editorRef:any=useRef();
  return (
    <div className='bg-white border rounded-lg shadow-sm'>
      <div className='flex justify-between p-5 items-center'>
        <h2 className='flex gap-2 font-bold text-3xl'>Your Result</h2>
      <Button suppressHydrationWarning>Copy<Copy/></Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Yeah! Take your result"
        height="100vh"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default ContentSection