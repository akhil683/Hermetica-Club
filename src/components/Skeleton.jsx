import React from 'react'

const Skeleton = () => {
  return (
    <div className='h-[363px] animate-pulse-fast '>
    <div className='w-[300px] h-[320px] mb-[8px] bg-iconbgHover rounded-2xl'></div>
    <div className='w-[200px] h-[35px] rounded-2xl bg-iconbgHover'></div>
  </div>
  )
}

export default Skeleton;
