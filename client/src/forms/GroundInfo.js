import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import sports from '../data/sports'
import cities from '../data/cities'
import axios from 'axios'
let sportOptions = sports.map((option) => option.data)
sportOptions = sportOptions[0].map((option) => option.attributes.name)
sportOptions.sort()


let cityOptions = cities[0]
cityOptions.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))


function GroundInfo() {
      
    const [groundInfo, setGroundInfo] = useState({
        name: " ",
        capacity : " ",
        cost : " ",
        location : " ",
        sport: " ",
    });
    
    const [file, setFile] = useState(null);

    const handleChange = (e)=>{
        e.preventDefault();
        const {id,value} = e.target
        setGroundInfo(prevInfo =>({
            ...prevInfo,
            [id]: value,
        }))
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append('images', file[i]);
        }
        for(var info in groundInfo){
            formData.append(info, groundInfo[info]);
        }
        axios
            .post('https://book-your-ground.herokuapp.com/',formData)
            .then((data) => window.alert("New ground created"))
            .then(()=>window.location.reload())
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div className="text-center" >
        <h2>List a ground</h2>
            <form onSubmit={handleSubmit} enctype="multipart/form-data" >
                <Form.Group onChange={handleChange} className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={groundInfo.name} required type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group onChange={handleChange} className="mb-3" controlId="capacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control value={groundInfo.capacity} required type="number" placeholder="Capacity" min="0" step="1" />
                </Form.Group>

                <Form.Group onChange={handleChange} className="mb-3" controlId="cost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control value={groundInfo.cost} required type="number" placeholder="$" min="0" step="1" />
                </Form.Group>

                <Form.Group onChange={(e) => setFile(e.target.files)} controlId="images" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file"  />
                </Form.Group>

                <Form.Group onChange={handleChange} controlId="location" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Select >
                        <option>City</option>
                        {cityOptions.map((option) => <option value={option.name}>{option.name}</option>)}
                    </Form.Select>
                </Form.Group>

                <Form.Group onChange={handleChange} controlId="sport" className="mb-3">
                    <Form.Label>Sport</Form.Label>
                    <Form.Select >
                        <option>Sport</option>
                        {sportOptions.map((option) => <option value={option}>{option}</option>)}
                    </Form.Select>
                </Form.Group>

                <Button type="submit" className="mb-3"  >
                    Submit
                </Button>

            </form>
        </div>
       
    );
}


export default GroundInfo;