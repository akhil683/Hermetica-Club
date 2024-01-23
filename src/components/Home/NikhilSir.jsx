import React, { useState} from 'react';
import FramerReveal from '../FramerReveal';
import { motion, useAnimation } from 'framer-motion'

import CcImage from '../../assets/profile.jpg';

const NikhilSir = () => {
  const [ showCC, setShowCC ] = useState(false);
  const control = useAnimation();

  const toggleMenu = () => {
    setShowCC(!showCC);

    let yValue;
    if(showCC) {
      yValue = 100;
    } else {
      yValue = -100;
    }
    control.start({
      y: `${yValue}%`,
      transition: { 
        duration: 1,
        type: 'spring',
        stiffness: 520,
        damping: 40,
      }})
  }

  return (
    <>
    <div onClick={toggleMenu} className={`fixed top-0 left-0 h-screen w-screen bg-mainBg opacity-75 z-50 ${showCC ? "" : "hidden"}`}></div>
    <FramerReveal>
        <div 
          className='relative group mx-4 cursor-pointer hover:-translate-y-1 duration-300'
          onClick={toggleMenu}
        >
          <div className='absolute left-2 bottom-4 duration-500 text-iconBg font-semibold'>
            <span className='px-4 py-2 rounded-full bg-mainText opacity-80'>Nikhil Jadon</span>
          </div>
          <div className='sm:w-[300px] w-full sm:h-[350px] bg-violet rounded-2xl overflow-hidden'>
            <img className='w-full sm:h-full object-cover' src={CcImage} alt="" />
          </div>
        </div>
      </FramerReveal>
      <motion.div 
        className='h-[65vh] w-full sm:max-w-[600px] bg-iconBg fixed z-50 -bottom-[68%] left-0 rounded-t-3xl p-4'
        animate={control}
      >
        <h4 className='text-2xl font-semibold m-2 text-violet'>Nikhil Jadon</h4>
        <hr className=' bg-iconbgHover h-[1px] my-4' />
        <p className='text-xl font-semibold my-2'>Club Coordinator</p>
        <p className=''>Branch : <span>Chemcial Engineering</span></p>
        <p className=' text-subMainText my-4'>Nikhil Jadon Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eos. Quam repellendus non, fugit, deleniti expedita eligendi facere adipisci nobis sunt iste ipsum omnis voluptatum et totam, rerum sit libero aut? Obcaecati quod dolor error at sequi, alias atque vitae fugiat! Eius, beatae earum. Quidem ut obcaecati eum adipisci culpa.</p>
        <div className='my-6'>
          <a className='px-4 py-2 bg-mainText text-mainBg rounded-full' href="">Instagram</a>
          <a className='px-4 py-2 bg-mainText text-mainBg rounded-full ml-4' href="">LinkedIn</a>
        </div>
      </motion.div>
    </>
  )
}

export default NikhilSir
