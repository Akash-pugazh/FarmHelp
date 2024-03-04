import { Outlet } from 'react-router-dom'

const UserMainLayout = () => {
  return (
    <main className="h-full w-full p-2">
      <Outlet />
    </main>
  )
}

export default UserMainLayout
