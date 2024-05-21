import React from 'react';
import {hotelLogo, pic11} from '../Images'
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
   <section className='w-full h-auto   relative bg-black bg-opacity-80 pt-10 pb-5'> 
   <div className='absolute top-0 -z-10 w-full h-full opacity-45 '>
    <img src={pic11} className='w-full h-full object-cover' alt="" />
   </div>
        <div className='w-[80%] lg:w-[40%] m-auto   text-center z-100'>
            <img src={hotelLogo} className=' m-auto  w-[80%] md:w-[50%] lg:w-[50%]' alt="" />
            <p className='lora mt-5 text-[#b5b5b5]'>Located in the heart of the city, we offer elegantly designed rooms and top-notch amenities to make your stay unforgettable.  </p>
            <div className='flex flex-col md:flex-row   gap-5 mt-10 text-white'>
                <button className='md:w-1/2 h-12 bg-[#9B804E] hover:bg-[#3D3931] '>+91 7581000017</button>
                <button className='md:w-1/2  h-12 bg-[#3D3931] hover:bg-[#9B804E]'>hotelindergarh@gmail.com</button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row  text-center  text-[#b5b5b5] p-10 gap-5'>
            <div className='w-full md:w-[50%]'>
                <ul >
                    <li className='lora text-2xl font-bold tracking-widest'>Links</li>
                    <Link to={"/"}>
           <li className='lora text-lg mt-2'>Home</li>
           </Link>
           <Link to={"/rooms/deluxe"}>
          
           <li className='lora text-lg mt-2'>Deluxe</li>
           </Link>
           <Link to={"/rooms/grand-royal"}>
           <li className='lora text-lg mt-2'>Grand Royal</li>
           </Link>
           <Link to={"/rooms/grand-heritage"}>
           <li className='lora text-lg mt-2'>Grand Heritage</li>
           </Link>
           <Link to={"/blogs"}>
           <li className='lora text-lg mt-2'>Blogs</li>
           </Link>
                </ul>
            </div>
           <div >
            <h1 className='lora text-2xl font-bold tracking-widest'>Address:-</h1>
            <br />
<p className='lora'>97-B, Sheetal Nagar, MR-10 Road, Vijay Nagar Square, Apollo Premier Building Service Road, Opp. Metro Pillar No. 144, INDORE (M.P) - 452010</p>
           </div>
           
        </div>
        <div className='w-[80%] h-1 bg-[#9B804E] mt-10 m-auto'>

        </div>
        <h1 className='lora text-center text-lg mt-5  text-[#b5b5b5]'>Hotel Indragarh Heritage</h1>
   </section>
  )
}

export default Footer