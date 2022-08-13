import React from 'react';
// import style from "../../styles/modules/Nav.module.css";
import { Navbar,Nav,Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Account from './Account';

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
            <NavLink className="navbar-brand" to="/">Quiz App</NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink className="nav-link" to="/">Dashboard</NavLink>
            </Nav>
            <Account />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
