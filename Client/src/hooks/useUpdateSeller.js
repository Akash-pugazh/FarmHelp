import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const useUpdateSeller = navigateTo => {
  const patchUpdateUser = data =>
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/user/update/${
          JSON.parse(localStorage.getItem('data'))?._id
        }`,
        { sellerDetails: data, isConfiguredDetails: true }
      )
      .then(res => {
        localStorage.clear()
        localStorage.setItem('data', JSON.stringify(res.data.data))
        navigateTo('/')
      })
      .catch(err => console.error(err))

  return useMutation({
    mutationFn: patchUpdateUser,
  })
}

export default useUpdateSeller
