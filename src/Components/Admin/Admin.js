import React from 'react';
import './Admin.css'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Manage from '../../icons/grid 1.png';
import Add from '../../icons/plus 1.png';
import Edit from '../../icons/edit 1.png';
import ManageProduct from '../ManagePro/ManageProduct';



const Admin = () => {
    
    return (
        <Container>
           <Row>
                <Col className="col col-md-3 "> 
                <Navbar collapseOnSelect expand="lg" bg="success" variant="success" className="flex-column fixed-left" style={{height:'1200px'}}>
                 
                  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav defaultActiveKey="/add" className="flex-column" style={{marginTop:'-400px'}} >
                          <Link to="/manage" style={{color: 'white', fontWeight:'bold', fontSize:'25px'}}><img  src={Manage} alt="" style={{maxWidth:'20px'}}/> Manage Product</Link>
                          <Link to="/add" style={{color:'white', fontWeight:'bold', fontSize:'25px'}}><img  src={Add} alt="" style={{maxWidth:'25px'}}/> Add product</Link>
                          <Link to="/add" style={{color:'white', fontWeight:'bold', fontSize:'25px'}}><img  src={Edit} alt="" style={{maxWidth:'25px'}}/> Edit Product</Link>
                  
                    </Nav>
                  </Navbar.Collapse>
                </Navbar> 
            </Col > 
            <Col style={{marginTop:'20px'}}> 
            <ManageProduct></ManageProduct>
            </Col>
           
         </Row>  
        </Container>
    );
};

export default Admin;
