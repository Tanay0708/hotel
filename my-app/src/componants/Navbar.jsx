import React from 'react'
import navList from '../contants'
import '../App.css';
import NavDrawer from './NavDrawer';
import CustomButton from './CustomButton';
import {Link} from 'react-router-dom'
import { hotelLogo } from '../Images';

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
        </ul>
        </div>
            <div className='lg:hidden block z-100'>
                <NavDrawer/>
            </div>
            <div className='w-36 hidden md:hidden lg:block'>
           <CustomButton />
            </div>
    </div>
  )
}

export default Navbar