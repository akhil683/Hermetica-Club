import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { ReviewsRef } from '../../utils/firebase.utils';

import { getDocs } from 'firebase/firestore';

const Reviews = ({ dataDetail }) => {

  const [ data, setData ] = useState([]) 
  const [ isLoading, setIsLoading ] = useState(false)

  const reviewData = data.filter(data => data.name == dataDetail)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(ReviewsRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data())}]);
      })
      setIsLoading(false);
    }
    getData();
  }, [])

  return (
    <div className='mx-4'>
    <h2 className='max-w-[600px] mx-auto text-2xl mb-4'>Reviews</h2>
    {isLoading 
    ? (
        <h1> Loading...</h1>
    ): (
    reviewData.map((review) => {
        return (
    <div className='p-4 bg-iconbgHover rounded-xl mb-4 mx-auto max-w-[600px]' key={review.timestamp}>
      <div className='flex justify-between items-center'>
        <ReactStars 
          count={5}
          value={review.rating}
          color1='#ffd700'
          size={20}
          half={true}
          edit={false}
          />
        <p className='mr-4 text-sm text-subMainText'> {new Date(review?.timestamp).toDateString()} </p>
      </div>
      <h4 className='text-lg mb-2'> {review.Reviewer} </h4>
      <p className='text-subMainText text-sm'> {review.Suggestions} </p>
    </div>
    )}))}
    {reviewData.length < 1 && (
      <div className='w-full h-36 flex justify-center items-center'>
          <p className='text-xl text-subMainText'>No reviews yet...</p>
      </div>
    )}
</div>
   )}

export default Reviews
