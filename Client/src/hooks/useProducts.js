import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useProducts = () => {
  const getProducts = () =>
    axios
      .get(`${import.meta.env.VITE_BASEURL}/product/`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        return res.data.data
      })
      .catch(err => console.error(err))

  return useQuery({
    queryKey: ['Products'],
    queryFn: getProducts,
    refetchOnMount: true,
  })
}

export default useProducts
