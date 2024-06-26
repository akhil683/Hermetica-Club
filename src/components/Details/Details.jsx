import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';

import { doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import { ReviewsRef } from '../../utils/firebase.utils';

import ReactStars from 'react-rating-stars-component';
import Swal from 'sweetalert2';

import FramerReveal from '../FramerReveal';
import Img from '../../assets/profile.jpg';
import Reviews from './Reviews';
import Skeleton from '../Skeleton';
import AbstractDetails from './AbstractDetails';

const Details = ({ dataRef }) => {

  const { id } = useParams();

  const [ dataDetail, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showAbstract, setShowAbstract ] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _doc = doc(dataRef, id)
      const _data = await getDoc(_doc)
      setData(_data.data())
      setIsLoading(false);
    }
    getData();
  }, [])

  const initialForm = {
    Reviewer: "",
    Suggestions: "",
    name: "",
    rating: 0,
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
        timer: 2000
      })
      const ref = doc(dataRef, id)
      await updateDoc(ref, {
        rating: (formData.rating + dataDetail?.rating)/(dataDetail?.rated ? dataDetail?.rated : 1),
        rated: dataDetail?.rated + 1
      })
      setFormData(initialForm)
    } catch (e) {
      alert("Error, Please try again");
      console.log(e)
    } 
  }

  return (
    <div className='mb-12 mt-4 font-popppins z-20'>
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
      <h3 className='text-violet text-2xl z-20 sm:text-3xl relative px-6 text-center mb-12'>{dataDetail?.name}</h3>
      <div className='flex mx-4 flex-wrap gap-12 justify-center'>
        <div className='relative sm:w-[350px] shadow-iconBg duration-300 shadow-2xl w-full hover:opacity-90 sm:h-[400px] h-[450px] rounded-xl overflow-hidden '>
          <img src={dataDetail?.Image ? dataDetail?.Image : Img} alt="" className=' w-full h-full object-cover rounded-lg' />
        </div>
        <div className='sm:max-w-[700px] w-full relative font-montserrat'>
          { dataDetail.ProposedBy && 
          <p className='text-xl'>Proposed By: <a href='#' className=''>{dataDetail?.ProposedBy}</a> </p>
          }
          <ReactStars 
            count={5}
            color1='#ffd700'
            value={dataDetail?.rating/dataDetail.rated}
            size={20}
            half={true}
            edit={false}
          />
          <p className='text-subMainText text-justify text-md mt-4'>
            {dataDetail?.Abstract?.length < 800 
            ? dataDetail?.Abstract
            : <>
                {`${dataDetail?.Abstract?.slice(0,800)}...`}
                <span 
                  onClick={() => setShowAbstract(!showAbstract)}
                  className=' underline text-violet cursor-pointer opacity-90 hover:opacity-100' >
                  Read more
                </span>
             </>
          } 
          </p>
          { dataDetail.constructedBy &&
            <p className='mt-6 mb-2 text-lg'>ConstructedBy : {dataDetail?.constructedBy}</p>
          }
          { dataDetail?.Volunteer &&
            <p className='text-lg'>Volunteer : {dataDetail?.Volunteer}</p>
          }
        </div>
      </div>

    <FramerReveal>
      <div className='my-12 py-6 text-center'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col mx-4 sm:mx-auto max-w-[600px] gap-4 text-iconBg'>
        <ReactStars 
          count={5}
          value={0}
          onChange={r => setFormData({...formData, rating: r})}
          color1='#ffd700'
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
    {/* <framerreveal>
      <reviews datadetail={datadetail?.name} />
    </framerreveal> */}
      </>
      }
    </div>
  )
}

export default Details
