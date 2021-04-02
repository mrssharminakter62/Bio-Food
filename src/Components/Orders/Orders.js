import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [items, setItems] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:4500/foods?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setItems(data))
           
    }, [])
    return (
        <div style={{marginLeft:'300px', marginTop:'200px', fontWeight: 'bold', fontSize:'25px'}}>
            <h2 style={{borderBottom:'2px solid red', width:'300px', fontWeight: 'bold', fontSize:'25px'}}>You have {items.length} items!!</h2>
          
            {
                items.map(item =><li key={item._id}>{item.name}-{item.weight}--{item.price}</li>) 
            }
        </div>
    );
};

export default Orders;