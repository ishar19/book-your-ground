import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Figure from 'react-bootstrap/Figure';

let data = [];
let groundData = {}

function ShowBooking() {
  const email = sessionStorage.getItem('email')
 
  async function getData() {
    const response = await axios.get(`http://localhost:8080/getBookings/${email}`)
    groundData = { ...response.data.grounds }
    console.log(groundData)  

    Object.entries(groundData).map(ground => {
      axios.get(`http://localhost:8080/updateBooking/${ground[1].ground}`)
        .then((response => data.push(response.data)))
    })
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='text-center mt-5'>
      <h1 className='mt-3'>Your bookings</h1>
    </div>
  )
}


export default ShowBooking