import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";

const Food = (props) => {

    const {imageURL, name, weight, price, _id} = props.food;
    
  
    const history = useHistory();

    const handleClick = (id) => {
        const url = `food/${id}`;
        history.push(url);
    }

    
    return (
        <Card style={{ width: '18rem', margin:'20px', border: 'none', marginLeft: '70px' }}>
  <Card.Img variant="top" src={imageURL} />
  <Card.Body>
    <Card.Title style={{fontWeight:'bold', border: 'none'}}>{name}- {weight}</Card.Title>
  </Card.Body>
  <Card.Footer>
      <Card.Text style={{color:'blue', fontWeight:'bold', border: 'none'}}>{price} </Card.Text>
   <Button  variant="primary"  className="btn-style" onClick ={()=>handleClick(_id)}>BUY NOW </Button>
  </Card.Footer>  
</Card>
    );
};

export default Food;
 
          