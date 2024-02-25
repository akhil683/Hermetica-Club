import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getDocs, setDoc } from 'firebase/firestore';

import FramerReveal from '../FramerReveal';
import Img from '../../assets/profile.jpg';
import ReactStars from 'react-stars';
import Reviews from './Reviews';
import Skeleton from '../Skeleton';

const Details = ({ dataRef }) => {
  
  const { url } = useParams();

  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showAbstract, setShowAbstract ] = useState(false);

  const dataDetail = data?.find(data => data.url == url);

  const [ formData, setFormData ] = useState({
    Reviewer: "",
    Suggestions: "",
    name: dataDetail?.name,
    rating: 4,
    timestamp: '12:00PM',
  })

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='mb-12 mt-4 font-popppins'>
      {isLoading 
      ?
        <div className='w-screen flex justify-center'>
          <Skeleton />
        </div>
      :
      <>

      {/* Abstract Details  */}
      {showAbstract&&
        <div className='w-screen h-screen top-0 flex fixed z-50 justify-center sm:items-center items-end animate-abstract'>
          <div className='w-full h-full absolute bg-bgOpacity opacity-70' onClick={() => setShowAbstract(!showAbstract)}></div>
        <div className=' max-w-[900px] p-2 rounded-2xl h-[60vh] z-50 bg-mainText bottom-0 text-mainBg'>
          <div className='relative'>
            <span className='text-violet font-semibold text-3xl'>Abstract</span>
            <span className=' absolute right-4 text-mainBg opacity-50 hover:opacity-100 text-2xl cursor-pointer' onClick={() => setShowAbstract(!showAbstract)}>&#x2716;</span>
          </div>
            <p className=' h-[85%] overflow-y-scroll mt-4 text-justify pr-2 font-popppins'>{dataDetail?.Abstract}</p>
        </div>
      </div>
      }

      {/* Details page  */}
      <h3 className='text-violet text-2xl sm:text-3xl px-6 text-center mb-12'>{dataDetail?.name}</h3>
      <div className='flex mx-4 flex-wrap gap-12 justify-center'>
        <div className='relative sm:w-[350px] shadow-iconBg duration-300 shadow-2xl w-full hover:opacity-90 sm:h-[400px] h-[450px] rounded-xl overflow-hidden '>
          <img src={Img} alt="" className=' w-full h-full object-cover rounded-lg' />
        </div>
        <div className='sm:max-w-[700px] w-full font-montserrat'>
          <p className='text-xl'>Proposed By: <a href='#' className=''>{dataDetail?.ProposedBy}</a> </p>
          <ReactStars 
            count={5}
            value={0}
            color1='#ffd700'
            size={20}
            half={true}
            edit={true}
          />
          <p className=' text-subMainText text-justify text-md mt-4'>
            {dataDetail?.Abstract.length < 800 
            ? dataDetail?.Abstract
            : <>
                {`${dataDetail?.Abstract.slice(0,800)}...`}
                <span 
                  onClick={() => setShowAbstract(!showAbstract)}
                  className=' underline text-violet cursor-pointer opacity-90 hover:opacity-100' >
                  Read more
                </span>
             </>
          } 
          </p>
          <p className='mt-6 mb-2 text-lg'>ConstructedBy : {dataDetail?.constructedBy}</p>
          <p className='text-lg'>Volunteer : {dataDetail?.Volunteer}</p>
        </div>
      </div>

    <FramerReveal>
      <div className='my-12 py-6 text-center'>
      <form className='flex flex-col mx-4 sm:mx-auto max-w-[600px] gap-4 text-iconBg' onSubmit={handleSubmit}>
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
        <input 
        onChange={(e) => setFormData({...formData, Reviewer: e.target.value})}
          className=' rounded-md w-full py-2 px-4 outline-none' 
          type="text" 
          placeholder='Your Name' 
        />
        <input 
          onChange={(e) => setFormData({...formData, Suggestions: e.target.value})}
          className=' rounded-md w-full py-2 px-4 outline-none' 
          type="text" 
          placeholder='Suggestions' 
        />
        <button className='bg-violet text-mainText py-2 font-semibold duration-200 text-xl rounded-md' type='submit'>SUBMIT</button>
      </form>
      </div>
    </FramerReveal>

    <FramerReveal>
      <Reviews dataDetail={dataDetail?.name} />
    </FramerReveal>
      </>
      }
      
    </div>
  )
}

export default Details
