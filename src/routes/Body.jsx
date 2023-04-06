import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../views/pages/Login/Login'
import Preloader from '../views/custome/Preloader'

// code spliting
const Dashboard = React.lazy(() => import('../views/pages/Dashboard/Dashboard'));
const CreateTask = React.lazy(() => import('../views/pages/CreateTask/CreateTask'));
const ShowAllTasks = React.lazy(() => import('../views/pages/ShowAllTasks/ShowAllTasks/ShowAllTasks'));

const Body = () => {
  return (
    <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/' element={<Dashboard />}>
              <Route index element={<ShowAllTasks />} />
              <Route path='addtask' element={<CreateTask />} />
          </Route>
      </Routes>
    </Suspense>
  )
}

export default Body;
