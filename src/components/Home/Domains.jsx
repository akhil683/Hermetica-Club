import React from 'react';
import DomainImg from '../../assets/profile.jpg';
import FramerReveal from '../FramerReveal';

const Domains = () => {
  const Domains = [
    {
      name: 'Web Development',
      image: '',
    },
    {
      name: 'Video Editing',
      image: '',
    },
    {
      name: 'Graphic Design',
      image: '',
    },
    {
      name: 'Content Writing',
      image: '',
    },
  ]

  return (
    <div className='min-h-screen flex max-md:my-12 flex-col gap-6 justify-center'>
      <FramerReveal>
        <h3 className='text-3xl sm:text-5xl text-center mb-12'>Our <span className='text-violet'>Domains</span></h3>
      </FramerReveal>

      <div className='flex max-sm:flex-col gap-6 flex-wrap justify-center items-center'>
        {Domains.map(domain => (
          <FramerReveal  key={domain.name} >
          <div className='flex flex-col justify-center items-center group'>
            <div className='w-72 h-72 rounded-full overflow-hidden'>
              <img src={DomainImg} alt="" className='group-hover:scale-110 w-full h-full object-cover group-hover:rotate-6 duration-300' />
            </div>
            <p className='px-4 py-2 bg-mainText text-mainBg mt-4 rounded-full w-[70%] text-center'>{domain.name}</p>
          </div>
          </FramerReveal>
        ))}
      </div>
    </div>
  )
}

export default Domains
