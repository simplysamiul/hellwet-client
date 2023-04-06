import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='text-center py-4'>
          <PropagateLoader
              size={20}
              color={"#661AE6"}
          />
    </div>
  )
}

export default Loader
