import React from 'react'
import navList from '../contants'
import '../App.css';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  return (
    <div className='w-[100%] p-5 m-auto flex justify-between h-24 items-center bg-[#FBF6E8] z-999'>
        <div>
           <img src="https://herittage.wpengine.com/wp-content/uploads/2023/05/logo.svg" alt="" />
        </div>
        <div>
        <ul className='hidden lg:flex justify-between gap-4 forum font-bold tracking-wider md:hidden ' >
            {
                navList.map((el) => {
                    return <li key={el}>
                        {el}
                    </li>
                })
            }
        </ul>
        </div>
            <div className='lg:hidden block z-100'>
                <NavDrawer/>
            </div>
            <div className='w-36 hidden md:hidden lg:block'>
            <button className='w-full h-12 bg-[#9B804E] hover:bg-[#3D3931] text-white '>Email</button>
            </div>
    </div>
  )
}

export default Navbar