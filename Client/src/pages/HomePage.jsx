import { useState } from 'react'
import hero from '../assets/hero.svg'
import CircularProgress from '@mui/material/CircularProgress'

const HomePage = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false)
  const handleHeroLoad = () => setIsHeroLoaded(true)

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <div className="w-full h-full relative">
          {!isHeroLoaded && (
            <div className="w-full h-full flex items-center justify-center">
              <CircularProgress />
            </div>
          )}
          <img
            src={hero}
            className={`object-contain w-full h-full ${
              isHeroLoaded ? '' : 'hidden'
            }`}
            onLoad={handleHeroLoad}
            alt="Hero Display"
          />
        </div>
      </main>
    </div>
  )
}

export default HomePage
