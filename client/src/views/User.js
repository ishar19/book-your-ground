import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Ground from '../components/Ground'


function User() {
  const [grounds, setGrounds] = useState({})
  const showGrounds = true
  const groundInfo = []
  const getGrounds = async () => {
    const data = await axios.get('http://localhost:8080/')
     setGrounds(data.data)
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
     {showGrounds? <Ground admin={false} info={groundInfo} />:<></>}

    </>
  )
}

export default User