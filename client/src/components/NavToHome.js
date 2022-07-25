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
              <Navbar.Brand >Book-Your-Ground</Navbar.Brand>
              <Nav className="ml-auto">
                 <Link to="/"><Button variant="primary">Home</Button></Link>
              </Nav>
          </Container>
      </Navbar>
  )
}

