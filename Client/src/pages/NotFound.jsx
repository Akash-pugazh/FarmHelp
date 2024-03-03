import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <section className=" w-full h-full flex flex-col relative py-4 items-center justify-center">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Cave Man Gif"
        className="object-cover w-max h-full"
      />
      <div className="absolute top-1/2 left-1/2 mt-56 flex items-center gap-2 -translate-x-1/2 -translate-y-1/2">
        <p>Looks like you&apos;re lost</p>
        <NavLink
          to="/"
          className="rounded-md bg-green-500 p-2 text-white font-semibold">
          Return to Home
        </NavLink>
      </div>
    </section>
  )
}

export default NotFound
