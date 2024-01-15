import React from 'react';
import { motion } from 'framer-motion';
// import Svg from './Svg';
import HeroImg from '../assets/profile.jpg';

const Hero = () => {

  return (
  <div className='min-h-[92vh] flex mx-8  gap-6 max-sm:flex-col justify-center items-center'>

      <div className='m-6'>
        <h1 className='text-4xl md:text-6xl mb-4'>This is <span className=' text-violet'>Hermetica</span></h1>
        <p className='w-[300px] text-subMainText'>We believe in what Matters!</p>
      </div>

      <motion.div 
        className='m-12 sm:w-[400px] w-full h-[380px] rounded-2xl overflow-hidden'
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 20,
          bottom: 5
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          type: 'spring',
          duration: 0.4,
        }}
      >
        <img src={HeroImg} className='w-full h-full object-cover' alt="" />
      </motion.div>
    
    </div>

  )
}

export default Hero
