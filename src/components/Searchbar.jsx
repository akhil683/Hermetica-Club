import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const Searchbar = ({ onSearchChange, Placeholder }) => {


  return (
      <div className='text-center m-auto w-[350px] sm:w-[500px] flex center group duration-200 hover:scale-110'>
      <IoMdSearch 
        style={{marginLeft: "1rem", marginTop: "0.5rem", position: "absolute"}}
        className=' text-violet text-2xl' 
        />
      <input 
        id='search'
        type="text"  
        onChange={(e) => onSearchChange(e)}
        className=' py-2 px-12 rounded-full w-full sm:w-[500px] bg-iconbgHover outline-none border-iconbgHover border focus:border-subMainText'
        placeholder={`Search ${Placeholder}`}
        />
        </div>
  )
  
}

export default Searchbar
