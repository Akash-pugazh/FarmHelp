import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useShops = () => {
  const getShops = () =>
    axios
      .get(`${import.meta.env.VITE_BASEURL}/shop/`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        return res.data.data
      })
      .catch(err => console.error(err))

  return useQuery({
    queryKey: ['Shops'],
    queryFn: getShops,
  })
}

export default useShops
