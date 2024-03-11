import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc } from 'firebase/firestore';
import { suggestionsRef } from '../../utils/firebase.utils';
import Swal from 'sweetalert2';

import FramerReveal from '../FramerReveal';
import FooterSocials from './FooterSocials'

const Footer = () => {

  const initialForm = {
    name: "",
    email: "",
    suggestions: "",
  }
  const [formData, setFormData ] = useState(initialForm);

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await addDoc(suggestionsRef, formData);
      Swal.fire({
        title: "done",
        text: "Your response is successfully submitted !",
        icon: "success"
      });
      setFormData(initialForm)
    } catch (e) {
      alert("Error, Please try again");
      console.log(e.message);
    }
  }

  return (
    <footer className='relative py-12 px-12 overflow-hidden group bg-footerBg'>
      <div className='flex max-sm:flex-col  z-50 flex-wrap sm:ap-6 gap-12 sm:justify-around justify-center'>

        <FramerReveal>
          <FooterSocials />
        </FramerReveal>

        <FramerReveal>
        <div>
          <h4 className='text-xl mb-4'>Team <span className='text-violet'>Work</span></h4>
          <ul className=' text-subMainText flex flex-col max-sm:pl-2 gap-3'>
            <li className='hover:text-subMainText duration-150'><Link to="/projects">Projects</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="/events">Events</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="/workshops">Workshops</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="/members">Members</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="/gallery">Gallery</Link></li>
            <li className='hover:text-subMainText duration-150'><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        </FramerReveal>

        <FramerReveal>
          <div className='sm:max-w-[350px]'>
            <h3 className='text-xl mb-4'>Contact <span className=' text-violet'>Us</span></h3>
            <form onSubmit={(e) => onSubmitHandler(e)} className='flex flex-wrap gap-4 text-bg'>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder='Your Name' 
                className='w-full bg-subMainText placeholder:text-bg outline-none p-2 rounded-lg' 
              />
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder='Email Address' 
                className='w-full p-2 outline-none rounded-lg placeholder:text-bg bg-subMainText' 
              />
              <textarea 
                value={formData.suggestions}
                onChange={(e) => setFormData({...formData, suggestions: e.target.value})}
                className='w-full h-28 rounded-lg p-2 bg-subMainText placeholder:text-mainBg outline-none' 
                placeholder='Suggestions' 
              />
            <div className='flex justify-end w-full'>
              <button className='px-6 inline-block text-lg text-mainText font-semibold py-2 bg-violet rounded-lg' type='submit'>SEND</button>
            </div>
            </form>
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

    </footer>
  )
}

export default Footer;
