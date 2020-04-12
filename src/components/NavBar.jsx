import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Hexad</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <div className="col">
            <Link to="/">
              <Nav.Item>Home</Nav.Item>
            </Link>
          </div>
        </Nav>
        <div className="row">
          <div className="col">
            <Link to="/library">
              <Nav.Item>Library</Nav.Item>
            </Link>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
