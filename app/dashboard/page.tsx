"use client";
import React, { useState } from 'react'
import SearchSection from './__components/SearchSection'
import TemplatesSections from './__components/TemplatesSections'



function Dashboard() {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      <div>
        <TemplatesSections userSearchInput={userSearchInput}/>
      </div>
    </div>
  )
}

export default Dashboard
