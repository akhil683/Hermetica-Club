import React from 'react'
import { Link } from 'react-router-dom'

import FooterSocials from './FooterSocials'

const Footer = () => {
  return (
    <footer className='py-12 px-12 bg-mainBg'>
      <div className='flex flex-wrap gap-6 sm:justify-around justify-center'>
        <FooterSocials />
        <div>
          <h4 className='text-lg my-4'>Projects</h4>
          <ul className=' text-iconbgHover flex flex-col gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Something</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">something Else</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">another project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">One project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Extra Project</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg my-4'>Events</h4>
          <ul className='text-iconbgHover flex flex-col gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="">Something</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">something Else</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">another project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">One project</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="">Extra Project</Link></li>
          </ul>
        </div>
      </div>
      <hr className='my-12' />
      <div className='text-center'>
          <span className='text-subMainText'>A Chemical Engineering Club</span>
          <div className='text-sm text-center text-iconbgHover my-2 flex justify-between'>
              <p>Developed by Akhil</p>
              <p>Copyright2023</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
