import React from 'react'
import navList from '../contants'
import '../App.css';
import NavDrawer from './NavDrawer';
import CustomButton from './CustomButton';
import {Link} from 'react-router-dom'
import { hotelLogo } from '../Images';
import { Button } from '@material-tailwind/react';

const Navbar = () => {
  return (
    <div className='w-[100%] p-5 m-auto flex justify-between h-24 items-center  bg-[#FBF6E8] z-999'>
        <div>
           <img src={hotelLogo} className='border-2 w-24'  alt="" />
        </div>
        <div>
        <ul className='hidden lg:flex justify-between gap-4 forum font-bold tracking-wider md:hidden ' >
           <Link to={"/"}>
           <li className='text-lg'>Home</li>
           </Link>
           <Link to={'/rooms/deluxe'}>
           <li className='text-lg'>Deluxe</li>
           </Link>
           <Link to={'/rooms/grand-royal'}>
           <li className='text-lg'>Grand Royal</li>
           </Link>
           <Link to={'/rooms/grand-heritage'}>
           <li className='text-lg'>Grand Heritage</li>
           </Link>
           <Link to={'/blogs'}>
           <li className='text-lg'>Blogs</li>
           </Link>
        </ul>
        </div>
        <div>
        
        </div>
            <div className='lg:hidden flex items-center gap-2 z-100' >
           <a href="tel:+916260512625">
            <Button  className='bg-[#9B804E] w-full h-full'>
        Call us
      </Button>
      </a>
                <NavDrawer/>
            </div>
            <div className='w-72 hidden md:hidden lg:flex gap-2  items-center'>
           <CustomButton />
           <span className='forum'>OR</span>
           
           <Button  className='bg-[#9B804E] w-full h-full'>
            <a href="#footer">Call</a>
        
      </Button>
     
            </div>
            
    </div>
  )
}

export default Navbar