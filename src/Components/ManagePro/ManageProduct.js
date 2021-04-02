import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect( ()=> {
      fetch('http://localhost:4500/foods')
      .then(res => res.json())
      .then(data => setProducts(data))
         
  }, [])
  return (
      <div style={{ marginLeft:'400px'}}>
       {
           products.map(product => <Product product={product} key={product._id}></Product>)
       }
      </div>
  );
};

export default ManageProduct;