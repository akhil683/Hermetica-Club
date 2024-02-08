import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const FooterSocials = () => {

  return (
    <div>
      <div className='mt-2 mb-6'>
        <Link to="/">
          <h2 className='text-2xl bg-iconBg hover:bg-violet duration-200 px-4 py-3 rounded-full text-center mb-2'>Hermetica</h2>
        </Link>
        <p className=' text-mainBg text-center'>The heart of Tech</p>
      </div>
        <div className='flex sm:gap-4 gap-6'>
          <a href='https://www.instagram.com/teamhermetica/?igshid=YmMyMTA2M2Y%3D' className='p-4 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaInstagram /></a>
          <a href='https://www.linkedin.com/company/teamhermetica/mycompany/' className='p-4 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaLinkedinIn /></a>
          <a href='https://www.youtube.com/@teamhermetica4195' className='p-4 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaYoutube /></a>
        </div>
    </div>
  )
}

export default FooterSocials
