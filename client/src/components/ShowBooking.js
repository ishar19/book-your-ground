import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BookedGround from './BookedGround'
function ShowBooking() {
  const email = localStorage.getItem('email')

  const [grounds, setGrounds] = useState([])
  async function getData() {
    axios.get(`https://book-your-ground.herokuapp.com/getBookings/${email}`)
      .then(response => response.data)
      .then((response) => { setGrounds(response) })
      .catch((err) => { console.log(err) })
  }

  console.log(grounds.grounds)
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='text-center mt-5'>
      <h1 className='mt-3'>Your bookings</h1>
      {grounds.grounds == undefined ? <></> : grounds.grounds.map((ground) =>  <BookedGround data={{ ground: ground.ground, date: ground.date }} />)}
    </div>
  )
}

export default ShowBooking


// ground[1][0].date
// ground[1][0].ground