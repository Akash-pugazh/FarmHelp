import Login from './component/Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './Layout'
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}></Route>
      </Route>
    )
  )

  return <RouterProvider router={route} />
}

export default App
