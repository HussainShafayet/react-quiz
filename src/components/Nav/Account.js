import React from 'react';
import { NavLink,Nav } from 'react-bootstrap';

export default function Account() {
  return (
    <div>
      <Nav className="me-auto my-2 my-lg-0">
        <NavLink to="/">Login</NavLink>
        <NavLink>Registration</NavLink>
      </Nav>
    </div>
  );
}
