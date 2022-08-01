import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';


function CancelBooking(props) {
  let date = props.data.date
  const ground = props.data.ground
  console.log(ground)
  date = new Date(date.seconds*1000)
  const email = localStorage.getItem('email')

  async function deleteBooking(e){
    await axios.post(`https://book-your-ground.herokuapp.com/cancelbooking/${email}/${date}`,ground)
    .then(() => window.location.reload())
    .catch(()=>window.alert("Something happened please try again"))
  }
  
  return (
    <div>
      <Button onClick={deleteBooking} variant='danger'>Cancel Booking</Button>
    </div>
  )
}

export default CancelBooking