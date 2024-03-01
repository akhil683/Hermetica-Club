import React from 'react'

const AbstractDetails = ({ showAbstract, setShowAbstract, dataDetail }) => {

  return (
   <div className='w-screen h-screen top-0 flex fixed z-50 justify-center sm:items-center items-end animate-abstract'>
      <div className='w-full h-full absolute bg-bgOpacity opacity-70' onClick={() => setShowAbstract(!showAbstract)}></div>
   <div className=' max-w-[900px] p-4 pr-1 rounded-2xl h-[70vh] z-50 text-subMainText bottom-0 bg-iconBg'>
      <div className='relative'>
      <span className='text-violet font-semibold text-3xl'>Abstract</span>
      <span className=' absolute right-4 text-mainText opacity-50 hover:opacity-100 text-2xl cursor-pointer' onClick={() => setShowAbstract(!showAbstract)}>&#x2716;</span>
      </div>
      <p className=' h-[85%] overflow-y-scroll mt-4 text-justify pr-2 font-popppins'>{dataDetail?.Abstract}</p>
   </div>
</div>
  )
}

export default AbstractDetails
