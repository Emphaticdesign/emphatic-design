import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './MyNav.css';
import logo from '../../images/ED-Logo (PNG).png'
const MyNav = () => {
    return (
        <div className="navbar-container">
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand className="logo-img-handler" href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-left">
                        <Nav.Link className="nav-link-color" href="#home">Home</Nav.Link>
                        <Nav.Link active href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNav;