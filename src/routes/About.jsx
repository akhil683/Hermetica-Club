import React from 'react'
import FramerReveal from '../components/FramerReveal';

const About = () => {

  return (
    <div className='m-4 max-sm:mx-8'>
      
      <FramerReveal>
        <h1 className='mb-6 text-4xl text-center'>
          Team <span className='text-violet'>Hermetica</span>
        </h1>
        <p className='text-justify text-subMainText max-w-[800px] m-auto'>
        Team Hermetica, was established as the departmental team of Chemical Engineering, at the National Institute of Technology, Hamirpur in the year 2014. <br /> <br />
        "We react to what matters" to nurture adroit intellect in the field of Chemical Engineering. We play an important role in emergent and planned development by conducting advanced research in splendid way. <br /> <br />
        We provide as a venue for continuing technological and non-technical ideas. TeamHermetica collaborates on initiatives such as bladeless wind turbine, squidbin, natural pesticide, passive cooler and many more projects to with the use of modish technologies. <br /> <br />
        Along with projects, we had enthralling and wonderful activities like chem-e-car, vaccum gun, aqua rocket which gives plateform to young ones to showcase their innovative ideas, and conducting seminars and exhibitions that give students with a variety of possibilities to enlighten their intriguing minds.
        </p>
      </FramerReveal>
      <FramerReveal>
        <div className='my-12'>
        <iframe className='m-auto max-sm:w-full border border-iconbgHover max-sm:h-[250px]' width="560" height="315" src="https://www.youtube.com/embed/UzC3rqu9Ysg?si=3OVjG3JlqZgzdZO1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
        " allowFullScreen></iframe>
        </div>
        

      </FramerReveal>
    </div>
  )
}

export default About
