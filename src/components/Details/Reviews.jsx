import React from 'react';
import ReactStars from 'react-stars';

const Reviews = () => {
  
  return (
    <div className='mx-4'>
    <h2 className='max-w-[600px] mx-auto text-3xl mb-4'>Reviews</h2>

      <div className='p-4 bg-iconbgHover rounded-xl mb-4 mx-auto max-w-[600px]'>
        <div className='flex justify-between items-center'>
          <ReactStars 
            count={5}
            value={0}
            color1='#ffd700'
            size={25}
            half={true}
            edit={false}
            />
          <p className='mr-4 text-subMainText'>12:05 PM</p>
        </div>
        <h4 className='text-xl mb-2'>Akhil Palsra</h4>
        <p className='text-subMainText'>A really good project for environment</p>
      </div>

      <div className='p-4 bg-iconbgHover rounded-xl mb-4  mx-auto max-w-[600px]'>
        <div className='flex justify-between items-center'>
          <ReactStars 
            count={5}
            value={0}
            
            // onChange={}
            color1='#ffd700'
            // color2=''
            size={25}
            half={true}
            edit={false}
            className='mr-6'
            />
          <p className='mr-4 text-subMainText'>12:05 PM</p>
        </div>
        <h4 className='text-xl mb-2'>Akhil Palsra</h4>
        <p className='text-subMainText'>A really good project for environment</p>
      </div>

      <div className='p-4 bg-iconbgHover rounded-xl  mx-auto max-w-[600px]'>
        <div className='flex justify-between items-center'>
          <ReactStars 
            count={5}
            value={0}
            
            // onChange={}
            color1='#ffd700'
            // color2=''
            size={25}
            half={true}
            edit={false}
            className='mr-6'
            />
          <p className='mr-4 text-subMainText'>12:05 PM</p>
        </div>
        <h4 className='text-xl mb-2'>Akhil Palsra</h4>
        <p className='text-subMainText'>A really good project for environment</p>
      </div>

    </div>
  )
}

export default Reviews
