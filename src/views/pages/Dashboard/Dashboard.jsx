import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import { RiMenuFoldFill } from 'react-icons/ri';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
  const { logOut, user } = useContext(AuthContext);
  const handelLogout = () => {
    logOut()
      .then(() => {
      
    }).catch((err) => console.log(err.message))
  }
  return (
    <div className="drawer drawer-mobile bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* nested content */}
        <label htmlFor="dashboard-drawer" className="btn drawer-button lg:hidden w-full bg-primary justify-normal text-3xl"><RiMenuFoldFill /></label>
        <div className=''>
          <Outlet/>
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
        <ul className="p-4 w-80 text-white bg-primary lg:bg-opacity-80 flex flex-col justify-between">
          <div className=''>
            <div className='text-white text-center my-4'>
          <div className="avatar placeholder flex justify-center items-center flex-col">
            <div className="text-neutral-content rounded-full w-16 bg-secondary">
              <Link to="/" className="text-xl font-bold">S</Link>
              </div>
                <h3 className='my-4 text-center text-white font-serif font-semibold text-md'>{ user?.email}</h3>
          </div>
          </div>
          {/* <!-- Sidebar content here --> */}
          <Link to="/alltask"><li className='bg-secondary rounded-lg font-Poppins font-semibold text-lg mt-4 p-4 cursor-pointer hover:bg-hover'>All Task</li></Link>
          <Link to="/addtask"><li className='bg-secondary rounded-lg font-Poppins font-semibold text-lg mt-4 p-4 cursor-pointer hover:bg-hover'>Create Task</li></Link>
        </div>
          <div onClick={handelLogout} className='mb-4 w-full bg-white text-secondary text-center p-2 cursor-pointer hover:bg-slate-200 flex justify-center items-center rounded-lg'>
            <button className='font-bold text-xl mr-2'>Logout</button>
            <span className='text-2xl'><HiLogout/></span>
          </div>
        </ul>
      
      </div>
  </div>
  )
}

export default Dashboard
