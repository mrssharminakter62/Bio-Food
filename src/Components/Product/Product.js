import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Edit from '../../icons/Group 307.png';
import Delete from '../../icons/Group 33150.png';

const Product = ({product}) => {
  
    const handleClick =(id)=>{
        fetch(`https://mighty-cove-62078.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
        })
      } 
 
    return (
         <div>
             <div> 
               <Table >
                        <thead>
                            <tr>
                            <th>Manage Product</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{border: '1px solid black'}}>
                            <tr style={{fontWeight:"bolder"}}>
                                <td>{product.name}</td>
                                <td>{product.weight}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button style={{border:'none'}}>
                                        <img src={Edit} alt="" style={{maxWidth:'30px'}}/>
                                    </button>
                                    <button onClick={()=>handleClick(product._id)} style={{border:'none'}}>
                                        <img  src={Delete} alt="" style={{maxWidth:'30px'}}/>
                                        </button>
                                    </td>
                            </tr>
                        </tbody>
                </Table>
            </div>         
    </div>
    );
};

export default Product;
