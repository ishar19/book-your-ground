import React from 'react'
import axios from 'axios'
function UpdateGroundInfo(prop) {
    let groundData = {}
    axios.get(`http://localhost:8080/update/${prop.data}`).then((response) => groundData=response.data)
  return (
    <div><h1>Update Ground Info</h1>

    
    </div>
  )
}

export default UpdateGroundInfo