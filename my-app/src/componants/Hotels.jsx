import React from 'react'
import HotelCard from './HotelCard'
import { Link } from 'react-router-dom'
import { pic1, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic2, pic3, pic4, pic6, pic8, pic9 } from '../Images'




const Hotels = () => {
  return (
   <section className=' bg-[#FBF6E8] pt-20 p-10 md:p-20 relative h-auto sm:pb-10 md:pb-36    overflow-hidden' id='hotel'>
        <div className='text-center w-full  lg:w-[50%] m-auto'>
            <img className='w-full  max-h-96 opacity-5 absolute top-[-100px] left-[10px]' src="https://herittage.wpengine.com/wp-content/themes/herittage/assets/images/bg-art-icon-2x.svg" alt="" />
            <h1 className='forum text-[40px] lg:text-6xl text-[#3d3931] leading-10'>Discover Unparalleled Comfort and Luxury</h1>
            <p className='text-[#3d3931] lora mt-5'>At Herittage, we offer a unique blend of comfort, luxury, and exceptional service. Our beautifully designed rooms cater to all your needs, whether you're traveling for business, leisure, or a special occasion. Choose from our three distinct room types and experience a stay that will exceed your expectations.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 md:gap-10f mt-10'>
           <Link to={'/rooms/deluxe'}>
                <div className=" w-full h- ">
                  <HotelCard pic ={pic17 } name={"Deluxe Room"} price={1600}/>
                </div>
                </Link>
                <Link to={'/rooms/grand-royal'}>
                <div className=" w-full h-auto ">
                  <HotelCard pic={pic16} name={"Grand Royal"} price={1800} />
                </div>
                </Link>
                <Link to={'/rooms/grand-heritage'}>
                <div className=" w-full h-auto ">
                  <HotelCard pic={pic13} name={"Grand Heritage"} price={2000}/>
                </div>
                </Link>
        </div>
        
   </section>
  )
}

export default Hotels