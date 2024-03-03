import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

const useUpdateUser = navigateTo => {
  const patchUpdateUser = isSeller =>
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/user/update/${
          JSON.parse(localStorage.getItem('data'))?._id
        }`,
        {
          isSeller,
        }
      )
      .then(res => {
        if (isSeller) {
          navigateTo('/sellerregister')
        } else {
          axios
            .patch(
              `${import.meta.env.VITE_BASEURL}/user/update/${
                JSON.parse(localStorage.getItem('data'))?._id
              }`,
              {
                isConfiguredDetails: true,
              }
            )
            .then(res => {
              if (res.status === 200) {
                localStorage.setItem('data', JSON.stringify(res.data.data))
                navigateTo('/user/home')
              }
            })
        }

        res.data.data
      })
      .catch(err => console.error(err))

  return useMutation({
    mutationFn: patchUpdateUser,
  })
}

export default useUpdateUser
