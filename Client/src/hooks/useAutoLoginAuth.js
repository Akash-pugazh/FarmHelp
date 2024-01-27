import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/features/userSlice'

const useAutoLoginAuth = () => {
  const dispatch = useDispatch()
  const idToken = localStorage.getItem('idToken')

  const getUserAutoLoginAuth = async () => {
    if (idToken) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASEURL}/auth`,
          { idToken }
        )
        dispatch(setUser(response.data.data))
        return response.data.data
      } catch (error) {
        // Handle error if needed
        console.error(error)
        throw error
      }
    }

    // If there's no idToken, return a default value (empty object, null, etc.)
    return null
  }

  // Enable the query only if idToken is present
  const { data, ...rest } = useQuery({
    queryKey: ['User'],
    queryFn: getUserAutoLoginAuth,
    enabled: !!idToken, // Enable the query only if idToken is present
  })

  return { data, ...rest }
}

export default useAutoLoginAuth
