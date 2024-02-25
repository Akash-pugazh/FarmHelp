import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

const LogoutPage = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}></GoogleLogout>
    </div>
  )
}

export default LogoutPage
