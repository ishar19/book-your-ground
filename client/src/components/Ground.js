import React, { useState } from 'react';
import axios from 'axios';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CheckBooking from '../components/CheckBooking';
import Form from 'react-bootstrap/Form';


function Ground(props) {
  const [search, setSearch] = useState("")
  const data = props.info;
  const handleSubmit = (e) => {
    const value = e.target.search.value
    setSearch(() => value.toString().toLowerCase())
    e.preventDefault();
  }

  function deleteGround(id) {
    axios.delete(`http://localhost:8080/${id}`).then((res) => {
      if (res.status === 200) {
        window.alert("Ground Deleted")
        window.location.reload();
      }
    }).catch((err) => {window.alert("Something went wrong, please try again")})
  }

  const grounds =
    data.map((info) => 
      info[1].name.toLowerCase().trim() == search.trim() || info[1].sport.toLowerCase().trim() == search.trim() || info[1].location.toLowerCase().trim() == search.trim() ||search == "" ?<div className="mb-3">
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
        <div>
          {props.admin ? <Button className="mr-2 " onClick={() => deleteGround(info[0])}>Delete</Button>
            : <></>}
          {props.admin ? <Link to="/UpdateGround" state={{ id: info[0] }} ><Button className="ml-2"> Update</Button> </Link>
            : <> </>}
          {props.isAdmin ? <> </> : <CheckBooking data={{ id: info[0] }} />}
        </div>
      </div>
        : <></> )
  
  return (
    <div className="text-center">
      <form className="ml-auto mr-auto" style={{ width: "80%" }} onSubmit={handleSubmit} enctype="multipart/form-data" >
        <Form.Group className="mb-3 mt-3" controlId="search">
          <Form.Label><h2>Search for location, name, sport</h2></Form.Label>
          <Form.Control type="text" placeholder="Enter" />
        </Form.Group>
        <Button type="submit" className="mb-3"  >
          Search
        </Button>
      </form>
      {grounds}
    </div>
  )
}

export default Ground