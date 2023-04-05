import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import TheLayout from '../layout/TheLayout'
import CreateTask from '../views/pages/CreateTask/CreateTask'

const Routes = () => {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
        <Routes>
              <Route index element={<TheLayout />} />    
              {/* <Route path='addtask' element={<CreateTask />} /> */}
      </Routes>
    </Suspense>
  )
}

export default Routes
