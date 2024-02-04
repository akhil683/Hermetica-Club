import React, { useState, useEffect} from 'react';
import { getDocs } from 'firebase/firestore';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Skeleton from '../components/Skeleton';

const Works = ({ dataRef, name }) => {

  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchFilterData, setSearchFilterData] = useState([]);

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
  }, [name])

  useEffect(() => {
    const SearchFilterData = data?.filter((data) => {
      return data.name.toLowerCase().includes(searchField);
    })
    setSearchFilterData(SearchFilterData);
  }, [searchField ]);

  const onSearchChange = (e) => {
    const searchFieldValue = e.target.value.toLowerCase();
    setSearchField(searchFieldValue);
  }
// console.log(data);

  return (
      <div className='mb-12 mt-2 z-50'>
        <Searchbar 
          onSearchChange={onSearchChange} 
          Placeholder={name} 
        />
        {isLoading 
        ? (
          <div className='flex flex-wrap mt-6 justify-center gap-6'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {(searchFilterData?.length ? searchFilterData : data)?.map((project) => {
              return (
              <Card data={project} name={name} key={project.name} />
              )})}
          </div>
        )}
      </div>
  )
}

export default Works;
