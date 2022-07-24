import React,{useState} from 'react'
import axios from 'axios'
import Ground from '../components/Ground'
import GroundInfo from '../forms/GroundInfo'
function Admin () {
   const [grounds, setGrounds] =  useState({})
    const groundInfo = []
      const getGrounds= async()=> {
          const data = await axios.get('http://localhost:8080/')
          setGrounds(data.data)  
      }
    
  
  return (
    <div>
      <GroundInfo />
      <button onClick={getGrounds} >Get grounds</button>
      {Object.entries(grounds).map(ground => {
        groundInfo.push(ground)
          })}
      <Ground info={groundInfo} />
  </div>
  )
}

export default Admin