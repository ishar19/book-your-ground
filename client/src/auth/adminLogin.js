import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import axios from 'axios';
import Admin from '../pages/Admin';


function AdminLogin() {
  const [adminInfo, setAdminInfo] = useState({
    password:"",
  })
  const [isLoggedIn, setLoggedIn] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target
        setAdminInfo(prevInfo => ({
            ...prevInfo,
            [id]: value,
        }))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:8080/adminLogin/${adminInfo.password}`)
        if (response.status==200){
            setLoggedIn(true);
        }
        else{
            window.alert("Wrong password. Please try again")
        }
    }


  return (
      <div className="h-100 d-flex align-items-center justify-content-center mt-5">
      {isLoggedIn?<Admin/>:  <div className="text-center mt-5" style={{ width: '60%' }}>
              <h2>Login with Admin password</h2>
              <form onSubmit={handleSubmit}>
                  <Form.Group onChange={handleChange} className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={adminInfo.password} required type="password" placeholder="" ></Form.Control>
                  </Form.Group>
                  <Button type="submit" className="primary">Login</Button>
              </form>
          </div>}
    </div>
    
  )
}

export default AdminLogin