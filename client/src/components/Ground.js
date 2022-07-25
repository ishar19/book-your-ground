import React,{ useState} from 'react'
import axios from 'axios'
import Figure from 'react-bootstrap/Figure';
import UpdateGround from '../pages/UpdateGround'
import {  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CheckBooking from '../components/CheckBooking'
const auth = getAuth();

function Ground(props){
  
  function deleteGround(id){
    axios.delete(`http://localhost:8080/${id}`).then((res)=> {if(res.status==200){
      window.location.reload();
    }})
  }

  

  return (
    <div>
      { props.info.map((info) =>  
        <div className="text-center mt-5">
          <Figure className="text-center">
            <Figure.Image
              width={180}
              height={200}
              alt="image of venue"
              src={info[1].photos[0]}
            />
            <Figure.Caption>
              <h2 className="text-center">{info[1].name}</h2>
              <h4 className="text-center">Known for {info[1].sport}</h4>
              <p className="text-center">Cost/day ${info[1].cost}</p>
              <p className="text-center">Located in {info[1].location}</p>
              <p className="text-center">Capacity of {info[1].capacity} people</p>
            </Figure.Caption>
          </Figure>

        {/* <p>{info[1].name}</p>
        <p>{info[1].capacity}</p> */}
      
        {/* <button onClick={() => deleteGround(info[0])}>Delete</button>
        <button>
          <Link to="/UpdateGround" state={{ id:info[0] }} >Update</Link>
        </button> */}
        <CheckBooking data={{ id:info[0] }}/>
      </div>)}
    </div>
  )
}

export default Ground