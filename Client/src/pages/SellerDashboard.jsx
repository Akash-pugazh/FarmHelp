import InfoCard from '../component/seller/dashboard/InfoCard'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { MdAttachMoney } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'

const columns = [
  { field: 'serialNo', headerName: 'S.NO', width: 70 },
  { field: 'productId', headerName: 'PRODUCT ID', width: 130 },
  { field: 'productName', headerName: 'PRODUCT NAME', width: 130 },
  {
    field: 'currentPrice',
    headerName: 'CURRENT PRICE',
    type: 'number',
    width: 130,
  },
  {
    field: 'totalStock',
    headerName: 'TOTAL STOCK',
    type: 'string',
    width: 130,
  },
  {
    field: 'inStock',
    headerName: 'IN STOCK',
    type: 'string',
    width: 100,
  },
]

const rows = [
  {
    id: 1,
    serialNo: 1,
    productId: 1245,
    productName: 'Cabbage',
    currentPrice: 40,
    totalStock: '230Kg',
    inStock: '120Kg',
  },
  {
    id: 2,
    serialNo: 2,
    productId: 3421,
    productName: 'Carrots',
    currentPrice: 70,
    totalStock: '160Kg',
    inStock: '120Kg',
  },
  {
    id: 3,
    serialNo: 3,
    productId: 5432,
    productName: 'Corn',
    currentPrice: 120,
    totalStock: '20Kg',
    inStock: '5Kg',
  },
  {
    id: 4,
    serialNo: 4,
    productId: 5231,
    productName: 'Onion',
    currentPrice: 40,
    totalStock: '300Kg',
    inStock: '90Kg',
  },
  {
    id: 5,
    serialNo: 5,
    productId: 6523,
    productName: 'Beans',
    currentPrice: 35,
    totalStock: '110Kg',
    inStock: '35Kg',
  },
  {
    id: 6,
    serialNo: 6,
    productId: 1246,
    productName: 'Broccoli',
    currentPrice: 60,
    totalStock: '70Kg',
    inStock: '15Kg',
  },
  {
    id: 7,
    serialNo: 7,
    productId: 7423,
    productName: 'Potatoes',
    currentPrice: 20,
    totalStock: '200Kg',
    inStock: '35Kg',
  },
  {
    id: 8,
    serialNo: 8,
    productId: 3254,
    productName: 'Radish',
    currentPrice: 80,
    totalStock: '170Kg',
    inStock: '70Kg',
  },
  {
    id: 9,
    serialNo: 9,
    productId: 1285,
    productName: 'Tomatoes',
    currentPrice: 200,
    totalStock: '200Kg',
    inStock: '35Kg',
  },
]

const SellerDashboard = () => {
  const data = JSON.parse(localStorage.getItem('data'))
  return (
    <main className="w-full h-full pt-2 px-2 flex">
      <div className="w-full flex flex-col justify-between items-center gap-4">
        <div className="flex justify-between w-full items-center h-full ">
          <div className="flex gap-2 justify-evenly items-center">
            <div className="flex flex-col gap-2 w-[25rem]">
              <TextField
                value={data?.sellerDetails.shopName}
                id="outlined-controlled"
                label="ShopName"
                name="shopName"
                className="font-poppins"
              />
              <TextField
                value={data?.sellerDetails.location}
                id="outlined-controlled"
                label="Location"
                name="location"
                className="font-poppins"
              />
              <label
                htmlFor="isDeliveryAvailable"
                className="text-gray-600 text-sm flex justify-between items-center border-gray-300 border px-4 py-3 rounded-md hover:border-black cursor-pointer">
                <p>Delivery Available</p>
                <Switch
                  id="isDeliveryAvailable"
                  name="isDeliveryAvailable"
                  checked={data?.sellerDetails?.isDeliveryAvailable}
                />
              </label>
              <TextField
                value={data?.sellerDetails.contactNumber}
                id="outlined-controlled"
                label="Location"
                name="location"
                className="font-poppins"
              />
            </div>
            <div className="flex  justify-evenly items-center gap-4">
              <Button
                variant="outlined"
                style={{ padding: '2rem', width: '12rem' }}>
                Edit Shop
              </Button>
              <Button
                variant="outlined"
                color="success"
                style={{ padding: '2rem', width: '12rem' }}>
                Add Product
              </Button>
              <Button
                variant="outlined"
                style={{ padding: '2rem', width: '12rem' }}
                color="warning">
                Edit Product
              </Button>
            </div>
          </div>
          <div className="gap-2 flex">
            <InfoCard
              label="Products"
              icon={<MdProductionQuantityLimits />}
              value={9}
              className={'bg-blue-200 text-blue-500'}
            />
            <InfoCard
              label="Revenue"
              icon={<MdAttachMoney />}
              value={'47k'}
              className={'bg-green-200 text-green-500'}
            />
            <InfoCard
              label="Top Moving"
              icon={<BsGraphUpArrow />}
              value={4}
              className={'bg-red-200 text-red-500'}
            />
          </div>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    </main>
  )
}

export default SellerDashboard
