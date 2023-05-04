import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouteChef = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRouteChef;