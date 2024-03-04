import useGetAllProducts from '../hooks/useGetAllProducts'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IoMdPricetag } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { MdOutlinePayment } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
const UserHome = () => {
  let { data } = useGetAllProducts()
  console.log(data)
  data = [...data, ...data, ...data]
  return (
    <main className="w-full h-full">
      <div>
        <section className="w-full h-[5%] flex justify-end">
          <div className="w-[40%] flex gap-2">
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              fullWidth
              options={data?.map(product => product.name)}
              renderInput={params => (
                <TextField {...params} label="Search Product" />
              )}
            />
            <Button variant="outlined" className="w-[30%]">
              Search
            </Button>
          </div>
        </section>
      </div>
      <div className="w-full h-full overflow-scroll">
        <section>
          <h1 className="text-2xl uppercase font-poppins font-semibold">
            Vegetable Products
          </h1>
          <section className="w-full overflow-x-scroll scroll-auto  p-4 flex gap-2">
            {data?.map(product => {
              return (
                <div key={product._id}>
                  <Product props={product} />
                </div>
              )
            })}
          </section>
        </section>
      </div>
    </main>
  )
}

function Product({ props }) {
  return (
    <Tooltip
      title={
        <React.Fragment>
          <h2 className="flex items-center justify-center gap-1 ">
            InStock : {props.inStock}Kg
          </h2>
          <h3 className="flex justify-center items-center gap-1  ">
            <IoMdPricetag /> {props.price}Rs
          </h3>
        </React.Fragment>
      }>
      <div className="w-max border-2 rounded-md border-gray-400 hover:ease-in-out hover:scale-105 transform transition-transform bg-[url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlSmMQmoGhFnckZYMqmw7jMfr6xdBRVHpsd-PrU0D1UFa3_NB0)] object-cover bg-cover bg-center relative overflow-hidden cursor-pointer">
        <div className=" p-8 flex flex-col gap-2 backdrop-blur-0 hover:backdrop-blur-sm">
          <h1 className="text-3xl text-white font-medium border-2 border-white rounded-md p-6">
            {props.name}
          </h1>
          <div className="flex flex-col py-2 items-center gap-2">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<MdOutlineShoppingCart />}
              fullWidth>
              Add To cart
            </Button>
            <Button
              variant="contained"
              endIcon={<MdOutlinePayment />}
              fullWidth>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Tooltip>
  )
}

export default UserHome
