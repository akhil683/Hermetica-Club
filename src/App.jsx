import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback';
import { DNA } from 'react-loader-spinner';
import Lottie from 'lottie-react';
import { eventsRef, projectRef, workshopRef } from './utils/firebase.utils';

const About = lazy(() => import('./routes/About'))
// const Details = lazy(() => import('./components/Details/Details'));
const Events = lazy(() => import('./routes/Events'));
const Gallery = lazy(() => import('./routes/Gallery'));
const Home = lazy(() => import('./routes/Home'))
const Members = lazy(() => import('./routes/Members'))
const NoPage = lazy(() => import('./routes/NoPage'))
const Projects = lazy(() => import('./routes/Projects'))
const Form = lazy(() => import('./routes/Form'))
const Workshops = lazy(() => import('./routes/Workshops'))

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import LoaderImg from './assets/loading.png';
import Eventdetails from './components/Details/Eventdetails';
import WorkshopDetials from './components/Details/WorkshopDetials';
import ProjectDetails from './components/Details/ProjectDetails';
import bgAnimation from './assets/Animation-5.json';
import bgAnimationMobile from './assets/bgAnimation.json';

const Loader = () => {
  return (
    <div className='h-[90vh] flex gap-6 flex-col justify-center items-center'>
      <img src={LoaderImg} className=' animate-bounce' alt="Loader Image" width={200} height={200} />
      <DNA
      visible={true}
      height="80"
      width="80"
      color="#c082ff"
      ariaLabel="tail-spin-loading"
      radius="2"
      wrapperStyle={{}}
      wrapperClass=""
      />
    </div>
  )}

const App = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return () => clearTimeout(timer);
})


  return (
    <div className=' bg-bgOpacity'>
      {isLoading && 
            <div className='fixed flexfflex-col gap-6 justify-center items-center z-50 bg-mainBg h-screen w-screen'>
              <Loader />
            </div>
          }
      <Header />
      <div className='h-screen fixed top-0 w-screen opacity-90 -z-10 overflow-hidden'>
        <Lottie animationData={bgAnimation} className='scale-110 max-sm:hidden -translate-y-48 object-cover' />
        <Lottie animationData={bgAnimationMobile} className='scale-150 sm:hidden -translate-x-12 object-cover' />
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
              <Projects />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/workshops' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Workshops />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Events />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/projects/:url' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <ProjectDetails dataRef={projectRef} />
            </Suspense>
          </ErrorBoundary>} 
          />
          
          <Route path='/workshops/:url' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <WorkshopDetials />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events/:url' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Eventdetails />
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
