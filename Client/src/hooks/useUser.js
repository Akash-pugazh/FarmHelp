import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const useUser = () => {
  const getUser = () =>
    axios
      .post(`${import.meta.env.VITE_BASEURL}/user/`, {
        email: JSON.parse(localStorage.getItem('data'))?.email,
      })
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data.data))
        return res.data.data
      })
      .catch(err => console.error(err))

  return useQuery({
    queryKey: ['User'],
    queryFn: getUser,
    refetchOnMount: true,
  })
}

export default useUser
