import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback';
import { TailSpin } from 'react-loader-spinner';

const About = lazy(() => import('./routes/About'))
const Details = lazy(() => import('./components/Details/Details'));
const Events = lazy(() => import('./routes/Events'));
const Gallery = lazy(() => import('./routes/Gallery'));
const Home = lazy(() => import('./routes/Home'))
const Members = lazy(() => import('./routes/Members'))
const NoPage = lazy(() => import('./routes/NoPage'))
const Projects = lazy(() => import('./routes/Projects'))
const Form = lazy(() => import('./routes/Form'))

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
// import Gallery from './routes/Gallery';

const Loader = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
      <TailSpin
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
  )
}

const App = () => {

  const [ isLoading, setIsLoading ] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  return () => clearTimeout(timer);
})

  const navigate = useNavigate();
  const Data = {
    "Project": [
      {
        id: 1,
        name: "Ink from carbon soot",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 2,
        name: "Noise proofing by agro waste",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 3,
        name: "Electricity generating tiles",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 4,
        name: "Solar Tracker",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
    ],
    "Event": [
      {
        id: 1,
        name: "asdsome fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 2,
        name: "sdsome fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 3,
        name: "some fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 4,
        name: "some fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },

    ],
    "Member": [
        {
          id: 1,
          name: "Abhinav",
          year: "Final Year",
          Position: "Something",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 5,
          name: "Abhinav",
          year: "Final Year",
          Position: "Something",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 6,
          name: "Abhinav",
          year: "Final Year",
          Position: "Something",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 2,
          name: "Akhil",
          year: "Second Year",
          Position: "Executive Member",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 3,
          name: "Aditya",
          year: "Third Year",
          Position: "Club Coordinator",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 4,
          name: "Volunteer",
          year: "First Year",
          Position: "Volunteer",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        }
    ]
  }
  const { Project, Event, Member } = Data;

  return (
    <div className=' bg-mainBg'>

      {isLoading && 
            <div className='fixed z-50 bg-mainBg h-screen w-screen'>
            <iframe src="https://lottie.host/embed/ffd70ffd-82b2-4282-9a4a-184cbf67cf14/9MYlUbduoT.json" className='w-screen h-screen'></iframe>
            </div>
          }
      <Header />

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
              <Projects Projects={Project} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Events Events={Event} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/projects/:url' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Details data={Project} />
            </Suspense>
          </ErrorBoundary>} 
          />
          <Route path='/events/:url' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Details data={Event} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/members' element={
            <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => navigate('/')}
            >
            <Suspense fallback={<Loader />}>
              <Members Members={Member} />
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
