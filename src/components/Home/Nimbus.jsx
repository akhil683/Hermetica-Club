import React from 'react';
import Img from '../../assets/profile.jpg';

const Nimbus = () => {
  return (
    <section className='min-h-screen m-6 max-sm:mb-16 max-sm:mx-12 flex flex-wrap justify-center items-center gap-6'>

      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[150px] h-[150px]'>
          <img src={Img} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-xl uppercase mt-2 mb-6'>Nimbus</h3>
        <p className='text-sm h-[230px] text-subMainText'>Nimbus, the annual technical fest of the NITH since 2010 is with groundbreaking amalgamations of science and technology with pure delight and enthusiasm. Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives  for the betterment of society.</p>
      </div>

      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[150px] h-[150px]'>
          <img src={Img} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-xl uppercase mt-2 mb-6'>Nimbus</h3>
        <p className='text-sm h-[230px] text-subMainText'>Nimbus, the annual technical fest of the NITH since 2010 is with groundbreaking amalgamations of science and technology with pure delight and enthusiasm. Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives  for the betterment of society.</p>
      </div>

      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[150px] h-[150px]'>
          <img src={Img} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-xl uppercase mt-2 mb-6'>Nimbus</h3>
        <p className='text-sm h-[230px] text-subMainText'>Nimbus, the annual technical fest of the NITH since 2010 is with groundbreaking amalgamations of science and technology with pure delight and enthusiasm. Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives  for the betterment of society.</p>
      </div>

    </section>
  )
}

export default Nimbus
