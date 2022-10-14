import axios from 'axios'
import {useEffect, useState} from 'react'


function Fetch(url) {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  
    useEffect(() => {
        setLoading(true);
        axios.get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url]);

  return {data, loading, error};
}

export default Fetch