import fire from '../fire';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { getAuth, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';

const auth = getAuth();

const LogOut = () => {
    const logOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem("email")
            // sessionStorage.removeItem("user")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (<Nav>        <Button className='ml-auto mt-2' onClick={logOut} variant="danger">Logout</Button>
</Nav>
        )
}

export default LogOut