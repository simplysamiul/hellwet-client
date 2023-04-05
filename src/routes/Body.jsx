import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../views/pages/Dashboard/Dashboard'
import CreateTask from '../views/pages/CreateTask/CreateTask'
import ShowAllTasks from '../views/pages/ShowAllTasks/ShowAllTasks/ShowAllTasks'
import Login from '../views/pages/Login/Login'

const Body = () => {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
        <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path='alltask' element={<ShowAllTasks />} />
          <Route path='addtask' element={<CreateTask />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default Body;
