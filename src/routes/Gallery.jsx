import React, {useState, useEffect} from 'react'
import FramerReveal from '../components/FramerReveal'
import { galleryRef } from '../utils/firebase.utils';
import { getDocs } from 'firebase/firestore';
import Skeleton from '../components/Skeleton';

const Gallery = () => {
  
  const [ data, setData ] = useState([]);
  const [ show, setShow ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ filterData, setFilterData ] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setData([]);
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(galleryRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data())}]);
      })
      setIsLoading(false);
    }
    getData();
  }, [])

  const filterHandler = (event) => {
    const filteredData = data?.filter(data => data.Event === event)
    setFilterData(filteredData);
  }

  const controlNavbar = () => {
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrollY) {
        setShow("-translate-y-16 scale-90")
      } else {
        setShow("show");
      }
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
    window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div className='sm:mb-12'>
      <div className={`flex flex-wrap mx-4 -mt-[60px] sm:-mt-16 items-center sm:gap-4 gap-2 text-xs sm:text-sm font-montserrat fixed z-30 duration-300 ${show}`}>
        <button className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200' onClick={() => filterHandler("Nimbus")}> Nimbus</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200' onClick={() => filterHandler("Hday")}>Hermetica Day</button>
        <button  className='py-2 px-4 bg-iconbgHover rounded-full hover:bg-violet focus:bg-violet duration-200' onClick={() => filterHandler("Workshop")}>Workshops</button>
      </div>

        {isLoading 
          ? 
            <div className='flex flex-wrap justify-center mt-16 gap-4 mx-4'>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </div>
          :
            <div className='flex flex-wrap justify-center mt-16 gap-4 mx-4'>
              {(filterData.length ? filterData : data)?.map(image => {
                return (
                  <FramerReveal key={image.ImageLink}>
                    <div className='relative w-full sm:w-[330px] sm:h-[260px] border border-iconbgHover overflow-hidden group'>
                      <a href={image.ImageLink} className='absolute px-4 py-2 bg-mainText text-mainBg rounded-full bottom-2 right-4 translate-y-16 opacity-0 group-hover:opacity-90 font-semibold group-hover:translate-y-0 duration-300' target='_blank'>Download</a>
                      <img src={image.ImageLink} alt="" className='w-full h-full object-cover' />
                    </div>
                  </FramerReveal>
                )})}
              </div>
        }
      </div>
  )
}

export default Gallery
