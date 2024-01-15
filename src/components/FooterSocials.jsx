import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

const FooterSocials = () => {

  return (
    <div>
      <div className='mt-2 mb-6'>
        <Link to="/">
          <h2 className='text-2xl bg-iconBg hover:bg-violet duration-200 px-4 py-2 rounded-full text-center mb-2'>Hermetica</h2>
        </Link>
        <p className='text-subMainText text-center'>The heart of Tech</p>
      </div>
        <ul className='flex sm:gap-4 gap-2'>
          <li className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaInstagram /></li>
          <li className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaLinkedinIn /></li>
          <li className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaGithub /></li>
          <li className='p-3 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaYoutube /></li>
        </ul>
    </div>
  )
}

export default FooterSocials
