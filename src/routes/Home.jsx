import React from 'react'

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
      <Work />
      <Domains />

      <FramerReveal>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h3 className='text-3xl sm:text-5xl'>Past <span className='text-violet'>Achievement</span></h3>
            <div className="carousel carousel-center w-full px-6 md:max-w-[900px] p-4 space-x-4 rounded-box">
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k16</h4>
                <p className='text-center'>Best Publicity Team in Nimbus</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k17</h4>
                <p className='text-center'>Best Event in Nimbus 2k17</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k18</h4>
                <p className='text-center'>Best Innovative Team in Nimbus</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k19</h4>
                <p className='text-center'>Best Innovative in Nimbus</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k21</h4>
                <p className='text-center'>Best ManagementTeam in Nimbus</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k23</h4>
                <p className='text-center'>Best Events in Nimbus 2k23</p>
              </div>
            </div> 
            <div className="carousel-item">
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg flex flex-col justify-center items-center'>
                <h4 className='mb-4 text-xl text-violet'>Nimbux 2k14</h4>
                <p className='text-center'>All set to achieve new milestones !</p>
              </div>
            </div> 

          </div>
        </div>
      </FramerReveal>


      <div className='p-6 pb-12 sm:h-screen'>
      
      <FramerReveal>
        <h2 className='text-center sm:text-5xl text-3xl my-12 font-popppins'><span className='text-violet'>Club</span> Co-ordinators</h2>
      </FramerReveal>
     
        <div className='flex max-sm:flex-col gap-12 sm:gap-20 justify-center'>
          <AdityaSir />
          <NikhilSir />
      </div>
      </div>
    </>
  )
}

export default Home
