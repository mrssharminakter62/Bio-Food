import React from 'react';
import './Admin.css'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {

    
    return (
        <Container>
            <Row>
                <Col className="col col-md-2">
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary" className="flex-column">
                  <Navbar.Brand style={{color:'white', fontWeight:'bold'}}>BIO FOOD</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/add" className="flex-column height">
                          <Link to="/manage">Manage Product</Link>
                          <Link to="/add">Add product</Link>
                          <Link to="/add">Edit Product</Link>
                  
                    </Nav>
                  </Navbar.Collapse>
                </Navbar> 

  
              </Col>
              <Col>
            

              </Col>
              
         </Row>   
        </Container>
    );
};

export default Admin;
