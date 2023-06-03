//rafce tab >> comando  snipet de  ES7 react native snipet >> react arrow function export component

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // NavbarText,
} from 'reactstrap';

// estilos
import "./Navbar.css";
// sub componentes
import CartWidget from '../CartWidget/CartWidget';

const NavbarProyecto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (

    <div className="container">
      <Navbar className="navbar navbar-expand-lg bg-dark" dark full fixed /*{...args*}*/>
        <NavbarBrand className="navbar-brand" href="/">MiMarca</NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Ropa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Tecnologia
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Joyas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
          <CartWidget/>
        </Collapse>
      </Navbar>
      
    </div>
  )
}

export default NavbarProyecto