import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase config';
import { Button, Form } from 'react-bootstrap';
import google from '../../icons/Group 573.png';
import facebook from '../../icons/Group 2.png';
import './Login.css'


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);

          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    const fbSignIn = ()=>{
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        setLoggedInUser(user);
        history.replace(from)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
     
}
  //   const handleSubmit = () =>{
  //     firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       var user = userCredential.user;
  //       setLoggedInUser(user)
  //       history.replace(from)
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log("error")
  // });
  //   }

    return (
        <div>
          <div style={{marginTop:"40px"}}>
             <button onClick={handleGoogleSignIn} className="google"><img src={google}  alt="" style={{maxWidth:'40px', marginRight:'35px'}}/> Sign in using Google </button>
             <br/>
             <button onClick={fbSignIn} className="facebook" ><img src={facebook}  alt="" style={{maxWidth:'40px', marginRight:'35px'}}/> Sign in using Facebook</button>
             </div>
             <h2 className="or">Or</h2>
             <div className="signin-form" >
               <div style={{margin:'25px 5px 5px 20px'}}>
                 <Form > 
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{fontSize:'20px', fontWeight:'bold'}}>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{fontSize:'20px', fontWeight:'bold'}}>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                          <Button variant="primary" type="submit">Submit</Button>
                  </Form>
               </div>
    
             </div>
  
        </div>
    );
};

export default Login;