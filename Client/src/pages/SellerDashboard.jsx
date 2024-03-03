// import InfoCard from '../component/seller/dashboard/InfoCard'
// import { MdProductionQuantityLimits } from 'react-icons/md'
// import { MdAttachMoney } from 'react-icons/md'
// import { BsGraphUpArrow } from 'react-icons/bs'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import { useForm } from 'react-hook-form'
import useAddProduct from '../hooks/useAddProduct'
import useProducts from '../hooks/useProducts'
import CircularProgress from '@mui/material/CircularProgress'
import Autocomplete from '@mui/material/Autocomplete'
import useUpdateProduct from '../hooks/useUpdateProduct'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const columns = [
  { field: 'serialNo', headerName: 'S.NO', width: 70 },
  { field: 'productId', headerName: 'PRODUCT ID', width: 130 },
  { field: 'name', headerName: 'PRODUCT', width: 130 },
  {
    field: 'price',
    headerName: 'PRICE(Rs)',
    width: 130,
  },
  {
    field: 'totalStock',
    headerName: 'STOCK(Kg)',
    width: 150,
  },
  {
    field: 'inStock',
    headerName: 'INSTOCK(Kg)',
    width: 150,
  },
]
const SellerDashboard = () => {
  const { reset } = useForm()
  const { data: products, isLoading } = useProducts()
  console.log(products)
  products?.forEach((product, index) => {
    product.id = product._id
    product.serialNo = index + 1
  })

  const [addOpen, setAddOpen] = React.useState(false)
  const handleAddOpen = () => setAddOpen(true)
  const handleAddClose = () => setAddOpen(false)

  const [editOpen, setEditOpen] = React.useState(false)
  const handleEditOpen = () => setEditOpen(true)
  const handleEditClose = () => setEditOpen(false)

  const [editSearchOpen, setEditSearchOpen] = React.useState(false)
  const handleEditSearchOpen = () => setEditSearchOpen(true)
  const handleEditSearchClose = () => setEditSearchOpen(false)

  const [inputValue, setInputValue] = React.useState('')

  const [editSearchValue, setEditSearchValue] = React.useState(
    (products && products[0]?.name) || ''
  )
  const addProductMutation = useAddProduct(reset, handleAddClose)

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress color="secondary" />
      </div>
    )
  }
  return (
    <main className="w-full h-full flex gap-2 p-2">
      <section className="w-[50%] h-full flex gap-2 flex-col justify-center">
        <div className="flex gap-2 items-center justify-end">
          <Button
            variant="outlined"
            color="success"
            style={{ padding: '1rem', width: '12rem' }}
            onClick={handleAddOpen}>
            Add Product
          </Button>
          <ProductForm
            type="add"
            openState={addOpen}
            closeFn={handleAddClose}
            apiCallMutateFn={addProductMutation}
          />
          <Button
            variant="outlined"
            onClick={handleEditSearchOpen}
            style={{ padding: '1rem', width: '12rem' }}>
            Edit Product
          </Button>

          {editOpen && (
            <ProductForm
              openState={editOpen}
              closeFn={handleEditClose}
              type="edit"
              editItem={products?.find(product => product.name === inputValue)}
            />
          )}
          <React.Fragment>
            <Dialog
              className="bg-black"
              open={editSearchOpen}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleEditSearchClose}
              aria-describedby="alert-dialog-slide-description">
              <div className="w-[30rem] p-4 flex flex-col gap-4">
                <Autocomplete
                  value={editSearchValue}
                  onChange={(event, newValue) => {
                    setEditSearchValue(newValue)
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                  }}
                  id="controllable-states-demo"
                  options={products?.map(product => product.name) || ''}
                  sx={{ width: 300 }}
                  renderInput={params => (
                    <TextField {...params} label="Search Product to Edit..." />
                  )}
                />
                <Button
                  variant="outlined"
                  className="h-12"
                  type="submit"
                  fullWidth
                  onClick={() => {
                    handleEditOpen()
                    handleEditSearchClose()
                  }}>
                  Edit
                </Button>
              </div>
            </Dialog>
          </React.Fragment>
        </div>
        <div className="w-full border border-green-400 py-4 pl-2">
          <h1 className="text-lg">Your Products</h1>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </section>
      <section className="overflow-scroll h-full w-[50%]">
        <section className="bg-purple-400 h-[200%]">
          <div></div>
        </section>
      </section>
    </main>
  )

  // return (
  //   <main className="w-full h-full pt-2 px-2 flex">
  //     <div className="w-full flex flex-col justify-between items-center gap-4">
  //       <div className="flex justify-between w-full items-center h-full ">
  //         {/* <div className="flex gap-2 justify-evenly items-center">
  //           <div className="flex  justify-evenly items-center gap-4">
  //             <Button
  //               variant="outlined"
  //               color="success"
  //               style={{ padding: '2rem', width: '12rem' }}>
  //               Add Product
  //             </Button>
  //             <Button
  //               variant="outlined"
  //               style={{ padding: '2rem', width: '12rem' }}>
  //               Edit Product
  //             </Button>
  //           </div>
  //         </div> */}
  //         {/* <div className="gap-2 flex">
  //           <InfoCard
  //             label="Products"
  //             icon={<MdProductionQuantityLimits />}
  //             value={9}
  //             className={'bg-blue-200 text-blue-500'}
  //           />
  //           <InfoCard
  //             label="Revenue"
  //             icon={<MdAttachMoney />}
  //             value={'47k'}
  //             className={'bg-green-200 text-green-500'}
  //           />
  //           <InfoCard
  //             label="Top Moving"
  //             icon={<BsGraphUpArrow />}
  //             value={4}
  //             className={'bg-red-200 text-red-500'}
  //           />
  //         </div> */}
  //       </div>
  //       <div style={{ height: 400, width: '100%' }}>
  //         <DataGrid
  //           rows={rows}
  //           columns={columns}
  //           initialState={{
  //             pagination: {
  //               paginationModel: { page: 0, pageSize: 5 },
  //             },
  //           }}
  //           pageSizeOptions={[5, 10]}
  //         />
  //       </div>
  //     </div>
  //   </main>
  // )
}

function ProductForm({ type, openState, closeFn, editItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      productId: editItem?.productId || '',
      productName: editItem?.name || '',
      price: editItem?.price || '',
      stock: editItem?.totalStock || '',
    },
  })
  const addProductMutation = useAddProduct(reset, closeFn)
  const updateProductMutation = useUpdateProduct(reset, closeFn, editItem?._id)
  let onSubmit
  if (type.toLowerCase() === 'add') {
    onSubmit = data => addProductMutation.mutate(data)
  } else {
    onSubmit = data => updateProductMutation.mutate(data)
  }
  return (
    <React.Fragment>
      <Dialog
        className="bg-black"
        open={openState}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeFn}
        aria-describedby="alert-dialog-slide-description">
        <section className="p-8">
          <h1 className="pb-4 text-lg font-poppins text-gray-700">
            {type.toLowerCase() === 'add' ? 'Add Product' : 'Edit Product'}
          </h1>
          <section className="w-[30rem]">
            <form
              className="flex gap-4 flex-col"
              onSubmit={handleSubmit(onSubmit)}>
              <TextField
                id="outlined-controlled"
                label="Product Id"
                name="Product Id"
                placeholder="Unique Product Id here"
                fullWidth
                className="font-poppins"
                {...register('productId', {
                  required: 'Product Id is required',
                })}
              />
              <TextField
                id="outlined-controlled"
                label="Product Name"
                name="Product Name"
                placeholder="Enter Product Name"
                fullWidth
                className="font-poppins"
                {...register('productName', {
                  required: 'Product Name is required',
                })}
              />
              <TextField
                id="outlined-controlled"
                label="Price"
                name="Price"
                placeholder="Price in Rs"
                fullWidth
                className="font-poppins"
                {...register('price', {
                  required: 'Price is required',
                })}
              />
              <TextField
                id="outlined-controlled"
                label="Stock"
                name="Stock"
                placeholder="Stock in Kg"
                fullWidth
                className="font-poppins"
                {...register('stock', {
                  required: 'Stock is required',
                })}
              />
              <Button
                className="h-12"
                disabled={Object.keys(errors).length > 0}
                variant="outlined"
                color="success"
                type="submit">
                {type.toLowerCase() === 'add' ? 'Add Product' : 'Save Changes'}
              </Button>
            </form>
          </section>
        </section>
      </Dialog>
    </React.Fragment>
  )
}

export default SellerDashboard
