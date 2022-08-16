import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Route,Navigate,Outlet } from 'react-router-dom';


export default function PrivateRoute() {
  const { currentUser } = useAuth();
  // return currentUser ? (
  //     <Route {...rest} >{(props)=>{
  //         <Component {...props} />
  //     }}</Route>
  // ) : (
  //     <Navigate to="/login" />
  // );
    return (
        currentUser ? <Outlet /> : <Navigate to="/login" />
    );
}
