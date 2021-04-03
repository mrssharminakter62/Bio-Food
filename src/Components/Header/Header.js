import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
<Navbar  collapseOnSelect expand="lg" bg="primary" variant="primary">
  <Navbar.Brand style={{color:'white', fontWeight:'bold'}}>BIO FOOD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <Nav >
            <Link to="/home" className= "link">Home</Link>
            <Link to="/orders" className= "link">Orders</Link>
            <Link to="/admin" className= "link">Admin</Link>
            <Link to="/deals" className= "link">Deals</Link>
            <Link to="/login" className= "link">Login</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
};

export default Header;