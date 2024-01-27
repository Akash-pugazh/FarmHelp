/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './component/Login'
import Logout from './component/Logout'
import useAutoLoginAuth from './hooks/useAutoLoginAuth'

const Layout = () => {
  const { data } = useAutoLoginAuth()
  console.log(data)

  const user = useSelector(state => state.user.value)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {!user ? (
        <Login />
      ) : (
        <div>
          <div>
            {user?.name}
            <img src={user?.picture} alt={`${user?.picture}`} />
          </div>
          <Logout />
        </div>
      )}
    </div>
  )
}

export default Layout
