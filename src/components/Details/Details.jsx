import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';

import FramerReveal from '../FramerReveal';
import Img from '../../assets/profile.jpg';
import ReactStars from 'react-stars';
import Reviews from './Reviews';
import Skeleton from '../Skeleton';
// import { projectRef } from '../../utils/firebase.utils';

const Details = ({ dataRef }) => {
  
  const { url } = useParams();

  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(dataRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data())}]);
      })
      setIsLoading(false);
    }
    getData();
  }, [])

  const dataDetail = data.find(data => data.url === url);
  console.log(data);
  console.log(dataDetail)
  const { name, ProposedBy, Abstract } = dataDetail;

  return (
    <div className='mb-12 mt-4'>
      {isLoading 
      ? <Skeleton />
      :
      <>
        <h3 className='text-violet text-3xl text-center mb-12'>{name}</h3>
      <div className='flex mx-4 flex-wrap gap-12 justify-center'>
        <div className='relative sm:w-[350px] shadow-iconBg duration-300 shadow-2xl w-full hover:opacity-90 sm:h-[400px] h-[450px] rounded-xl overflow-hidden '>
          <img src={Img} alt="" className=' w-full h-full object-cover rounded-lg' />
        </div>
        <div className='sm:max-w-[500px] w-full font-montserrat'>
          <p className='text-xl'>Proposed By: <a href='#' className=''>{ProposedBy}</a> </p>
          <ReactStars 
            count={5}
            value={0}
            color1='#ffd700'
            size={20}
            half={true}
            edit={true}
          />
          <p className=' text-subMainText text-justify text-md mt-4'>
          {Abstract}
          </p>
        </div>
      </div>

    <FramerReveal>
      <div className='my-12 py-6 text-center'>
      <form className='flex flex-col mx-4 sm:mx-auto max-w-[600px] gap-4 text-iconBg'>
        <ReactStars 
          count={5}
          value={0}
          // onChange={}
          color1='#ffd700'
          // color2=''
          size={40}
          half={true}
          edit={true}
        />
        <input className=' rounded-md w-full py-2 px-4 outline-none' type="text" placeholder='Your Name' />
        <input className=' rounded-md w-full py-2 px-4 outline-none' type="text" placeholder='Suggestions' />
        <button className='bg-violet text-mainText py-2 font-semibold duration-200 text-xl rounded-md' type='submit'>SUBMIT</button>
      </form>
      </div>
    </FramerReveal>
    
    <FramerReveal>
      <Reviews />
    </FramerReveal>
      </>
      }
      
    </div>
  )
}

export default Details
