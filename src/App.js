import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Deals from "./Components/Deals/Deals";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";

function App() {
  return (
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
    <Route path="/deals">
    <Deals></Deals>
    </Route>
    <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>


   </Router>
  );
}

export default App;
