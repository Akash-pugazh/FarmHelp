import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
  const { userInfo } = useSelector(state => state.auth)
  return userInfo && userInfo.isAdmin ? (
    <main className="pl-26">
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" replace />
  )
}
export default AdminRoute
