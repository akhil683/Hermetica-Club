import React from 'react'
import { Link } from 'react-router-dom'

import FooterSocials from './FooterSocials'
import FramerReveal from '../FramerReveal';

const Footer = () => {
  return (
    <footer className='relative py-12 px-12 overflow-hidden group bg-bg'>
      <div className='flex z-50 flex-wrap gap-6 sm:justify-around justify-center'>
        <FramerReveal>
          <FooterSocials />
        </FramerReveal>
        <FramerReveal>
        <div>
          <h4 className='text-lg my-4 text-mainBg'>Projects</h4>
          <ul className=' text-iconbgHover flex flex-col gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Something</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">something Else</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">another project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">One project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Extra Project</Link></li>
          </ul>
        </div>
        </FramerReveal>
        <FramerReveal>
        <div>
          <h4 className='text-lg my-4 text-mainBg'>Events</h4>
          <ul className='text-iconbgHover flex flex-col gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Something</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">something Else</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">another project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">One project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Extra Project</Link></li>
          </ul>
        </div>
        </FramerReveal>
      </div>
      <FramerReveal>
      <hr className='my-12' />
      <div className='text-center'>
          <span className=' text-mainBg'>A Chemical Engineering Club</span>
          <div className='text-sm text-center text-iconbgHover my-2 flex justify-between'>
              <p>Developed by Akhil</p>
              <p>Copyright2023</p>
          </div>
      </div>
      </FramerReveal>
      {/* <div className='absolute w-[10vw] h-[10vw] opacity-15 -translate-y-[10%] group-hover:-translate-y-[30%] duration-1000 rounded-full bg-iconbgHover'></div> */}
      {/* <img src={FooterImg} alt="" className='w-full h-full object-cover' /> */}
    </footer>
  )
}

export default Footer;
