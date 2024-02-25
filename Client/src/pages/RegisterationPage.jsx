import Button from '@mui/material/Button'
import useUpdateUser from '../hooks/useUpdateUser'
import { useNavigate } from 'react-router-dom'
import user from '../assets/user.svg'
import farmer from '../assets/farmer.svg'
import Tooltip from '@mui/material/Tooltip'

const RegisterationPage = () => {
  const navigateFn = useNavigate()
  const updateUserMutation = useUpdateUser(navigateFn)
  const handleUserClick = () => updateUserMutation.mutate(false)
  const handleFarmerClick = () => updateUserMutation.mutate(true)
  return (
    <div className="w-full h-full flex justify-center items-center gap-5 p-5">
      <Tooltip title="user">
        <Button
          className="h-[25rem] w-1/4 relative"
          variant="outlined"
          onClick={handleUserClick}>
          <img src={user} className="h-full scale-150 relative left-10" />
        </Button>
      </Tooltip>
      <Tooltip title="seller">
        <Button
          className="h-[25rem] w-1/4 relative"
          variant="outlined"
          onClick={handleFarmerClick}>
          <img src={farmer} className="h-full scale-125 relative left-10" />
        </Button>
      </Tooltip>
    </div>
  )
}

export default RegisterationPage
