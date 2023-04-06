import { Navigate, Outlet, useLocation } from "react-router-dom";
import React, { useContext } from 'react'
import PreLoader from "../custom/PreLoader";

const PrivateRoute = ({ children }) => {
         const { user, loading } = useContext(AuthContext);
         const location = useLocation();
    if(isLoading){
        return <PreLoader />
    }

 return (
                user.email ? <Outlet />
                : <Navigate to="/login" replace state = {{from : location}} />
        )
   
};

export default PrivateRoute;
