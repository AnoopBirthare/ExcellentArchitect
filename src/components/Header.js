import React from "react";
import Logo from "../assets/edLogo.png";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container>
        <img style={{ height: 50, width: 50 }} src={Logo} />

        <Navbar.Brand style={{}} onClick={() => props.handleRef("carousel")}>
          Excellent Designs
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Nav.Link onClick={() => props.handleRef("details")}>
              Features
            </Nav.Link>
            <Nav.Link onClick={() => props.handleRef("designs")}>
              Portfolio
            </Nav.Link>
            <NavDropdown title="Sevices" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => props.handleRef("teams")}>About</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => props.handleRef("footer")}>
              Contact US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
