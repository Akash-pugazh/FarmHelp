import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Layout'
import RegisterationPage from './pages/RegisterationPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SellerFormPage from './pages/SellerFormPage'
import ErrorPage from './pages/ErrorPage'
import LogoutPage from './pages/LogoutPage'
import NotFound from './pages/NotFound'
import SellerDashboard from './pages/SellerDashboard'
import SellerAccount from './pages/SellerAccount'
import SellerMainLayout from './pages/SellerMainLayout'
import SellerHome from './pages/SellerHome'
import SellerPerformace from './pages/SellerPerformace'
import UserMainLayout from './pages/UserMainLayout'
import UserHome from './pages/UserHome'
import UserShops from './pages/UserShops'
import UserCart from './pages/UserCart'

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="register"
          element={<RegisterationPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="sellerregister"
          element={<SellerFormPage />}
          errorElement={<ErrorPage />}
        />
        <Route path="seller" element={<SellerMainLayout />}>
          <Route path="home" element={<SellerHome />} />
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="performance" element={<SellerPerformace />} />
          <Route path="account" element={<SellerAccount />} />
        </Route>

        <Route path="user" element={<UserMainLayout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="shops" element={<UserShops />} />
          <Route path="cart" element={<UserCart />} />
        </Route>

        <Route path="logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={route} />
}

export default App
