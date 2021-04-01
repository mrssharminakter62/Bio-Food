import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Deals from "./Components/Deals/Deals";
import FoodDetail from "./Components/FoodDetails/FoodDetail";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddProduct from "./Components/AddProduct/AddProduct";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInuser] = useState({});
  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInuser]}>
   <Router>
     <Header></Header>
     <Switch>
     <Route exact path="/">
        <Home></Home>
       </Route>
       <Route path="/home">
        <Home></Home>
       </Route>
       <Route path="/orders">
        <Orders></Orders>
      </Route>
      <Route path="/admin">
        <Admin></Admin>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    <PrivateRoute path="/food/:id">
       <FoodDetail></FoodDetail>
    </PrivateRoute>
    <Route path="/deals">
    <Deals></Deals>
    </Route>
    
    <Route path="/add">
      <AddProduct></AddProduct>
    </Route>
    <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
