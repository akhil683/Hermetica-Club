import React from 'react';
import NimbusImg from '../../assets/nimbus-logo.jpg';
import HermeticaImg from '../../assets/hermetica-logo.jpg';
import FramerReveal from '../FramerReveal';
import { Link } from 'react-router-dom';

const Nimbus = () => {
  return (
    <>
      <FramerReveal>
        <h2 className='text-4xl text-center sm:text-5xl'>Our <span className='text-violet'>Work</span></h2>
      </FramerReveal>
    <section className='min-h-screen mt-6 max-sm:mb-16 max-sm:mx-12 flex flex-wrap justify-center items-center gap-6'>
      <FramerReveal>
      <Link to="/projects" className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg hover:-translate-y-1 duration-200 hover:shadow-2xl hover:shadow-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={NimbusImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold mt-3 mb-6'>Projects</h3>
        <p className='text-sm sm:h-[260px] text-subMainText text-justify'>Team Hermetica provides you with the chance to acquire a taste of technical projects in the field of chemical engineering and inspire participants to recreate and reinvent pervasive innovation in the college itself, at the highest levels imaginable. <br />  <br />
        Projects allow us to put technological and scientific concepts into practise, boosting our creativity and thinking in several dimensions
        </p>
      </Link>
      </FramerReveal>
      <FramerReveal>
      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg hover:-translate-y-1 duration-200 hover:shadow-2xl hover:shadow-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={HermeticaImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold mt-3 mb-6'>Events</h3>
        <p className='text-sm sm:h-[260px] text-subMainText text-justify'>
        Our activities give a forum for young minds to demonstrate their abilities and compete with their peers, from solving mysteries to demonstrating your academic knowledge. <br /><br /> Organizing activities such as Mind Hunt, an institute-level event, and Chem-e-car, which allow you to rediscover your curiosity and sense of adventure.All you have to consider is that "Curiosity is the wick in the candle of learning."
        </p>
      </div>
      </FramerReveal>
      <FramerReveal>
      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg hover:-translate-y-1 duration-200 hover:shadow-2xl hover:shadow-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={HermeticaImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold mt-3 mb-6'>Workshops</h3>
        <p className='text-sm sm:h-[260px] text-subMainText text-justify'>
        A workshop is where mysteries are unveiled and a student must take it into consideration to learn and achieve more. We provide MATLAB, ANSYS, and other programming workshops. <br /> <br /> It is an excellent method for teaching hands-on skills since it allows pupils to experience new concepts. Students are clearly concerned about the fundamental use of the aforementioned programme.
        </p>
      </div>
      </FramerReveal>

    </section>
    </>
  )
}

export default Nimbus
