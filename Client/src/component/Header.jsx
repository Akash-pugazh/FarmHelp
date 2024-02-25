import { NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import '../styles/micro5.css'
import Tooltip from '@mui/material/Tooltip'
const Header = ({ data }) => {
  console.log(data)
  const activeClass = {
    color: 'lightGreen',
    textDecoration: 'underline 2px',
    textUnderlineOffset: '4px',
  }
  return (
    <header>
      <nav className="p-2 flex items-center justify-between bg-black">
        <NavLink to=".">
          <h1 className="micro-5-regular text-5xl text-white p-2 tracking-wider">
            Farm Help
          </h1>
        </NavLink>
        <nav className="flex gap-4 items-center justify-evenly">
          {data && (
            <div>
              {data.isSeller && (
                <>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeClass : null)}
                    className="text-white px-2 py-1 font-semibold  rounded-md hover:underline hover:underline-offset-4"
                    to="sellerdashboard">
                    Dashboard
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeClass : null)}
                    className="text-white px-2 py-1 font-semibold  rounded-md hover:underline hover:underline-offset-4"
                    to="sellerperformance">
                    Performance
                  </NavLink>
                </>
              )}
              {!data.isSeller && (
                <>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeClass : null)}
                    className=" text-white px-2 py-1 font-semibold  rounded-md hover:underline hover:underline-offset-4 "
                    to="userproducts">
                    Products
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeClass : null)}
                    className=" text-white px-2 py-1 font-semibold  rounded-md hover:underline hover:underline-offset-4 "
                    to="usercart">
                    Cart
                  </NavLink>
                </>
              )}
            </div>
          )}
          <NavLink
            className="px-2 py-1 font-semibold rounded-md flex items-center justify-between gap-3"
            to={!data ? 'login' : 'logout'}>
            {data?.picture ? (
              <Tooltip title={data?.name}>
                <img
                  src={data?.picture}
                  alt="profile"
                  className="w-10 h-10 object-cover rounded-lg"
                />
              </Tooltip>
            ) : (
              <FaUser color="white" size={'1.2rem'} />
            )}
          </NavLink>
        </nav>
      </nav>
    </header>
  )
}

export default Header
