import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const useAuth = naviagateTo => {
  const postAuthenticateUser = idToken =>
    axios
      .post(`${import.meta.env.VITE_BASEURL}/auth`, { idToken })
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data.data))
        if (res.data.message.toLowerCase() === 'user created') {
          console.log('Here1')
          naviagateTo('/register')
        } else if (
          res.data.message.toLowerCase() === 'user found' &&
          !res.data.data.isConfiguredDetails
        ) {
          console.log('Here2')
          naviagateTo('/register')
        } else {
          naviagateTo('/')
        }
        return res.data
      })
      .catch(err => console.error(err))

  return useMutation({
    mutationFn: postAuthenticateUser,
  })
}

export default useAuth
