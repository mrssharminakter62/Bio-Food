
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';



const FoodDetail = () => {
    const {handleSubmit} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [checkOut, setCheckOut] = useState([]);
    const {name, weight, price} = checkOut;

    useEffect(()=>{
        fetch(`https://mighty-cove-62078.herokuapp.com/food/${id}`)
        .then(res => res.json())
        .then(data =>{
            setCheckOut(data)
        });

    }, [])


    const onSubmit = data => {

        const orderDetails = {...loggedInUser, checkOut, shipment: data, orderTime: new Date()};
       
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
       

    return (
        <div className="container-Fluid bg-light" style={{height:"88vh"}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <h1 className="my-4">Checkout</h1>
                    <table className="table table-striped shadow-lg p-5 mb-4 bg-body rounded">
                        <thead>
                            <tr>
                                <th scope="col" className="text-muted">Description</th>
                                <th scope="col" className="text-muted">Quantity</th>
                                <th scope="col" className="text-muted">Weight</th>
                                <th scope="col" className="text-muted">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{fontWeight:"bolder"}}>
                                <td>{name}</td>
                                <td>1</td>
                                <td>{weight}</td>
                                <td>{price}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style={{fontWeight:"bolder"}}>
                                <td>Total</td>
                                <td></td>
                                <td></td>
                                <td>{price}</td>
                               
                            </tr>
                        </tfoot>
                    </table>

                     <form style={{marginLeft:'900px', padding:'50px'}} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                          <button style={{fontWeight:'bold', borderRadius:'10px'}} className="bg bg-info p-2 " type="submit">Checkout</button>
                     </form>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
