import { Outlet } from 'react-router-dom'

const UserMainLayout = () => {
  return (
    <main className="h-full w-full">
      <Outlet />
    </main>
  )
}

export default UserMainLayout
