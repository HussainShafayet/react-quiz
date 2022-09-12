import React from 'react';
import {Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';

export default function Account() {
    const {currentUser} = 'shafayet';
    const username = currentUser ? currentUser.displayName : "";
  return (
    <div>
    {currentUser ? 
      <Nav className="me-auto my-2 my-lg-0">
        <NavLink className="nav-link" to="user">
          {username}
        </NavLink>
        <NavLink className="nav-link" to='logout'>Logout</NavLink>
      </Nav> :
      <Nav className="me-auto my-2 my-lg-0">
        <NavLink className="nav-link" to="login">Login</NavLink>
        <NavLink className="nav-link" to="signup">SignUp</NavLink>
      </Nav>}
    </div>
  );
}
