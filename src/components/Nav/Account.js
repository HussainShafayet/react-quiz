import React from 'react';
import {Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function Account() {
  return (
    <div>
      <Nav className="me-auto my-2 my-lg-0">
        <NavLink className="nav-link" to="login">Login</NavLink>
        <NavLink className="nav-link" to="signup">SignUp</NavLink>
      </Nav>
    </div>
  );
}
