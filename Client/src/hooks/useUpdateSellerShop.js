import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const useUpdateSellerShop = () => {
  const patchUpdateUserShop = data =>
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/user/update/${
          JSON.parse(localStorage.getItem('data'))?._id
        }/shop`,
        data
      )
      .then(res => {
        console.log(res)
        localStorage.setItem('data', JSON.stringify(res.data.data))
        toast.success('Shop updated successfully')
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })

  return useMutation({
    mutationFn: patchUpdateUserShop,
  })
}

export default useUpdateSellerShop
