import React from 'react';
import { AboutUsCompoenet } from './aboutus';
import { ContentsComponent } from './contents';
// import { NavComponent } from './Navbar';
import { SectionComponent } from './section';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';



export class NavComponent extends React.Component {

    render() {
        return (

            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/" >SM TechWorld</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/content">Our Contents</Nav.Link>
                            <Nav.Link as={Link} to="/about" >About US</Nav.Link>
                            <Nav.Link href="https://www.youtube.com/channel/UCcMKkd33WZYB5BbompylT-g" target="_blank">YouTube</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
        )
    }
}