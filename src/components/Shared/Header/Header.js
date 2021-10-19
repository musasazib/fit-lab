import React from 'react';
import './header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container className="nav-link">
                    <Navbar.Brand as={Link} to="/home#home"><img
                        src={logo}
                        height="35 "
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/package">Package</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user.email ?
                        <Button onClick={logOut} className="logout-btn" as={Link} to="/">Logout</Button>:
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}


                        <Navbar.Text>
                            Signed in as:  <a className="user-name" href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;