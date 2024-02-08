import React from 'react';
// import DomainImg from '../../assets/profile.jpg';
import FramerReveal from '../FramerReveal';

const Domains = () => {
  const Domains = [
    {
      name: 'Web Development',
      image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Home%2Fweb.jpg?alt=media&token=17abd735-38d4-4c30-961f-0e57bb51e493",
    },
    {
      name: 'Video Editing',
      image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Home%2Fvideo.jpg?alt=media&token=5ff721af-fedb-44ea-bb0e-5d93e42da65a",
    },
    {
      name: 'Graphic Design',
      image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Home%2Fgraphic.jpg?alt=media&token=80d15133-4bad-4118-9de7-73519565a685",
    },
    {
      name: 'Content Writing',
      image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Home%2Fcontent.jpeg?alt=media&token=69e22847-528a-4a9e-9ec2-707c1769dc8d",
    },
  ]

  return (
    <div className='min-h-screen flex max-md:my-12 flex-col gap-6 justify-center'>
      <FramerReveal>
        <h3 className='text-4xl sm:text-5xl text-center mb-12'>Our <span className=' text-iconBg'>Domains</span></h3>
      </FramerReveal>

      <div className='flex max-sm:flex-col gap-6 flex-wrap justify-center items-center'>
        {Domains.map(domain => (
          <FramerReveal  key={domain.name} >
          <div className='flex flex-col justify-center items-center group'>
            <div className='w-72 h-72 rounded-full overflow-hidden'>
              <img id='clip-path' src={domain.image} alt="" className=' group-hover:scale-125 w-full h-full object-cover group-hover:rotate-6 duration-300' />
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
