import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const FooterSocials = () => {

  return (
    <div>
      <div className='mb-6'>
          <h3 className='text-lg mb-4'>Team Hermetica</h3>
        <p className=' text-subMainText text-xs sm:max-w-[300px]'>"We React to What Matters !" Team Hermetica, was established as the departmental team of Chemical Engineering, at NIT Hamirpur in the year 2014.</p>
      </div>
        <div className='flex sm:gap-4 gap-6'>
          <a href='https://www.instagram.com/teamhermetica/?igshid=YmMyMTA2M2Y%3D' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaInstagram /></a>
          <a href='https://www.linkedin.com/company/teamhermetica/mycompany/' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaLinkedinIn /></a>
          <a href='https://www.youtube.com/@teamhermetica4195' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaYoutube /></a>
        </div>
    </div>
  )
}

export default FooterSocials
