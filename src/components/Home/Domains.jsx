import React from 'react';

import FramerReveal from '../FramerReveal';

import webImage from '../../assets/domain/web.png'
import graphicImage from '../../assets/domain/graphic.png'
import videoImage from '../../assets/domain/video.png'
import contentImage from '../../assets/domain/content.webp'

const Domains = () => {
  const Domains = [
    {
      name: 'Web Development',
      image: webImage,
    },
    {
      name: 'Video Editing',
      image: videoImage,
    },
    {
      name: 'Graphic Design',
      image: graphicImage,
    },
    {
      name: 'Content Writing',
      image: contentImage,
    },
  ]

  return (
    <div className='min-h-screen flex max-md:my-12 flex-col gap-6 justify-center'>
      <FramerReveal>
        <h3 className='text-4xl sm:text-5xl text-center mb-12'>Our <span className='text-violet'>Domains</span></h3>
      </FramerReveal>

      <div className='flex max-sm:flex-col gap-12 flex-wrap justify-center items-center'>
        {Domains.map(domain => (
          <FramerReveal  key={domain.name} >
          <div className='flex flex-col justify-center items-center group'>
            <div className='w-56 h-56 rounded-3xl bg-bgOpacity border border-subMainText shadow-xl shadow-neutral-800 hover:shadow-neutral-700  overflow-hidden'>
              <img src={domain.image} alt={domain.name} className=' group-hover:scale-110 w-full h-full object-cover group-hover:rotate-6 duration-300' />
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
