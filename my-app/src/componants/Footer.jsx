import React from 'react'

const Footer = () => {


  return (
   <section className='w-full h-auto   relative bg-black bg-opacity-80 pt-10 pb-5'> 
   <div className='absolute top-0 -z-10 w-full h-full opacity-45 '>
    <img src="https://herittage.wpengine.com/wp-content/uploads/2023/06/Herittage-home-3-slider-3.webp" className='w-full h-full object-cover ' alt="" />
   </div>
        <div className='w-[80%] lg:w-[40%] m-auto  border-black text-center z-100'>
            <img src="https://herittage.wpengine.com/wp-content/uploads/2023/05/logo-light.svg" className=' m-auto  w-[80%] md:w-[50%] lg:w-[50%]' alt="" />
            <p className='lora mt-5 text-[#b5b5b5]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde alias fuga hic, dignissimos ea accusantium atque cum molestiae </p>
            <div className='flex   border-black gap-5 mt-10 text-white'>
                <button className='w-1/2 h-12 bg-[#9B804E] hover:bg-[#3D3931] '>Phone number</button>
                <button className='w-1/2  h-12 bg-[#3D3931] hover:bg-[#9B804E]'>Address</button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  text-[#b5b5b5] p-10 gap-5'>
            <div className='w-full '>
                <ul >
                    <li className='lora text-2xl font-bold tracking-widest'>CONTACT</li>
                    <li className='lora text-lg mt-5'>Reservation</li>
                    <li className='lora text-lg mt-2'>Mission $ Vision</li>
                    <li className='lora text-lg mt-2'>Hotel Facilities</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                </ul>
            </div>
            <div className='w-full '>
                <ul >
                    <li className='lora text-2xl font-bold tracking-widest'>HELP</li>
                    <li className='lora text-lg mt-5'>Careers</li>
                    <li className='lora text-lg mt-2'>Mission $ Vision</li>
                    <li className='lora text-lg mt-2'>Hotel Facilities</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                </ul>
            </div>
            <div className='w-full '>
                <ul >
                    <li className='lora text-2xl font-bold tracking-widest'>OUR SERVICES</li>
                    <li className='lora text-lg mt-5'>Reservation</li>
                    <li className='lora text-lg mt-2'>Mission $ Vision</li>
                    <li className='lora text-lg mt-2'>Hotel Facilities</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                </ul>
            </div>
            <div className='w-full '>
                <ul >
                    <li className='lora text-2xl font-bold tracking-widest'>ABOUT US</li>
                    <li className='lora text-lg mt-5'>Reservation</li>
                    <li className='lora text-lg mt-2'>Mission $ Vision</li>
                    <li className='lora text-lg mt-2'>Hotel Facilities</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                    <li className='lora text-lg mt-2'>News $ Blogs</li>
                </ul>
            </div>
           
        </div>
        <div className='w-[80%] h-1 bg-[#9B804E] mt-10 m-auto'>

        </div>
        <h1 className='lora text-center text-lg mt-5  text-[#b5b5b5]'>2023 herittage we design</h1>
   </section>
  )
}

export default Footer