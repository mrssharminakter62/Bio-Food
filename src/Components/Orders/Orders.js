import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import './Order.css'

const Orders = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [items, setItems] = useState([]);

    const onSubmit = data => {

     const orderDetails = {...loggedInUser, items, shipment: data, orderTime: new Date()};
    
      fetch('https://mighty-cove-62078.herokuapp.com/addOrders',{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data =>{
        if(data){
          alert('Your order successfully !')
        }
      })    
    }; 
    

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
            <br/>
            <br/>
            <h3>Give your Address for Shipment..</h3>
            <hr/>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
                    {errors.email && <span className="error">Email is required</span>}
                  
                <input name="address" ref={register({ required: true })}  placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}
           
                <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
                    {errors.phone && <span className="error">Phone Number is required</span>}
             
                <input className="bg bg-success" type="submit" />
            </form>

        </div>
    );
};

export default Orders;