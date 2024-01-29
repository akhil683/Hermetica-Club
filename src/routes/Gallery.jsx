import React, {useState, useEffect} from 'react'
import Img from '../assets/profile.jpg'
import FramerReveal from '../components/FramerReveal'

const Gallery = () => {
  
  const [ show, setShow ] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrollY) {
        setShow("-translate-y-16 scale-90")
      } else {
        setShow("show");
      }
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
    window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])


  return (
    <div className='sm:mb-12'>

      <div className={`flex flex-wrap mx-4 -mt-[60px] sm:-mt-16 items-center sm:gap-4 gap-2 text-xs sm:text-sm font-montserrat fixed z-30 duration-300 ${show}`}>
        <button className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200'> Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200'>Pre-Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200'>Hermetica Day</button>
      </div>

      <div className='flex flex-wrap justify-center mt-16 gap-8 mx-4'>

        <FramerReveal>
          <div className='relative w-full sm:w-[330px] sm:h-[260px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>

        <FramerReveal>
          <div className='relative w-full sm:w-[330px] sm:h-[260px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        
        <FramerReveal>
          <div className='relative w-full sm:w-[330px] sm:h-[260px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        
        <FramerReveal>
          <div className='relative w-full sm:w-[330px] sm:h-[260px] border border-iconbgHover overflow-hidden group'>
            <a href={Img} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300'>Download</a>
            <img src={Img} alt="" className='w-full h-full object-cover' />
          </div>
        </FramerReveal>
        
      </div>
    </div>
  )
}

export default Gallery
