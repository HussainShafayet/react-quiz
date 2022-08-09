import React from 'react';
// import style from "../../styles/modules/Nav.module.css";
import { Navbar,NavLink,Nav,Container } from 'react-bootstrap';
import Account from './Account';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">quiz</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink to="/">Dashboard</NavLink>
              <NavLink >About</NavLink>
            </Nav>
            <Account />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
