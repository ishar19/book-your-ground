import React from 'react'
import { useLocation } from "react-router-dom";

import UpdateGroundInfo from '../forms/UpdateGroundInfo'
import { Routes, Route, Link } from "react-router-dom";

function UpdateGround () {
  const location = useLocation();
  // const id = location.state?.id;
    console.log('hello')
  return (<div>
  <h1>Heelo</h1>
    {/* <UpdateGroundInfo data={id} /> */}

  </div>
  )
}

export default UpdateGround