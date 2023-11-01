import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
// import { useNavigate} from 'react-router-dom';

const Navigationbar = () => {
//   const navigate = useNavigate();
// const user = JSON.parse(localStorage.getItem('user-info'));
// console.log(user);

  return (
    <Navbar  bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">GhartakTeach</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Ragister">
                <Nav.Link>Ragister</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
           </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar