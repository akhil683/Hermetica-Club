import { useState, useEffect } from 'react'
import { getDocs } from 'firebase/firestore';

const useFetch = (ref) => {
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(ref);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data()), id: doc.id}]);
      })
      setIsLoading(false);
    }
    getData();
  }, [])

  return [ data ];
}

export default useFetch
