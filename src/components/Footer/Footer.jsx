import React from 'react'
import { Link } from 'react-router-dom'

import FooterSocials from './FooterSocials'
import FramerReveal from '../FramerReveal';

const Footer = () => {
  return (
    <footer className='relative py-12 px-12 overflow-hidden group bg-footerBg'>
      <div className='flex max-sm:flex-col  z-50 flex-wrap sm:ap-6 gap-12 sm:justify-around justify-center'>

        <FramerReveal>
          <FooterSocials />
        </FramerReveal>

        <FramerReveal>
        <div>
          <h4 className='text-lg mb-4'>Team Work</h4>
          <ul className=' text-iconbgHover flex flex-col max-sm:pl-2 gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Projects</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Events</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Workshops</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Members</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Gallery</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">About Us</Link></li>
          </ul>
        </div>
        </FramerReveal>
        {/* <FramerReveal>
        <div>
          <h4 className='text-lg mb-4'>Events</h4>
          <ul className='text-iconbgHover flex flex-col max-sm:pl-2 gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Something</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">something Else</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">another project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">One project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Extra Project</Link></li>
          </ul>
        </div>
        </FramerReveal> */}

        <FramerReveal>
          <div className='sm:max-w-[350px]'>
            <h3 className='text-xl mb-4'>Contact <span className=' text-violet'>Us</span></h3>
            <div className='flex flex-wrap gap-4 text-bg'>
              <div className='flex justify-between'>
              <input type="text" placeholder='First Name' className='w-[48%] bg-subMainText placeholder:text-bg outline-none p-2 rounded-lg' />
              <input type="text" placeholder='Last Name' className='w-[48%] outline-none p-2 bg-subMainText rounded-lg placeholder:text-bg' />
              </div>
              <input type="email" placeholder='Email Address' className='w-full p-2 outline-none rounded-lg placeholder:text-bg bg-subMainText' />
              <textarea className='w-full h-28 rounded-lg p-2 bg-subMainText placeholder:text-mainBg outline-none' placeholder='Suggestions' />
            </div>
            <div className='flex justify-end'>
              <button className='px-6 inline-block text-lg mt-4 py-2 bg-violet rounded-lg'>SEND</button>
            </div>
          </div>
        </FramerReveal>

      </div>

      <FramerReveal>
      <hr className='my-12' />
      <div className='text-center'>
          <span className='text-subMainText'>A Chemical Engineering Club</span>
          <div className='text-sm text-iconbgHover mt-4'>
              <p className='text-center'>Copyright &#169; 2024, All Rights Reserved</p>
          </div>
      </div>
      </FramerReveal>
      {/* <div className='absolute w-[10vw] h-[10vw] opacity-15 -translate-y-[10%] group-hover:-translate-y-[30%] duration-1000 rounded-full bg-iconbgHover'></div> */}
      {/* <img src={FooterImg} alt="" className='w-full h-full object-cover' /> */}
    </footer>
  )
}

export default Footer;
