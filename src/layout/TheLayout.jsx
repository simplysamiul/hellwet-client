import React from 'react'
import CreateTask from '../views/pages/CreateTask/CreateTask'
import { Link } from 'react-router-dom'

const TheLayout = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label htmlFor="dashboard-drawer" className="btn drawer-button lg:hidden w-full bg-primary">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
        <ul className="p-4 w-80 text-white  bg-primary">
        <div className='text-white text-center my-4'>
          <div className="avatar placeholder flex justify-center items-center flex-col">
            <div className="text-neutral-content rounded-full w-16 bg-secondary">
              <span className="text-xl font-bold">S</span>
              </div>
              <h3 className='my-4 text-center text-white font-serif font-semibold text-md'>simplysamiul@gmail.com</h3>
          </div>
          </div>
          {/* <!-- Sidebar content here --> */}
          <li className='bg-secondary rounded-lg font-Poppins mt-4 p-4 cursor-pointer hover:bg-hover'><Link to="/addtask">Create Task</Link></li>
          <li className='bg-secondary rounded-lg font-Poppins mt-4 p-4 cursor-pointer hover:bg-hover'><a>Create Task</a></li>
          <li className='bg-secondary rounded-lg font-Poppins mt-4 p-4 cursor-pointer hover:bg-hover'><a>Create Task</a></li>
        </ul>
      
      </div>
</div>
  )
}

export default TheLayout
