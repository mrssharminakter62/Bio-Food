import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Order.css'

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [items, setItems] = useState([]);

    useEffect( ()=> {
        fetch('https://mighty-cove-62078.herokuapp.com/foods?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setItems(data))
           
    }, [])
    return (
        <div className="items-order">
            <div>
                <h2 className="items">You have {items.length} items!!</h2>               
                    {
                        items.map(item =><li key={item._id}>{item.name}-{item.weight}--{item.price}</li>) 
                    }
            </div>
        </div>
    );
};

export default Orders;