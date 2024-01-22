import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import CcImage from '../assets/profile.jpg';
import Domains from '../components/Home/Domains';
import FramerReveal from '../components/FramerReveal';
import Hero from '../components/Home/Hero';
import Nimbus from '../components/Home/Nimbus';

const Home = () => {
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
        stiffness: 200,
        damping: 25,
      }})
  }

  return (
    <>
      <Hero /> 
      <Nimbus />
      <Domains />
      <div onClick={toggleMenu} className={`fixed top-0 left-0 h-screen w-screen bg-mainBg opacity-75 z-50 ${showCC ? "" : "hidden"}`}></div>
      <div className='p-6 pb-12 sm:h-screen bg-iconBg'>
      
      <FramerReveal>
        <h2 className='text-center sm:text-5xl text-3xl my-12 font-popppins'><span className='text-violet'>Club</span> Co-ordinators</h2>
      </FramerReveal>
     
        <div className='flex max-sm:flex-col max-sm:gap-12 justify-around'>
         
            <FramerReveal>
              <div 
                className='relative group mx-4'
                onClick={toggleMenu}
              >
                <div className='absolute left-2 bottom-4 duration-500 text-iconBg font-semibold'>
                  <span className='px-4 py-2 rounded-full bg-mainText opacity-80'>Aditya Saroch</span>
                </div>
                <div className='sm:w-[300px] w-full sm:h-[350px] bg-violet rounded-2xl overflow-hidden'>
                  <img className='w-full sm:h-full object-cover' src={CcImage} alt="" />
                </div>
              </div>

              <motion.div 
                className='h-[60vh] w-full bg-iconBg fixed z-50 -bottom-[60%] left-0 rounded-t-3xl p-4'
                animate={control}
              >
                <h4 className='text-2xl font-semibold m-2 text-violet'>Aditya Saroch</h4>
                <hr className=' bg-iconbgHover h-[1px] my-4' />
                <p className='text-xl font-semibold my-2'>Club Coordinator</p>
                <p className=''>Branch : <span>Chemcial Engineering</span></p>
                <p className=' text-subMainText my-4'>Aditya Saroch Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, eos. Quam repellendus non, fugit, deleniti expedita eligendi facere adipisci nobis sunt iste ipsum omnis voluptatum et totam, rerum sit libero aut? Obcaecati quod dolor error at sequi, alias atque vitae fugiat! Eius, beatae earum. Quidem ut obcaecati eum adipisci culpa.</p>
                <div className='my-6'>
                  <a className='px-4 py-2 bg-mainText text-mainBg rounded-full' href="">Instagram</a>
                  <a className='px-4 py-2 bg-mainText text-mainBg rounded-full ml-4' href="">LinkedIn</a>
                </div>
              </motion.div>

            </FramerReveal>
            <FramerReveal>
              <div 
                className='relative group mx-4'
                onClick={toggleMenu}
              >
                <div className='absolute left-2 bottom-4 duration-500 text-iconBg font-semibold'>
                  <span className='px-4 py-2 rounded-full bg-mainText opacity-80'>Nikhil Singh Jadon</span>
                </div>
                <div className='sm:w-[300px] w-full sm:h-[350px] bg-violet rounded-2xl overflow-hidden'>
                  <img className='w-full sm:h-full object-cover' src={CcImage} alt="" />
                </div>
              </div>

              <motion.div 
                className='h-[60vh] w-full bg-iconBg fixed z-50 -bottom-[60%] left-0 rounded-t-3xl p-4'
                animate={control}
              >
                <h4 className='text-2xl font-semibold m-2 text-violet'>Nikhil Singh Jadon</h4>
                <hr className=' bg-iconbgHover h-[1px] my-4' />
                <p className='text-xl font-semibold my-2'>Club Coordinator</p>
                <p className=''>Branch : <span>Chemcial Engineering</span></p>
                <p className=' text-subMainText my-4'>Nikhil Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorum aliquam asperiores quam in modi totam laudantium ducimus unde dolor placeat quo ullam quae saepe nemo amet quaerat ad aliquid iusto, cumque animi eveniet sit. Magni, incidunt pariatur earum reiciendis iure ipsam debitis maiores libero doloremque est ad nemo neque.</p>
                <div className='my-6'>
                  <a className='px-4 py-2 bg-mainText text-mainBg rounded-full' href="">Instagram</a>
                  <a className='px-4 py-2 bg-mainText text-mainBg rounded-full ml-4' href="">LinkedIn</a>
                </div>
              </motion.div>

            </FramerReveal>
      </div>
      </div>
    </>
  )
}

export default Home
