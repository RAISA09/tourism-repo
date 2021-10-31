import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand id="website-name" href="#home">World Tours</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                        {
                            user.email ?
                                <Nav.Link as={HashLink} to="/addUser">Add User</Nav.Link> : ''}
                        {
                            user.email ?
                                <Nav.Link as={HashLink} to="/rivew">My Bookings</Nav.Link> : ''}
                        {
                            user.email ?
                                <Nav.Link as={HashLink} to="/manageAllOrder">All Orders</Nav.Link> : ''}

                        <Nav.Link as={HashLink} to="/Contact">Contact Us</Nav.Link>

                        {
                            user.email ?
                                <Nav.Link as={HashLink} to="/manageOrder">Manage Orders</Nav.Link> : ''}
                        {
                            user.email ? '' : <Nav.Link as={HashLink} to="/registration">Registration</Nav.Link>}

                        {user.email && <span style={{ color: 'white' }}>Hello{user.displayName} </span>}
                        {
                            user.email ?
                                <button className="my-log-out" onClick={logOut}>log out</button>
                                :
                                <NavLink to="/Sign In">Login</NavLink>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;