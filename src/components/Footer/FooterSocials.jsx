import React from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FooterSocials = () => {
  return (
    <div>
      <div className='mb-6'>
          <h3 className='text-xl mb-4'>Team <span className='text-violet'>Hermetica</span></h3>
        <p className=' text-subMainText text-sm sm:max-w-[350px]'>"We React to What Matters !" Team Hermetica, was established as the departmental team of Chemical Engineering, at the National Institute of Technology, Hamirpur in the year 2014.</p>
      </div>
        <div className='flex gap-4'>
          <a href='https://www.instagram.com/teamhermetica/?igshid=YmMyMTA2M2Y%3D' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaInstagram /></a>
          <a href='https://www.linkedin.com/company/teamhermetica/mycompany/' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaLinkedinIn /></a>
          <a href='https://www.youtube.com/@teamhermetica4195' className='p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-125 cursor-pointer duration-100'><FaYoutube /></a>
        </div>
    </div>
  )
}

export default FooterSocials
