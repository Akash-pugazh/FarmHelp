import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <main>
      <h2 className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl">
        Unexpected error occured 😥
        <br />
        {error.message}
      </h2>
    </main>
  )
}

export default ErrorPage
