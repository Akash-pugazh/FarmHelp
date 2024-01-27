import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/features/userSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const logout = () => {
    dispatch(setUser(null))
  }
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}></GoogleLogout>
    </div>
  )
}

export default Logout
