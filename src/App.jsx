import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, useNavigate, Routes } from 'react-router-dom'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback';
import { eventsRef, projectRef, workshopRef } from './utils/firebase.utils';
import BgSvg from './assets/bg/bg.svg'

const About = lazy(() => import('./routes/About'))
const Details = lazy(() => import('./components/Details/Details'));
const Gallery = lazy(() => import('./routes/Gallery'));
const Home = lazy(() => import('./routes/Home'))
const Members = lazy(() => import('./routes/Members'))
const NoPage = lazy(() => import('./routes/NoPage'))
const Works = lazy(() => import('./routes/Works'))
const Form = lazy(() => import('./routes/Form'))

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import LoaderImg from './assets/loading.png';

const Loader = () => {
  return (
    <div className='h-[80vh] flex gap-6 flex-col justify-center items-center'>
      <img src={LoaderImg} className=' animate-bounce' alt="Loader Image" width={200} height={200} />
  </div>
  )}

const App = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  setIsLoading(true)
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);
  return () => clearTimeout(timer);
}, []);

  return (
    <div className=' bg-bgOpacity'>
      {isLoading && 
            <div className='fixed flex flex-col justify-center items-center z-50 bg-mainBg h-screen w-screen'>
              <Loader />
              <div className='flex absolute top-[65%] gap-4 text-4xl sm:text-7xl text-violet'>
                <span className='loader-animate'>H</span>
                <span className='loader-animate'>E</span>
                <span className='loader-animate'>R</span>
                <span className='loader-animate'>M</span>
                <span className='loader-animate'>E</span>
                <span className='loader-animate'>T</span>
                <span className='loader-animate'>I</span>
                <span className='loader-animate'>C</span>
                <span className='loader-animate'>A</span>
              </div>
            </div>
          }
      <Header />
      

      <div className='h-screen scale:125 blur-xs fixed top-0 w-screen opacity-90 overflow-hidden'>
        <img src={BgSvg} alt="bg image" className=' opacity-60 w-full h-full object-cover ' />
      </div>
      
      <div className='z-30'>
      <Routes>
      
          <Route path='/' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/about' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/projects' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Works dataRef={projectRef} name="projects" />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/workshops' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Works dataRef={workshopRef} name="workshops" />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Works dataRef={eventsRef} name="events" />
            </Suspense>
          </ErrorBoundary>} 
          />
          
          <Route path='/projects/:id' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
              <Suspense fallback={<Loader />}>
                <Details dataRef={projectRef}/>
              </Suspense>
            </ErrorBoundary>
          }
          />

          <Route path='/workshops/:id' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Details dataRef={workshopRef} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events/:id' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Details dataRef={eventsRef} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/members' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Members />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/form' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Form />
            </Suspense>
          </ErrorBoundary>} 
          />
          
          <Route path='/gallery' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Gallery />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='*' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <NoPage />
            </Suspense>
          </ErrorBoundary>} 
          />

      </Routes>
    </div>

    <Footer />
    </div>
  )
}

export default App
