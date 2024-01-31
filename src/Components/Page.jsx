import React from 'react'

import DOMPurify from 'dompurify';
const Page = ({data ,name}) => {



  const sanitizedHtml = DOMPurify.sanitize(data);
  



  return (

    <div className=' p-10 w-full h-[100vh]'>

      <h1 className=' m-3 text-3xl'>Summary of {name} </h1> 
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      
    </div>
  )
}

export default Page
