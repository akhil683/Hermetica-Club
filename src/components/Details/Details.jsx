import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getDocs, addDoc } from 'firebase/firestore';

import FramerReveal from '../FramerReveal';
import Img from '../../assets/profile.jpg';
import ReactStars from 'react-stars';
import Reviews from './Reviews';
import Skeleton from '../Skeleton';
import Swal from 'sweetalert2';
import AbstractDetails from './AbstractDetails';
import { ReviewsRef } from '../../utils/firebase.utils';

const Details = ({ dataRef }) => {
  
  const { url } = useParams();

  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showAbstract, setShowAbstract ] = useState(false);

  const dataDetail = data?.find(data => data.url == url);

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

  const initialForm = {
    Reviewer: "",
    Suggestions: "",
    name: dataDetail?.name,
    rating: 4,
    timestamp: new Date().getTime(),
  }
  const [ formData, setFormData ] = useState(initialForm)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await addDoc(ReviewsRef, formData)
      Swal.fire({
        title: 'Done',
        text: 'Review sent successfully !',
        icon: 'success',
        buttons: false,
        timer: 2000
      })
      setFormData(initialForm)
    } catch (e) {
      alert("Error, Please try again");
      console.log(e.message);
    } 
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
      {showAbstract&&
        <AbstractDetails showAbstract={showAbstract} setShowAbstract={setShowAbstract} dataDetail={dataDetail} />
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
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col mx-4 sm:mx-auto max-w-[600px] gap-4 text-iconBg'>
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
          onChange={(e) => setFormData({...formData, Reviewer: e.target.value, name: dataDetail?.name})}
          className=' rounded-md bg-subMainText placeholder:text-bg w-full py-2 px-4 outline-none' 
          type="text" 
          placeholder='Your Name' 
        />
        <input 
          onChange={(e) => setFormData({...formData, Suggestions: e.target.value})}
          className=' rounded-md w-full py-2 bg-subMainText placeholder:text-bg px-4 outline-none' 
          type="text" 
          placeholder='Suggestions' 
        />
        <button className='bg-violet text-mainText py-2 w-full font-semibold duration-200 text-xl rounded-md' type='submit'>SUBMIT</button>
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
