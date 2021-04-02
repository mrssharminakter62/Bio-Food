
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const FoodDetail = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [checkOut, setCheckOut] = useState([]);
    const {name, weight, price} = checkOut;

    useEffect(()=>{
        fetch(`https://mighty-cove-62078.herokuapp.com/food/${id}`)
        .then(res => res.json())
        .then(data => setCheckOut(data));

    }, [])
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
                            <tr>
                                <td>Total</td>
                               
                            </tr>
                        </tfoot>
                    </table>
                    <Button  variant="primary" onClick ={() => setLoggedInUser({})}>Checkout</Button>
                    
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
