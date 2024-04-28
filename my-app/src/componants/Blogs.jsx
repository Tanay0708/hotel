import React from 'react'
import BlogsCard from './BlogsCard'

const Blogs = () => {
  return (
   <section className='w-full h-auto  p-2 md:p-10 lg:p-10 bg-[#FBF9EF] pb-20 pt-10'>
        <div className='w-[80%] m-auto text-center h-auto '>
            <h1 className='lora text-sm md:text-base lg:text-base  tracking-widest text-[#9b804e]'>
                TENDING TOPICS
            </h1>
            <h1 className='forum text-4xl md:text-5xl lg:text-7xl mt-5'>
                Hotel Blogs
            </h1>
            <p className='lora mt-5 text-[#9b804e]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consectetur soluta ex commodi, voluptatibus minima. Sequi blanditiis.
            </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-10 mt-10'>
            <BlogsCard />
            <BlogsCard />
        </div>
   </section>
  )
}

export default Blogs