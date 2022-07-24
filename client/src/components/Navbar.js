import React, { useState, useEffect } from 'react';
import Login from '../auth/login';
import Logout from '../auth/logout';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const auth = getAuth();


function BasicExample() {
    const [loggedIn, setLoginState] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoginState(() => true)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            setLoginState(() => false)
        }
    }
    )
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Book-Your-Ground</Navbar.Brand>
                    <Nav className="ml-auto">
                        {loggedIn ? <Logout /> : <Login />}
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default BasicExample;