import React from 'react';
import {Carousel} from '@material-tailwind/react'
import { pic1, pic2, pic3, pic4, pic5, pic6 } from '../Images';
import CustomButton from './CustomButton';


const Hero = () => {
  return (
    <section className='flex bg-[#FEFBF1] relative ' >
      <div className='w-full h-full -z-999 absolute -top-6 lg:hidden'>
          <img src={pic1} className='w-full h-full object-cover opacity-10' alt="" />
      </div>
        <div className=' md:w-[50%] sm:w-[80%] lg:w-2/6 m-auto p-2   text-center  lg:p-1 lg:pl-10 lg:text-left lg:z-999  '>
            <p className='lora tracking-widest text-base text-[#9B804E]'>LUXURY</p>
            <h1 className=' text-[40px]  leading-10 sm:w-[100%] lg:w-[600px] mt-5 forum md:text-6xl bg-[#FFFCF2] bg-opacity-25 relative z-10 '>Find Your Luxury Rooms &  Enjoy Your Vacation</h1>
          
        <div className='   flex w-full m-auto mt-10 justify-evenly items-center gap-4 z-10'>
          <div className=' w-full '>
           <p>Indulge in luxury and comfort at Herittage, where every moment is crafted to perfection. </p>
          </div>
          </div>
       
       {/* form */}

        <div className='w-[80%] m-auto lg:w-[700px] relative z-10   bg-[#FFFCF2] h-auto p-5 lora flex flex-col gap-5 lg:flex-row items-center mt-10 '>
          <div>
           <div className='flex flex-col lg:flex-row gap-5 text-left items-center text-base font-bold'>
            <label  >Checkin</label>
            <input type="date" className=' border-b-2 w-32 h-12 border-[#9B804E] bg-inherit text-[#9B804E] font-bold' />
            <label >Checkout</label>
            <input type="date" className=' border-b-2 w-32 h-12 border-[#9B804E] bg-inherit text-[#9B804E] font-bold' />
           </div>
           <div className='flex flex-col gap-5  lg:flex-row text-left items-center text-base font-bold lora'>
            <label  >Adult</label>
            <input type="number" className='w-36 border-b-2 border-[#9B804E] h-12 bg-inherit text-[#9B804E] font-bold' />
            <label >Children</label>
            <input type="number" className='w-36 border-b-2 border-[#9B804E] h-12 bg-inherit text-[#9B804E] font-bold' />
           </div>
           </div>
           <button className='w-[80%] lg:w-96  h-12 bg-[#9B804E] text-white sm:mt-5'>
           <CustomButton  />
           </button>
        </div>

       {/* form */}
        </div>
        
        <div className='hidden lg:block  w-[65%] z-0'>

        <Carousel className="">
      <img
        src={pic2}
       alt='image1'
        className="h-full w-full object-cover"
      />
      <img
        src={pic5}
        alt="image2"
        className="h-full w-full object-contain"
      />
      <img
        src={pic6}
        alt="image3"
        className="h-full w-full object-cover"
      />
    </Carousel>
        </div>
        
    </section>
  )
}

export default Hero