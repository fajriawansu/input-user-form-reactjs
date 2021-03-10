import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <Container fluid>
      <NavbarBrand href="/">Master Karyawan</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="d-flex justify-content-between">
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About Us</NavLink>
              </NavItem>
              
            </Nav>
            <NavbarText >Admin</NavbarText>
          </Collapse>
      </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
