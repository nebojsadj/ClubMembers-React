import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Container fluid bg="dark">
      <Row>
        <Col xs={{ span: 12 }} className="holderNav">
          <Navbar>
            <Link to="/" className="text-light navbar-brand">
              CRUD-app
            </Link>
            <Nav className="ml-auto">
              <NavLink to="/" exact className="text-light ml-2 nav">
                Members
              </NavLink>
              <NavLink to="/new" className="text-light ml-2 nav">
                NewMember
              </NavLink>
              <NavLink to="/actions" className="text-light ml-2 nav">
                Actions
              </NavLink>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
