import React from 'react'
import Img from '../assets/profile.jpg'
import FramerReveal from '../components/FramerReveal'
const Gallery = () => {
  return (
    <div className='m-4 sm:mb-12'>

      <div className='flex flex-wrap gap-4 max-sm:text-sm mb-6'>
        <button className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'> Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Pre-Nimbus</button>
        {/* <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Extensions</button> */}
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Hermetica Day</button>
      </div>

      <div className='mx-2 flex flex-wrap justify-center items-center gap-6'>
        <FramerReveal>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        </FramerReveal>
        <FramerReveal>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        </FramerReveal>
        <FramerReveal>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        </FramerReveal>
        <FramerReveal>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        </FramerReveal>
      </div>
    </div>
  )
}

export default Gallery
