import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ManageProduct from './ManageProduct';
import './Admin.css'

const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const foodData = {
          name: data.name,
          weight:data.weight,
          price: data.price,
          imageURL: imageURL
        };
        const url = `http://localhost:4500/addProduct`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(foodData)
        })
        .then(res => console.log('server side response', res))
      };
    
      const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '7c08a80d22ecf720df3cc15d66c5151e');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    return (
        <Container>
            <Row>
                <Col className="col col-md-2">
                    <div className="bio">
                    <h2>BIO FOOD</h2>
                    <br/>
                    <ul>
                        <li>
                            <a href="#manage">Manage product</a>
                        </li>
                        <li>
                            <a href="#add">Add product</a>
                        </li>
                        <li>
                            <a href="#edit">Edit product</a>
                        </li>
                    </ul> 
                    </div>
              </Col>
                <Col>
                <div>

                </div>
                <div>
                    <h3>Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       <div>
                            <div> 
                            <label htmlFor="">Product Name</label>
                            <br/>
                            <input  name="name" defaultValue="" ref={register}/>
                            </div>
                            <div>
                            <label htmlFor="">Add Price</label>
                            <br/>
                            <input  name="price" defaultValue="" ref={register}/>
                            </div>

                            <div> 
                            <label htmlFor="">Weight</label>
                            <br/>
                            <input  name="weight" defaultValue="" ref={register}/>
                            </div>
                            <div>
                            <label htmlFor="">Add Photo</label>
                            <br/>
                            <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                            </div>
                            <div>
                            <input type="submit" />
                            </div>

                            </div>
                       

                    </form>

                </div>
              
            </Col>
         </Row>   
        </Container>
    );
};

export default Admin;