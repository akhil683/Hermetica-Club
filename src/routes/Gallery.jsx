import React from 'react'
import Img from '../assets/profile.jpg'
import FramerReveal from '../components/FramerReveal'

const Gallery = () => {

  return (
    <div className='m-4 sm:mb-12'>

      <div className='flex flex-wrap gap-4 max-sm:text-sm mb-6'>
        <button className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'> Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Pre-Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Hermetica Day</button>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-6'>

        <FramerReveal>
          <div className='relative w-full sm:w-[350px] sm:h-[300px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        <FramerReveal>
          <div className='relative w-full sm:w-[350px] sm:h-[300px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        <FramerReveal>
          <div className='relative w-full sm:w-[350px] sm:h-[300px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        <FramerReveal>
          <div className='relative w-full sm:w-[350px] sm:h-[300px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        
      </div>
    </div>
  )
}

export default Gallery
