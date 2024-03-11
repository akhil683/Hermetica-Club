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
      <FramerReveal>
        <div className='relative flex flex-col justify-center items-center gap-8 overflow-hidden'>
          <h3 className='text-3xl sm:text-5xl'>Past <span className='text-violet'>Achievement</span></h3>
            <div className="carousel carousel-center w-full px-6 md:max-w-[900px] p-4 space-x-4 rounded-box">

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7675.jpg?alt=media&token=ec511c06-bf5f-4ddd-8971-f5d0841afcd9" alt="" />
              </div>
              <div className='w-[300px] z-50 h-[400px] p-8 rounded-2xl bg-iconBg bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k16</h4>
                <p className='text-center text-xl'>Best Publicity Team in Nimbus</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7657.jpg?alt=media&token=a27fda5e-4b1c-4990-a862-c69ad2251962" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k17</h4>
                <p className='text-center text-xl'>Best Event in Nimbus 2k17</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7679.jpg?alt=media&token=f1fe96b4-cc9e-48d8-8971-52372030d98e" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k18</h4>
                <p className='text-center text-xl'>Best Innovative Team in Nimbus</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7657.jpg?alt=media&token=a27fda5e-4b1c-4990-a862-c69ad2251962" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k19</h4>
                <p className='text-center text-xl'>Best Innovative in Nimbus</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7679.jpg?alt=media&token=f1fe96b4-cc9e-48d8-8971-52372030d98e" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k21</h4>
                <p className='text-center text-xl'>Best ManagementTeam in Nimbus</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7675.jpg?alt=media&token=ec511c06-bf5f-4ddd-8971-f5d0841afcd9" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k23</h4>
                <p className='text-center text-xl'>Best Events in Nimbus 2k23</p>
              </div>
            </div> 

            <div className="carousel-item relative">
              <div className='absolute top-0 left-0 w-full opacity-50 h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7679.jpg?alt=media&token=f1fe96b4-cc9e-48d8-8971-52372030d98e" alt="" />
              </div>
              <div className='w-[300px] h-[400px] p-8 rounded-2xl bg-iconBg z-50 bg-opacity-50 flex flex-col justify-center items-center'>
                <h4 className='mb-8 text-2xl text-violet'>Nimbus 2k24</h4>
                <p className='text-center text-xl'>All set to achieve new milestones !</p>
              </div>
            </div> 

          </div>
        </div>
      </FramerReveal>

      <Work />
      <Domains />

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
