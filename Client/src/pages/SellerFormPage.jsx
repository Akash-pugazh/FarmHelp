import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAddShop from '../hooks/useAddShop'

const SellerFormPage = () => {
  const navigate = useNavigate()
  const addShop = useAddShop(navigate)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    addShop.mutate(data)
  }

  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className="flex flex-col gap-3 w-full px-10">
        <h5 className="text-xl font-medium uppercase text-gray-600 border-2 p-4 rounded-md">
          Seller Details
        </h5>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-controlled"
            label="ShopName"
            name="shopName"
            className="font-poppins"
            fullWidth
            {...register('shopName', { required: 'Shop Name is required' })}
          />
          {errors.shopName && (
            <p className="text-red-500 text-xs">
              {errors.contactNumber.message}
            </p>
          )}
          <TextField
            id="outlined-controlled"
            label="Location"
            name="location"
            className="font-poppins"
            fullWidth
            {...register('location', { required: 'Location is required' })}
          />
          {errors.location && (
            <p className="text-red-500 text-xs">
              {errors.contactNumber.message}
            </p>
          )}
          <label
            htmlFor="isDeliveryAvailable"
            className="text-gray-600 text-sm flex justify-between items-center border-gray-300 border px-4 py-3 rounded-md hover:border-black cursor-pointer">
            <p>Delivery Available</p>
            <Switch
              id="isDeliveryAvailable"
              name="isDeliveryAvailable"
              {...register('isDeliveryAvailable')}
            />
          </label>
          <TextField
            id="outlined-controlled"
            label="Contact"
            name="contactNumber"
            className="font-poppins"
            fullWidth
            {...register('contactNumber', {
              required: 'Contact Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit contact number',
              },
            })}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs">
              {errors.contactNumber.message}
            </p>
          )}
          <Button
            disabled={Object.keys(errors).length > 0}
            type="submit"
            variant="outlined"
            fullWidth
            className="font-poppins"
            style={{ padding: '0.8rem' }}>
            Submit
          </Button>
        </form>
      </section>
    </main>
  )
}

export default SellerFormPage
