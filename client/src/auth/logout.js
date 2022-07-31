import React from 'react'
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

    return (
        <Button onClick= {logOut} variant="danger">Logout</Button>
        )
}

export default LogOut