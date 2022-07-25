import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import sports from '../data/sports'
import cities from '../data/cities'

let sportOptions = sports.map((option) => option.data)
sportOptions = sportOptions[0].map((option) => option.attributes.name)
sportOptions.sort()


let cityOptions = cities[0]
cityOptions.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  function UpdateGroundInfo(prop) {


  const [groundData,setGroundData] = useState({});

    async function getData() {
      const response = await axios.get(`http://localhost:8080/update/${prop.data}`)
      await setGroundData((prevData)=>response.data);
    }

  useEffect(() => {
     getData()
  },[])
  

 

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target
    setGroundData(prevInfo => ({
      ...prevInfo,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (var info in groundData) {
      formData.append(info, groundData[info]);
    }
    axios
      .post(`http://localhost:8080/update/${prop.data}`, formData)
      .then((data) =>{})
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <div>


      <h1>Update Ground Info</h1>
      {groundData.length ?<p>loading</p>: <form onSubmit={handleSubmit} enctype="multipart/form-data" >
        <Form.Group onChange={handleChange} className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control value={groundData['name']} type="text" placeholder={groundData['name']} />
        </Form.Group>

        <Form.Group onChange={handleChange} className="mb-3" controlId="capacity">
          <Form.Label>Capacity</Form.Label>
          <Form.Control value={groundData['capacity']} type="number" placeholder={groundData['capacity']} min="0" step="1" />
        </Form.Group>

        <Form.Group onChange={handleChange} className="mb-3" controlId="cost">
          <Form.Label>Cost</Form.Label>
          <Form.Control value={groundData['cost']} type="number" placeholder={groundData['cost']}min="0" step="1" />
        </Form.Group>

        <Form.Group onChange={handleChange} controlId="location" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Select >
            <option selected >{groundData['location']}</option>
            {cityOptions.map((option) => <option value={option.name}>{option.name}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group onChange={handleChange} controlId="sport" className="mb-3">
          <Form.Label>{groundData['sport']}</Form.Label>
          <Form.Select >
            <option selected >{groundData['sport']}</option>
            {sportOptions.map((option) => <option value={option}>{option}</option>)}
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mb-3"  >
          Submit
        </Button>

      </form>}
     
    </div>
  )
}

export default UpdateGroundInfo;