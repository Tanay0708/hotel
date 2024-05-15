import React from 'react'

const BlogPost = () => {
  return (
    <div className='w-[80%] m-auto '>
        <input type="text" placeholder='heading' className='w-[80%]  border-2' />
        <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-[80%] rounded-md m-auto border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
                />
    </div>
  )
}

export default BlogPost