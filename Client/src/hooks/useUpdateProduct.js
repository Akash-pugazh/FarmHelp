import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const useUpdateProduct = (resetFn, closeFn, prodId) => {
  const queryClient = useQueryClient()
  const patchUpdateProduct = data =>
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/product/${prodId}`,
        {
          productId: data.productId,
          name: data.productName,
          type: data.type,
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
        toast.success('Product updated successfully')
        queryClient.invalidateQueries({ queryKey: ['Products'] })
        closeFn()
        resetFn()
      })
      .catch(err => toast.error(err.response.data.message))

  return useMutation({
    mutationFn: patchUpdateProduct,
  })
}

export default useUpdateProduct
