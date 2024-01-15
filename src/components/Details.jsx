import React from 'react';
import Img from '../assets/profile.jpg';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

const Details = ({ data }) => {
  const { url } = useParams();
  const dataDetail = data.find(data => data.url === url);
  const { name, proposedBy, Abstract, image } = dataDetail;

  return (
    <div className='mb-12 mt-4'>
      <h3 className='text-violet text-4xl text-center mb-12'>{name}</h3>
      <div className='flex mx-4 flex-wrap gap-12 justify-center'>
        <div className='sm:w-[350px] w-full sm:h-[400px] h-[450px] rounded-3xl overflow-hidden '>
          <img src={Img} alt="" className=' w-full h-full object-cover' />
        </div>
        <div className='sm:max-w-[500px] w-full font-montserrat'>
          <p className='text-xl'>Proposed By: <a href='#' className=''>{proposedBy}</a> </p>
          <p className=' text-subMainText text-justify text-lg mt-4'>
          {Abstract}
          </p>
        </div>
      </div>

      <div className='my-12 py-6 text-center'>
      <form className='flex flex-col mx-4 sm:mx-auto max-w-[600px] gap-4 text-iconBg'>
        <ReactStars 
          count={5}
          value={0}
          // onChange={}
          color1='#ffd700'
          // color2=''
          size={50}
          half={true}
          edit={true}
        />
        <input className=' rounded-md w-full py-2 px-4 outline-none' type="text" placeholder='Your Name' />
        <input className=' rounded-md w-full py-2 px-4 outline-none' type="text" placeholder='Suggestions' />
        <button className=' bg-violet py-2 text-mainText text-xl rounded-md' type='submit'>SUBMIT</button>
      </form>
      </div>

      <div className='mx-4'>
        <h2 className='max-w-[600px] mx-auto text-3xl mb-4'>Reviews</h2>

          <div className='p-4 bg-iconbgHover rounded-xl mb-4 mx-auto max-w-[600px]'>
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
    </div>
  )
}

export default Details
