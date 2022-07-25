import React, { useState, useEffect}from 'react'
import axios from 'axios'
function ShowBooking() {
  const email = sessionStorage.getItem('email')
  const [groundData, setGroundData] = useState({});
  async function getData() {
    const response = await axios.get(`http://localhost:8080/getBookings/${email}`)
     setGroundData((prevData) => response);
    console.log(response.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>ShowBooking</div>
  )
}

export default ShowBooking