import React, { useState, useEffect } from 'react';
import Login from '../auth/login';
import Logout from '../auth/logout';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function Home() {
    const [loggedIn, setLoginState] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoginState(() => true)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
            // ...
        } else {
            // User is signed out
            // ...
            setLoginState(() => false)
            console.log("user is logged out")
        }
    }
    )
    return (
        <div>
            {loggedIn ? <Logout /> : <Login />}
        </div>
    );
}
export default Home;