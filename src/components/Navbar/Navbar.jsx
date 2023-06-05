//rafce tab >> comando  snipet de  ES7 react native snipet >> react arrow function export component
// imports de react
import React, { useState, useEffect }  from 'react';

//imports de terceros
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

//imports propios
// estilos
import "./Navbar.css";
import Logo from "../../assets/FauxLogotipo.png"
// componentes
import CartWidget from '../CartWidget/CartWidget';
 //funciones


const NavbarProyecto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [compactScreen, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Agregar un listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Verificar el tamaño de la pantalla al cargar la página
    handleResize();

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <div className="container">
      <Navbar className="navbar navbar-expand-lg bg-dark" dark full fixed /*{...args*}*/>
        <NavbarBrand className="navbar-brand brand-fs" href="/">
          <img src={Logo} alt="Logo Tienda Faux" className="brandLogo" />
        </NavbarBrand>
        <NavbarToggler className="navbar-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Ropa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Tecnología
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar direction={compactScreen? "end":"down"}>
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
        </Collapse>
        <CartWidget className="cartWidget"/>
      </Navbar>
      
    </div>
  )
}

export default NavbarProyecto