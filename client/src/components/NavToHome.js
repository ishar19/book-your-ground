import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
export default function NavToHome() {
  return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Nav className="ml-auto">
                 <Link to="/userprofile"><Button className="mt-2" variant="primary">Your Bookings</Button></Link>
              </Nav>
          </Container>
      </Navbar>
  )
}

