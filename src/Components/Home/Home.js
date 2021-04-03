import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Food from '../Food/Food';

const Home = () => {

    const [foods, setFoods] = useState([]);

    useEffect( ()=> {
        fetch('https://mighty-cove-62078.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setFoods(data))
           
    }, [])


    return (
        <div className= "row">
            {
                foods.length === 0 && <Spinner style={{margin:'30px 0px 0px 600px'}} animation="border" variant="success" />
            }
         {
             foods.map(food => <Food  food={food} key={food._id}></Food>)
         }
        </div>
    );
};

export default Home;