import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const LogOut = () => {
    const logOut =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logged out');
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
    <button onClick={logOut}>Sign Out</button>
    )
}

export default LogOut