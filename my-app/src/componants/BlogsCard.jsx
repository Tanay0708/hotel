import React from 'react'

const BlogsCard = ({pic}) => {
  return (
   <section className='w-full h-auto flex flex-col gap-5'>
    <img src={pic} className='w-full h-full' alt="" />

    {/* <p className='lora tracking-widest text-lg'>date</p> */}

    <h1 className='forum tracking-wider text-4xl hover:text-[#9b804e]'>The Best hotel for business vacations</h1>

    {/* <p className='lora traking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore velit exercitationem dicta quibusdam impedit magnam esse libero sed qui, necessitatibus sint, a perspiciatis animi dolorem tenetur iste iure ex aperiam.</p> */}
   </section>
  )
}

export default BlogsCard