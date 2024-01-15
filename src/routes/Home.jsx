import React from 'react'
import Hero from '../components/Hero'
import CcImage from '../assets/profile.jpg';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Hero /> 
      
      <div className='p-6 pb-12 sm:h-screen bg-iconBg'>
      
        <h2 className='text-center sm:text-5xl text-3xl my-12 font-popppins'><span className='text-violet'>Club</span> Co-ordinators</h2>
     
        <div className='flex max-sm:flex-col max-sm:gap-12 justify-around'>
          {/* Aditya Saroch Sir  */}
        <motion.div 
          className='relative group mx-4'
        >
          <div className='absolute left-2 bottom-12 duration-500 text-iconBg font-semibold group-hover:bottom-4'>
            <span className='px-4 py-2 rounded-full bg-mainText hover:bg-violet hover:text-mainText duration-500 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-10'>Aditya Saroch</span>
            <p className='px-4 py-2 mt-4 rounded-full bg-mainText hover:bg-violet hover:text-mainText duration-500 opacity-0 group-hover:opacity-100'>Club Coordinator</p>
          </div>
          <div className='sm:w-[300px] w-full sm:h-[350px] bg-violet rounded-2xl overflow-hidden'>
            <img className='w-full sm:h-full object-cover' src={CcImage} alt="" />
          </div>
        </motion.div>

        <motion.div 
          className='w-56 mt-6 fixed font-semibold max-sm:hidden'
        >
          <div className='flex gap-4 text-center'>
            <div className='w-10 bg-transparent border-2 border-mainText rounded-full'></div>
            <p className='py-2 px-6 rounded-full bg-mainText text-mainBg'>Aditya Saroch</p>
          </div>
          <div className='pt-2 backdrop-blur-md mt-4 bg-iconbgHover rounded-md'>
              <div className='p-2 bg-iconBg rounded'>
                <span>Club Coordinator</span>
                <p className=' font-normal text-sm leading-tight text-subMainText text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus temporibus ratione minus? Natus sit id earum inventore commodi, repellat aliquam dicta pariatur omnis ex aut labore nesciunt consetur ut?</p>
              </div>
          </div>
        </motion.div>

        {/* Nikhil Sir  */}
        <motion.div 
          className='relative group mx-4'
        >
          <div className='absolute left-2 bottom-12 duration-500 text-iconBg font-semibold group-hover:bottom-4'>
            <span className='px-4 py-2 rounded-full bg-mainText hover:bg-violet hover:text-mainText duration-500 opacity-0 group-hover:opacity-100'>Aditya Saroch</span>
            <p className='px-4 py-2 mt-4 rounded-full bg-mainText hover:bg-violet hover:text-mainText duration-500 opacity-0 group-hover:opacity-100'>Club Coordinator</p>
          </div>
          <div className='sm:w-[300px] w-full sm:h-[350px] bg-violet rounded-2xl overflow-hidden'>
            <img className='w-full sm:h-full object-cover' src={CcImage} alt="" />
          </div>
        </motion.div>
        <motion.div 
          className='w-56 mt-6 fixed font-semibold max-sm:hidden'
        >
          <div className='flex gap-4 text-center'>
            <div className='w-10 bg-transparent border-2 border-mainText rounded-full'></div>
            <p className='py-2 px-6 rounded-full bg-mainText text-mainBg'>Aditya Saroch</p>
          </div>
          <div className='pt-2 backdrop-blur-md mt-4 bg-iconbgHover rounded-md'>
              <div className='p-2 bg-iconBg rounded'>
                <span>Club Coordinator</span>
                <p className=' font-normal text-sm leading-tight text-subMainText text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut accusamus temporibus ratione minus? Natus sit id earum inventore commodi, repellat aliquam dicta pariatur omnis ex aut labore nesciunt consetur ut?</p>
              </div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  )
}

export default Home
