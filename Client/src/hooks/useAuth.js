import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/features/userSlice'

const useAuth = () => {
  const dispatch = useDispatch()
  const postAuthenticateUser = idToken =>
    axios
      .post(`${import.meta.env.VITE_BASEURL}/auth`, { idToken })
      .then(res => {
        dispatch(setUser(res.data.data))
        localStorage.setItem('idToken', idToken)
        return res.data.data
      })
      .catch(err => console.error(err))

  return useMutation({
    mutationFn: postAuthenticateUser,
  })
}

export default useAuth
