import { Outlet } from 'react-router-dom'

const SellerMainLayout = () => {
  return (
    <main className=" h-full w-full">
      <Outlet />
    </main>
  )
}

export default SellerMainLayout
