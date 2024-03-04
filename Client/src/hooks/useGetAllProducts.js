import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useGetAllProducts = () => {
  const getAllProducts = () =>
    axios
      .get(`${import.meta.env.VITE_BASEURL}/product/user`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        return res.data.data
      })
      .catch(err => console.error(err))

  return useQuery({
    queryKey: ['UserProducts'],
    queryFn: getAllProducts,
  })
}

export default useGetAllProducts
