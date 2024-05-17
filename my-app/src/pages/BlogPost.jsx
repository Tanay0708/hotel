import React from 'react'
import Navbar from '../componants/Navbar'
import { pic12, pic9 } from '../Images'

const BlogPost = () => {
  return (
    <>
      <Navbar />
      <div className='w-full'>
        <div className='w-[80%] h-60 m-auto'>
          <img src={pic9} className='w-full h-full' alt="" />
        </div>
        <div>
          <h1>
            
          </h1>
        </div>
      </div>
    </>
  )
}

export default BlogPost