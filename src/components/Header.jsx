import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnimation } from 'framer-motion';

import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import MobileMenu from './MobileMenu';

const Header = () => {

  const control = useAnimation();
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    let xValue;
    if(showMenu) {
      xValue = 320;
    } else {
      xValue = -320;
    }
    control.start({
      x: xValue,
      transition: { 
        duration: 1,
        type: 'spring',
        stiffness: 560,
        damping: 30,
      }})
  }

  return (
    <>
    <nav className='flex sm:justify-around justify-between sticky top-0 items-center bg-gradient-to-b from-mainBg to-transparent p-4 overflow-hidden z-50'>

      <Link to='/'  className='bg-iconBg px-4 py-2 rounded-full duration-200 my-auto hover:bg-iconbgHover hover:scale-110'>
        <span className='sm:text-xl'>Hermetica</span>
      </Link>

      <ul className='sm:flex hidden bg-iconBg text-subMainText py-1 rounded-full'>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/events'>Events</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/members'>Members</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li className='px-4 py-2 nav-hover'>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <div onClick={toggleMenu} className='sm:hidden flex gap-2 px-4 py-3 group text-subMainText bg-iconBg duration-200 hover:bg-iconbgHover hover:scale-105 rounded-full cursor-pointer'>
        <CiMenuFries />
        <IoIosArrowForward className={`group-hover:text-mainText transition duration-200 ${showMenu ? 'rotate-180' : ''}`}/>
      </div>

    </nav>
    <div onClick={toggleMenu} className='sm:hidden fixed top-18 right-0 text-lg z-40'>
      <MobileMenu control={control} />
    </div>
    </>
  )
}
export default Header
