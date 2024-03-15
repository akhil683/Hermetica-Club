import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAnimation } from 'framer-motion';

import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import MobileMenu from './MobileMenu';
import HermeticaImg from '../../assets/hermetica-logo.jpg';

const Header = () => {

  const control = useAnimation();
  const [show, setShow] = useState("top");
  const [ showMenu, setShowMenu ] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ navBg, setNavBg ] = useState("")

  const controlNavbar = () => {
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrollY && !showMenu) {
        setShow("-translate-y-full")
      } else {
        setShow("show");
      }
    }
    setLastScrollY(window.scrollY);
  }
    // if(window.screenY === 0) {
    //   setNavBg("bg-opacity-0")      
    // } else {
    //   setNavBg("")
    // }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
    window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

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
  // from-mainBg to-transparent p bg-gradient-to-b

  return (
    <>
    <nav className={`flex sm:justify-around justify-between sticky top-0 items-center  p-4 bg-bgOpacity ${navBg} overflow-hidden z-50 duration-200 ${show}`}>

      <Link to='/'  className='bg-iconBg flex items-center gap-1 px-4 py-2 rounded-full duration-200 my-auto hover:bg-iconbgHover hover:scale-110'>
        <img src={HermeticaImg} alt="" className='h-5 w-5 object-cover rounded-full' />
        <span className='sm:text-xl'>Hermetica</span>
      </Link>

      <ul className='lg:flex hidden py-1 rounded-full font-popppins'>
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
          <Link to='/workshops'>Workshops</Link>
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

      <div onClick={toggleMenu} className='lg:hidden flex gap-2 px-4 py-3 group text-subMainText bg-iconBg duration-200 hover:bg-iconbgHover hover:scale-105 rounded-full cursor-pointer'>
        <CiMenuFries />
        <IoIosArrowForward className={`group-hover:text-mainText transition duration-200 ${showMenu ? 'rotate-180' : ''}`}/>
      </div>

    </nav>
    <div onClick={toggleMenu} className='lg:hidden fixed top-18 right-0 text-lg z-40'>
      <MobileMenu control={control} />
    </div>
    </>
  )
}
export default Header
