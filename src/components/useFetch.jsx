import { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';

const useFetch = (ref) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const _data = await getDocs(ref);
      _data.forEach((doc) => {
        setData((prev) => [...prev, {...(doc.data())}]);
      })
    }
    getData();
  }, [])

  return [ data ];
}

export default useFetch;
