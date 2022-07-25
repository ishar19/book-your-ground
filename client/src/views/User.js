import Navbar from '../components/Navbar'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Ground from '../components/Ground'
function User() {
  const [grounds, setGrounds] = useState({})
  const groundInfo = []
  const getGrounds = async () => {
    const data = await axios.get('http://localhost:8080/')
    setGrounds(data.data)
    console.log(data.data)
  }
  useEffect(() => {
      getGrounds()
  },[])
  return (
    <>
      <Navbar />
      {Object.entries(grounds).map(ground => {
        groundInfo.push(ground)
      })}
      <Ground info={groundInfo} />

    </>
  )
}

export default User