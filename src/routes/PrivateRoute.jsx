import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return <Navigate to='/' replace={true}></Navigate>
    }

    return children;
};

export default PrivateRoute;