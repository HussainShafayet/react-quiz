import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Route,Navigate } from 'react-router-dom';


// export default function PublicRoute({component: Component, ...rest}) {
//     const {currentUser} = useAuth();
//     return !currentUser ? (
//         <Route {...rest} >{(props)=>{
//             <Component {...props} />
//         }}</Route>
//     ) : (
//         <Navigate to="/" />
//     );
// }
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const { currentUser } = useAuth();
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        currentUser && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
