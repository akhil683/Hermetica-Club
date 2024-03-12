import React from 'react';
import HeroImg from '../../assets/profile.jpg';
import FramerReveal from '../FramerReveal';

const Hero = () => {

  return (
    <FramerReveal>
      <div className='min-h-[90vh] flex mx-8 gap-2 sm:gap-6 max-sm:flex-col justify-center items-center'>

        <div className='m-2 sm:m-6 text-center text-xl font-opensans' >
          <h1 className='text-3xl md:text-6xl mb-3'>Team <span className=' text-violet'>Hermetica</span></h1>
          <p className='text-subMainText font-popppins text-center'>'We React To What Matters.'</p>
          <p className='max-w-[460px] text-subMainText text-xs mt-6 font-popppins'>Team Hermetica, established in 2014, represents the Department of Chemical Engineering, in the annual tech fest NIMBUS at National Institite of Technology, Hamirpur.</p>
        </div>

        <div className='m-12 sm:w-[400px] max-sm:scale-90 w-full h-[380px] rounded-2xl overflow-hidden'>
          <img src={HeroImg} className='w-full h-full object-cover' alt="" />
        </div>
      
      </div>
    </FramerReveal>
  )
}

export default Hero;
