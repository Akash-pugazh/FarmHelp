import React from 'react'
import useShops from '../hooks/useShops'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { CiLocationOn } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'

const UserShops = () => {
  const { data, isLoading } = useShops()
  console.log(data)
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress color="secondary" />
      </div>
    )
  }
  return (
    <main className="w-full h-full ">
      <section className="flex gap-2">
        {data?.map((shop, index) => (
          <div key={index}>
            <ShopCard shop={shop} />
          </div>
        ))}
      </section>
    </main>
  )
}

function ShopCard(props) {
  return (
    <div className="w-max flex flex-col gap-4 border border-gray-400 rounded-xl p-4 hover:border-gray-700 hover:ease-in">
      <h1 className="text-xl font-medium uppercase">{props.shop.shopName}</h1>
      <div className="flex items-center gap-1">
        <CiLocationOn size={20} />
        {props.shop.location}
      </div>
      <div className="flex items-center gap-1">
        <IoCallOutline size={20} /> {props.shop.contactNumber}
      </div>
      <Button variant="outlined" fullWidth>
        View
      </Button>
    </div>
  )
}

export default UserShops
