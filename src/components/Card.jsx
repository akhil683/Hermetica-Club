import React from 'react';
import { Link } from 'react-router-dom'

import ProjectImg from '../assets/profile.jpg';

const Card = ({ data, name }) => {

  return (
    <Link to={`/${name}/${data.url}`}>
      <div className='w-[320px] h-[320px] p-4 hover:bg-subMainText rounded-full overflow-hidden'>
        <img src={ProjectImg} alt="" className='relative h-full w-full object-cover rounded-full scale-125 hover:scale-100 duration-500' />
      </div>
      <h4 className='text-xl text-center mt-4 py-2 uppercase'>{data.name}</h4>
    </Link>
  )
}

export default Card;
