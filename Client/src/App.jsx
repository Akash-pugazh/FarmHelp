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
        <Route path="sellerdashboard" element={<SellerDashboard />} />
        <Route path="logout" element={<LogoutPage />} />
        {/* <Route path="user" element={<UserLayout />}>
          <Route index element={<UserDashboardPage />} />
        </Route>
        <Route path="seller" element={<SellerLayout />}>
          <Route index element={<SellerDashboardPage />} />
          <Route path="form" element={<SellerFormPage />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={route} />
}

export default App
