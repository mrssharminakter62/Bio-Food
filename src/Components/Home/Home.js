import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Home = () => {

    const [foods, setFoods] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:4500/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
           
    }, [])
    return (
        <div className= "row">
         {
             foods.map(food => <Food food={food} key={food._id}></Food>)
         }
        </div>
    );
};

export default Home;