import React from 'react'
import CreateTask from '../views/pages/CreateTask/CreateTask'
import { Link, Outlet } from 'react-router-dom'
import Body from '../routes/Body'

const TheLayout = () => {
  return (
    <>
      {/* shared contenr */}
      <Body /> {/* all changeable content */}
    </>
  )
}

export default TheLayout
