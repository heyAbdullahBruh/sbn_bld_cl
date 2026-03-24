import React from 'react'
import { Navigate, Outlet } from 'react-router';
// import { LogInContext } from '../../App';

function PrivateRoute({loginAuth}) {
    // const [loginAuth]=useContext(LogInContext);

    return loginAuth ?  <Outlet/> :<Navigate to={'/auth'} replace={true}/> ;
};

export default PrivateRoute;