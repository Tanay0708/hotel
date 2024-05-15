import React from 'react';
import {pic11, pic3, pic4} from '../Images'
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
   <section className='w-full h-auto   relative bg-black bg-opacity-80 pt-10 pb-5'> 
   <div className='absolute top-0 -z-10 w-full h-full opacity-45 '>
    <img src={pic11} className='w-full h-full object-cover ' alt="" />
   </div>
        <div className='w-[80%] lg:w-[40%] m-auto  border-black text-center z-100'>
            <img src="https://herittage.wpengine.com/wp-content/uploads/2023/05/logo-light.svg" className=' m-auto  w-[80%] md:w-[50%] lg:w-[50%]' alt="" />
            <p className='lora mt-5 text-[#b5b5b5]'>Located in the heart of the city, we offer elegantly designed rooms and top-notch amenities to make your stay unforgettable.  </p>
            <div className='flex flex-col md:flex-row  border-black gap-5 mt-10 text-white'>
                <button className='md:w-1/2 h-12 bg-[#9B804E] hover:bg-[#3D3931] '>+91 7581000017</button>
                <button className='md:w-1/2  h-12 bg-[#3D3931] hover:bg-[#9B804E]'>hotelindragarh@gmail.com</button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  text-[#b5b5b5] p-10 gap-5'>
            <div className='w-full '>
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
                </ul>
            </div>
            <div className='w-full '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4264435564373!2d75.89790257476227!3d22.749550226462716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3001e4f1857%3A0x94087fa2835661f0!2shotel%20indergarh%20heritage!5e0!3m2!1sen!2sin!4v1715753633323!5m2!1sen!2sin" width="100%" height="450" className="border-0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
           
        </div>
        <div className='w-[80%] h-1 bg-[#9B804E] mt-10 m-auto'>

        </div>
        <h1 className='lora text-center text-lg mt-5  text-[#b5b5b5]'>2023 herittage we design</h1>
   </section>
  )
}

export default Footer