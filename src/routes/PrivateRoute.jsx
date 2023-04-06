import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { useContext } from 'react'
import Preloader from "../views/custome/Preloader";

const PrivateRoute = ({ children }) => {
         const { user, loading } = useContext(AuthContext);
         const location = useLocation();
    if(isLoading){
        return <Preloader />
    }

 return (
                user.email ? <Outlet />
                : <Navigate to="/login" replace state = {{from : location}} />
        )
   
};

export default PrivateRoute;
