import React,{ useState} from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function CheckBooking() {
    const [loggedIn, setLoginState] = useState(false)
    function bookings() {

    }
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
      <div>
          {loggedIn ? <Button onClick={bookings} variant="primary">Check Bookings</Button> : <Button onClick={() => window.alert("Login to check bookings")} variant="danger">Check Bookings</Button>}
      </div>
    )
}

export default CheckBooking