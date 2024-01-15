import React from 'react'
import Img from '../assets/profile.jpg'
const Gallery = () => {
  return (
    <div className='m-4 sm:m-12'>
      <div className='flex flex-wrap gap-4 max-sm:text-sm mb-6'>
        <button className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'> Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Pre-Nimbus</button>
        {/* <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Extensions</button> */}
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet'>Hermetica Day</button>
      </div>
      <div className='mx-6 flex flex-wrap gap-6'>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-[350px] h-[300px] border border-iconbgHover'>
          <img src={Img} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
