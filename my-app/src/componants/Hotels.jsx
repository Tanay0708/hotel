import React from 'react'
import HotelCard from './HotelCard'

const Hotels = () => {
  return (
   <section className=' bg-[#FBF6E8] pt-20 p-10 relative h-auto pb-36    overflow-hidden'>
        <div className='text-center w-full  lg:w-[50%] m-auto'>
            <img className='w-full  max-h-96 opacity-5 absolute top-[-100px] left-[10px]' src="https://herittage.wpengine.com/wp-content/themes/herittage/assets/images/bg-art-icon-2x.svg" alt="" />
            <h1 className='forum text-[40px] lg:text-6xl text-[#3d3931] leading-10'>Showing Luxury Hotels</h1>
            <p className='text-[#3d3931] lora mt-5'>Mauris nec risus congue dui suscipit interdum id ac felis. Cras venete finibus quis. Phasellus tempor at turpis quis ultrices. Vivamus.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                <div className=" w-full h-auto ">
                  <HotelCard />
                </div>
                <div className=" w-full h-auto">
                <HotelCard />
                </div>
                <div className=" w-full h-auto">
                <HotelCard />
                </div>
        </div>
   </section>
  )
}

export default Hotels