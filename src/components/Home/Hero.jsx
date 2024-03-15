import React from 'react';
// import HeroImg from '../../assets/profile.jpg';
import FramerReveal from '../FramerReveal';
import RoomModal from '../hermetica-room/RoomModal';

const Hero = () => {

  return (
    <FramerReveal>
      <div className='min-h-[90vh] flex gap-2 sm:gap-6 max-sm:flex-col justify-center items-center'>

        <div className='m-2 sm:m-6 mx-8 text-center text-xl font-opensans' >
          <h1 className='text-3xl md:text-6xl mb-3'>Team <span className=' text-violet'>Hermetica</span></h1>
          <p className='text-subMainText font-popppins text-center'>'We React To What Matters.'</p>
          <p className='max-w-[460px] text-subMainText text-xs mt-6 font-popppins'>Team Hermetica, established in 2014, represents the Department of Chemical Engineering, in the annual tech fest NIMBUS at National Institite of Technology, Hamirpur.</p>
        </div>

        <div className='sm:m-12 sm:w-[500px] mt-16 w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden'>
          <RoomModal />
          {/* <img src={HeroImg} className='w-full h-full object-cover' alt="" /> */}
        </div>
      
      </div>
    </FramerReveal>
  )
}

export default Hero;
