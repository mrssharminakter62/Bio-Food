import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
<Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
  <Navbar.Brand >BIO FOOD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-between">
            <Link to="/home" className= "link">Home</Link>
            <Link to="/orders" className= "link">Orders</Link>
            <Link to="/admin" className= "link">Admin</Link>
            <Link className="btn-book link" to="/login">Deals</Link>
   
    </Nav>
  </Navbar.Collapse>
</Navbar>

       

//   <Navbar  bg="primary" variant="primary">
//             <Navbar.Brand className="wing">BIO FOOD</Navbar.Brand>
//             <Navbar.Toggle />
//             <Navbar.Collapse className="justify-content-end">
//                 <Navbar.Text>
//                   <Link to="/home" className= "link">Home</Link>
//                     <Link to="/orders" className= "link">Orders</Link>
//                     <Link to="/admin" className= "link">Admin</Link>
//                     <Link className="btn-book link" to="/login">Deals</Link>
//                 {/* <button onClick ={() => setLoggedInUser({})} className="sign-out link"> Sign out</button>
//                 <p className="wing">{loggedInUser.name}</p> */}
//                 </Navbar.Text>
//             </Navbar.Collapse>
//   </Navbar>




    );
};

export default Header;