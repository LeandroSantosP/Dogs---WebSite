import React from 'react';
import { userContext } from '../../UserContext';
import { Route, Navigate } from 'react-router-dom';

const ProtectRoute = (props) => {
   const { login } = React.useContext(userContext);
   
   if (login === true) return <Route {...props} />
   else if (login === false) return <Navigate to="/login" />;
   else return null;
};

export default ProtectRoute;