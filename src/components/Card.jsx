import React from 'react';
import { Link } from 'react-router-dom'

import ProjectImg from '../assets/profile.jpg';
import ReactStars from 'react-stars';
import FramerReveal from './FramerReveal';

const Card = ({ data, name }) => {

  return (
    <FramerReveal>
    <Link to={`/${name}/${data.url}`} className='group hover:-translate-y-1 duration-200'>
      <div className='w-[320px] h-[320px] relative overflow-hidden duration-300 rounded-xl group-hover:shadow-2xl group-hover:shadow-iconBg max-sm:shadow-2xl max-sm:shadow-iconBg'>
        <img src={ProjectImg} alt="" className='relative h-full w-full object-cover rounded-lg duration-500' />
        <ReactStars 
          count={5}
          value={0}
          color1='#ffd700'
          size={25}
          half={true}
          edit={false}
        />
      </div>
      <ReactStars 
        count={5}
        value={0}
        color1='#ffd700'
        size={25}
        half={true}
        edit={false}
      />
      <h4 className='text-center mt-4 py-2 bg-mainText text-mainBg rounded-full mx-2 duration-200'>
        {data.name}
      </h4>
    </Link>
    </FramerReveal>
  )
}

export default Card;
 