import React from 'react';
import NimbusImg from '../../assets/nimbus-logo.jpg';
import HermeticaImg from '../../assets/hermetica-logo.jpg';
import FramerReveal from '../FramerReveal';

const Nimbus = () => {
  return (
    <section className='min-h-screen mt-6 max-sm:mb-16 max-sm:mx-12 flex flex-wrap justify-center items-center gap-6'>
      <FramerReveal>
      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={NimbusImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold uppercase mt-2 mb-6'>Nimbus</h3>
        <p className='text-sm h-[230px] text-subMainText'>Nimbus, the annual technical fest of the NITH since 2010 is with groundbreaking amalgamations of science and technology with pure delight and enthusiasm. Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives  for the betterment of society.</p>
      </div>
      </FramerReveal>
      <FramerReveal>
      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={HermeticaImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold uppercase mt-2 mb-6'>Our Vision</h3>
        <p className='text-sm h-[230px] text-subMainText'>
          To create a vivid environment in which technical human resources cna meet natnional expectations. With a long-term goal of environmental protection, we analyse every new possibilities in chemcial engineering in conjuction with research strangths in various new technologies, diverse polymers, biochemical and food engineering.
        </p>
      </div>
      </FramerReveal>
      <FramerReveal>
      <div className='text-center p-6 px-12 flex flex-col items-center justify-center w-full sm:w-[350px] bg-iconBg'>
        <div className='w-[120px] h-[120px]'>
          <img src={HermeticaImg} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <h3 className='text-2xl text-violet font-semibold uppercase mt-2 mb-6'>Our Mission</h3>
        <p className='text-sm h-[230px] text-subMainText'>
          To conceive new knowledge via innovative research and collaborative initiatives that provide opportunity for long-term interaction wiht academia and industry. To train high-quality people an intellectual resources to serve society. To create environmentally friendly goods and technologies. To be the best.
        </p>
      </div>
      </FramerReveal>

    </section>
  )
}

export default Nimbus
