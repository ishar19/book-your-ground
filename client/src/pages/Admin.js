import React,{useState} from 'react'
import axios from 'axios'
import Ground from '../components/Ground'
import GroundInfo from '../forms/GroundInfo'
import Button from 'react-bootstrap/Button'

function Admin () {
  const isAdmin = window.location.pathname== '/admin'

   const [grounds, setGrounds] =  useState({})
   const [showGrounds, setShowGrounds] = useState(false)
    const groundInfo = []
      const getGrounds= async()=> {
          const data = await axios.get('https://book-your-ground.herokuapp.com/')
          setGrounds(data.data) 
          setShowGrounds(true) 
      }
  const hideGrounds = async () => {
    setShowGrounds(false)
  }
    
  
  return (
    <div className="text-center">
      <GroundInfo />
      {showGrounds ? <Button variant='danger' onClick={hideGrounds} >Hide grounds</Button> : <Button variant="primary" onClick={getGrounds} >List all grounds</Button>}
      {Object.entries(grounds).map(ground => {
        groundInfo.push(ground)
          })}

      {showGrounds ? <Ground isAdmin   admin={true} info={groundInfo} /> : <></> }   
  </div>
  )
}

export default Admin