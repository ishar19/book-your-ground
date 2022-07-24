import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Explore() {
  return (
    <div className="text-center">
      <Link to='/user'>
        <Button className="mt-5"  variant="primary">Explore Venues</Button>
      </Link>   
       </div>
  )
}

export default Explore