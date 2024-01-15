import React from 'react'

const About = () => {
  return (
    <div className='m-8 max-sm:mx-8'>
      <h1 className='mb-6 text-4xl text-center'>
        Team <span className='text-violet'>Hermetica</span>
      </h1>
      <p className='text-justify text-subMainText max-w-[800px] m-auto'>
      Hermetica, the chemical engineering club of National Institute of Technology Hamirpur, is more than just a group of students bound by their love for chemistry. We are a passionate collective of alchemists, transforming the raw materials of knowledge and creativity into groundbreaking solutions for tomorrow's world. Our motto, "From Lab to Life," reflects our unwavering commitment to bridging the gap between theoretical knowledge and practical application. We believe that chemical engineering is not just about manipulating molecules, but about harnessing their potential to solve real-world problems and shape a better future. We are thrilled to be participating in Nimbus, the college fest, and we see it as an incredible opportunity to showcase our talent, connect with fellow engineering enthusiasts, and learn from the best. We are eager to compete in the exciting challenges, share our knowledge and ideas, and leave a lasting impression on the Nimbus community. If you share our passion for chemical engineering and our vision for a brighter future, we invite you to join the Hermetic circle. We welcome students from all backgrounds and disciplines, for in diversity lies the true strength of innovation.
      </p>
      <div className='my-12'>
      <iframe className='m-auto max-sm:w-full border border-iconbgHover max-sm:h-[250px]' width="560" height="315" src="https://www.youtube.com/embed/rmcBCYoNbaQ?si=sllK3CjaJ9YYEF-D" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
      " allowFullScreen></iframe>
      {/* encrypted-media; gyroscope; picture-in-picture; web-share */}
      </div>
    </div>
  )
}

export default About
