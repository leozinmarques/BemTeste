import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from './logo.png';
import './NavbarBem.css';

class NavbarBem extends Component {
	render(){
		return(
			<Navbar collapseOnSelect>
			  <Navbar.Header>
			      <img src={logo} className="logo"/>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
			      <NavItem eventKey={1}>
			        Jogo
			      </NavItem>
			      <NavItem eventKey={2}>
			        Formulário
			      </NavItem>
			      <NavDropdown eventKey={3} title="Trantornos" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Depressão</MenuItem>
			        <MenuItem eventKey={3.2}>Estresse</MenuItem>
			        <MenuItem eventKey={3.3}>Ansiedade</MenuItem>
			      </NavDropdown>
			      <NavItem eventKey={4}>
			      	Login
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavbarBem;