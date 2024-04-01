import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-info">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <NavLink to={"/"} className="text-decoration-none mx-4">Data Create</NavLink>
                            <NavLink to={"/Edit"} className="text-decoration-none">View</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
