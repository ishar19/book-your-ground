import React from 'react'
import { useLocation } from "react-router-dom";

import UpdateGroundInfo from '../forms/UpdateGroundInfo'
import { Routes, Route, Link } from "react-router-dom";

const UpdateGround = () => {
  const location = useLocation();
  const id = location.state?.id;

  return (
    <UpdateGroundInfo data={id}/>
  )
}

export default UpdateGround