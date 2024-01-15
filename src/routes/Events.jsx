import React, { useState, useEffect } from 'react';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

const Events = ({ Events }) => {

  const [searchField, setSearchField] = useState("");
  const [searchFilterData, setSearchFilterData] = useState([]);

  useEffect(() => {
    const SearchFilterData = Events.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    })
    setSearchFilterData(SearchFilterData);
  }, [searchField ]);

  const onSearchChange = (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  }

  return (
      <div className='mb-12 mt-2'>
        <Searchbar 
          onSearchChange={onSearchChange} 
          Placeholder="Events"
        />
        {/* <h2 className='text-center text-5xl mb-12'><span className='text-violet'>Team</span> Projects</h2> */}
        <div className='flex flex-wrap justify-center gap-6 mt-6'>
          {searchFilterData.map((event) => {
            return (
              <Card data={event} name="events" key={event.id} />
              )})}
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      </div>
  )
}

export default Events;
