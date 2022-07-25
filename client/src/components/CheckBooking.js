import React,{ useState} from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import CheckCalender from './CheckCalender'

const auth = getAuth();

function CheckBooking(props) {
    const [loggedIn, setLoginState] = useState(false)
   
    async function bookings() {
        let data = await axios.get(`http://localhost:8080/booking/${props.data.id}`)
        data = data.data;
        console.log(data.bookingHistory)
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoginState(() => true)
          const uid = user.uid;
        } else {
       setLoginState(() => false)
        }
    }
    )

  return (
      <div>
          {loggedIn ? <Link to="/BookGround" state={{ id: props.data.id }} ><Button variant="primary">View and Pick a Date</Button> </Link>
: <Button onClick={() => window.alert("Login to View and Book a Date")} variant="danger">View and Pick a Date</Button>}
      </div>
    )
}

export default CheckBooking