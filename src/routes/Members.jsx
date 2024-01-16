import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { membersRef } from '../utils/firebase.utils';

import MemberCard from '../components/MemberCard';
import Skeleton from '../components/Skeleton';

const Members = () => {
  const [data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const defaultMembers = data.filter(member => member.Year === "Final Year");
  const [ filteredMembers, setFilteredMembers ] = useState(defaultMembers);

  const handleClick = (year) => {
    const filteredMembers = data.filter(member => member.Year === year);
    setFilteredMembers(filteredMembers);
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(membersRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data()), id: doc.id}]);
      })
      setIsLoading(false);
    }
    getData();
  }, [])
  
  return (
    <div className='mt-4 mb-12'>

        <div className='flex flex-wrap mx-4 -mt-16 items-center sm:gap-4 gap-2 max-sm:text-xs font-montserrat fixed z-30'>
          <button onClick={() => handleClick("Final Year")} className='p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4'>Final Year</button>
          <button onClick={() => handleClick("Third Year")} className='p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4'>3rd Year</button>
          <button onClick={() => handleClick("Second Year")} className='p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4'>2nd Year</button>
          <button onClick={() => handleClick("First Year")} className='p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4'>1st Year</button>
        </div>

        {isLoading 
          ? <div className='flex flex-wrap justify-center nt-16 gap-4 mx-8'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          : <div className='flex flex-wrap justify-center mt-16 gap-4 mx-8'>
              {filteredMembers.map((member) => {
                return (
                  <MemberCard member={member} key={member.id} />
              )})}
            </div>
        }
      </div>
  )
}

export default Members
