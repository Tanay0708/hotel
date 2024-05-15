import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'


const HotelCard = ({pic,name}) => {
  return (
    <section className='group  h-full  relative '>
       
        <div className='overflow-hidden -full h-60'>

        
        <img src={pic} className='w-full   -z-10 group-hover:scale-125 transition delay-300 ease-in-out ' alt="" />
        </div>
        <div className=' w-full h-16 absolute bottom-36 hidden group-hover:flex gap-5 p-2 items-center bg-black bg-opacity-15  '>
        <i className="fi fi-tr-air-conditioner text-white  text-3xl"></i>
        <i className="fi fi-tr-bath text-white  text-3xl"></i>
        <i className="fi fi-rr-screen text-white  text-3xl"></i>
        <i className="fi fi-tr-washer text-white  text-3xl"></i>
        </div>
        <div className='w-24 h-8 text-sm lg:text-xl lg:w-32 lg:h-10 bg-[#9B804E] absolute right-0 top-5 text-white lora flex items-center justify-center z-999'>
$49.5/Night
        </div>
     
        <div className='w-full h-24 mt-10 group-hover:text-[#9B804E] '>
          <h1 className='lora text-base tracking-widest'>1 DOUBLE BED -2 GUEST</h1>
          <h1 className='forum text-4xl mt-2'>{name}</h1>
        </div>
    
    </section>
  )
}

export default HotelCard