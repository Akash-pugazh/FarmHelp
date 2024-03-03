import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const useAddProduct = (resetFn, closeFn) => {
  const queryClient = useQueryClient()
  const postAddProduct = data =>
    axios
      .post(
        `${import.meta.env.VITE_BASEURL}/product`,
        {
          productId: data.productId,
          name: data.productName,
          price: +data.price,
          totalStock: +data.stock,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      )
      .then(() => {
        toast.success('Product added successfully')
        queryClient.invalidateQueries({ queryKey: ['Products'] })
        closeFn()
        resetFn()
      })
      .catch(err => toast.error(err.response.data.message))

  return useMutation({
    mutationFn: postAddProduct,
  })
}

export default useAddProduct
