import React, { useContext } from 'react'
import googleIcon from '../../../assets/google-icon.svg';
import { AuthContext } from '../../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {googleSIgIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location?.state?.from?.pathname || "/";
  const handelGoogleSignIn = () => {
      googleSIgIn()
      .then((result) => {
      // navigate(from, {replace: true})
    }).catch((err) => console.log(err.message))
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div onClick={handelGoogleSignIn} className='w-72 lg:w-96 flex items-center justify-center rounded-lg border-2 border-white font-serif cursor-pointer py-2'>
        <img className='w-6 mx-4' src={googleIcon} alt='googleIcon' />
        <p>CONTINUE WITH GOOGLE</p>
      </div>
    </div>
  )
}

export default Login
