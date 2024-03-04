import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const useAddShop = navigateTo => {
  const postAddShop = data =>
    axios
      .post(`${import.meta.env.VITE_BASEURL}/shop`, data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        toast.success('Shop Created successfully')
        axios
          .patch(
            `${import.meta.env.VITE_BASEURL}/user/update/${
              JSON.parse(localStorage.getItem('data'))._id
            }`,
            {
              isConfiguredDetails: true,
            }
          )
          .then(res => {
            localStorage.setItem('data', JSON.stringify(res.data.data))
            navigateTo('/')
          })
      })
      .catch(err => console.error(err.response.data.message))

  return useMutation({
    mutationFn: postAddShop,
  })
}

export default useAddShop
