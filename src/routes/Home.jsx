import React from 'react'

import Achievements from '../components/Home/Achievements';
import Domains from '../components/Home/Domains';
import FramerReveal from '../components/FramerReveal';
import Hero from '../components/Home/Hero';
import Nimbus from '../components/Home/Nimbus';
import AdityaSir from '../components/Home/AdityaSir';
import NikhilSir from '../components/Home/NikhilSir';
import Work from '../components/Home/Work';


const Home = () => {
  return (
    <>
    
      <Hero /> 
      <Nimbus />
     <Achievements />
      <Work />
      <Domains />

      <div className='p-6 pb-12 sm:h-screen'>
      <FramerReveal>
        <h2 className='text-center sm:text-5xl text-3xl my-12 font-popppins'><span className='text-violet'>Club</span> Co-ordinators</h2>
      </FramerReveal>
        <div className='flex max-sm:flex-col gap-12 sm:gap-20 pb-24 justify-center'>
          <AdityaSir />
          <NikhilSir />
      </div>
      </div>

    </>
  )
}

export default Home
