import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Preloader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-primary'>
          <ScaleLoader
              size={150}
              color={"#661AE6"}
          />
    </div>
  )
}

export default Preloader
