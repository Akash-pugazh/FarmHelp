/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import { useEffect } from 'react'
import { toast, Bounce } from 'react-toastify'

const Layout = () => {
  const navigateTo = useNavigate()
  const data = JSON.parse(localStorage.getItem('data'))
  useEffect(() => {
    if (
      localStorage.getItem('data') &&
      !JSON.parse(localStorage.getItem('data'))?.isConfiguredDetails
    ) {
      toast('Redirecting in 5 seconds!', {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      })
      setTimeout(() => {
        if (!data.isConfiguredDetails) navigateTo('/register')
      }, 5000)
    }
  }, [])

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-[10.3%]">
        <Header data={data} />
      </div>
      <div className="w-full h-[83.5%]">
        <Outlet />
      </div>
      <div className="w-full h-[5%]">
        <Footer />
      </div>
    </main>
  )
}

export default Layout
