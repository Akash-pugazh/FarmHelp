import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const authMutation = useAuth()
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        clientId,
      })
    })
  })

  const responseGoogle = res => {
    authMutation.mutate(res.tokenId)
  }
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login
