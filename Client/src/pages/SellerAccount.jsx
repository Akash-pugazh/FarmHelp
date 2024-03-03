import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import useUpdateSellerShop from '../hooks/useUpdateSellerShop'
import { useForm } from 'react-hook-form'

const SellerAccount = () => {
  const data = JSON.parse(localStorage.getItem('data'))
  console.log(data)
  const updateSellerShop = useUpdateSellerShop()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shopName: data?.sellerDetails?.shopName,
      location: data?.sellerDetails?.location,
      isDeliveryAvailable: data?.sellerDetails?.isDeliveryAvailable,
      contactNumber: data?.sellerDetails?.contactNumber,
    },
  })
  const onSubmit = data => updateSellerShop.mutate(data)
  return (
    <main className="h-full w-full px-40 flex justify-center items-center ">
      <form
        className="w-full flex flex-col gap-4 border border-gray-500 p-10 rounded-md"
        onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-controlled"
          label="ShopName"
          name="shopName"
          className="font-poppins"
          {...register('shopName', { required: 'Shop Name is required' })}
        />
        {errors.shopName && (
          <p className="text-red-500 text-xs">{errors.contactNumber.message}</p>
        )}
        <TextField
          id="outlined-controlled"
          label="Location"
          name="location"
          className="font-poppins"
          {...register('location', { required: 'Location is required' })}
        />
        {errors.location && (
          <p className="text-red-500 text-xs">{errors.contactNumber.message}</p>
        )}
        <label
          htmlFor="isDeliveryAvailable"
          className="text-gray-600 text-sm flex justify-between items-center border-gray-300 border px-4 py-3 rounded-md hover:border-black cursor-pointer">
          <p>Delivery Available</p>
          <Switch
            defaultChecked={data?.sellerDetails?.isDeliveryAvailable}
            id="isDeliveryAvailable"
            name="isDeliveryAvailable"
            {...register('isDeliveryAvailable')}
          />
        </label>
        <TextField
          id="outlined-controlled"
          label="Location"
          name="location"
          className="font-poppins"
          {...register('contactNumber', {
            required: 'Contact Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Please enter a valid 10-digit contact number',
            },
          })}
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-xs">{errors.contactNumber.message}</p>
        )}
        <Button
          className="h-12"
          variant="outlined"
          disabled={Object.keys(errors).length > 0}
          type="submit">
          Update
        </Button>
      </form>
    </main>
  )
}

export default SellerAccount
