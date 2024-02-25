import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigateFn = useNavigate()
  const authMutation = useAuth(navigateFn)
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.getAuthInstance({
        clientId,
      })
    })
  })
  const responseGoogle = res => authMutation.mutate(res.tokenId)
  return (
    <main className="w-full h-full flex justify-center items-center">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </main>
  )
}

export default LoginPage
