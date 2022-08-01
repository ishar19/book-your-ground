import React from 'react'
import fire from '../fire'
import Nav from 'react-bootstrap/Nav';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import Button from 'react-bootstrap/Button';
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const logIn = () =>{
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                localStorage.setItem("email", user.email)
              // sessionStorage.setItem("user", user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
  return (
    <Nav>     
    <Button className='ml-auto mt-2' onClick={logIn} variant="primary">Login With Google</Button>
    </Nav>
  )
}

export default Login