import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    if(user === null){
       return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
    else{
        return children;
    }
};

export default PrivateRoute;