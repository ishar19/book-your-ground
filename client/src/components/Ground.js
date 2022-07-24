import React from 'react'
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import UpdateGround from '../pages/UpdateGround'
import { Routes, Route, Link } from "react-router-dom";

function Ground(props){
  console.log(props.info)
  function deleteGround(id){
    axios.delete(`http://localhost:8080/${id}`).then((res)=> {if(res.status==200){
      window.location.reload();
    }})
  }

  return (
    <div>
      { props.info.map((info) =>  <div>
      
        <p>{info[1].name}</p>
        <p>{info[1].capacity}</p>
      
        <button onClick={() => deleteGround(info[0])}>Delete</button>
        <button>
          <Link to="/UpdateGround" state={{ id:info[0] }} >Update</Link>
        </button>
      </div>)}
      <p>hello</p>
    </div>
  )
}

export default Ground