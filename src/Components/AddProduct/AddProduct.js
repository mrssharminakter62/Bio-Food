
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


const AddProduct = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
          name: data.name,
          weight:data.weight,
          price: data.price,
          imageURL: imageURL
        };
        const foodData ={...loggedInUser, ...productData}
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
        <Container style={{border:'1px solid black', marginLeft:'500px',width:'800px', marginTop:'200px', textAlign:'center', padding:'5px'}}>
                <h3 style={{fontWeight:'bold', marginBottom:'40px'}}>Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                          <Row>
                                  <Col>
                                      <label htmlFor="" style={{fontWeight:'bold'}}>Product Name</label>
                                      <br/>
                                      <input  name="name" defaultValue="" ref={register}/>
                                  </Col>
                                  <Col>
                                        <label htmlFor="" style={{fontWeight:'bold'}}>Add Price</label>
                                        <br/>
                                        <input  name="price" defaultValue="$" ref={register}/>
                                  </Col>
                              </Row>
                              <Row> 
                                  <Col>
                                      <label htmlFor="" style={{fontWeight:'bold'}}>Weight</label>
                                      <br/>
                                      <input  name="weight" defaultValue="Kg" ref={register}/>
                                  </Col>
                                  <Col>
                                    <label htmlFor="" style={{fontWeight:'bold'}}>Add Photo</label>
                                    <br/>
                                    <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                                </Col>  
                              </Row>
                              <Button variant="primary" className="mt-4" type="submit">Submit</Button>                               
                    </form>
        </Container>  
    );
};

export default AddProduct;