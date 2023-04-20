import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Outlet} from 'react-router-dom'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './Header.css'
function Header() {
  return (
    <div>
        <Navbar variant="dark" fixed="top" style={{backgroundColor:"rgb(50, 55, 60)"}}>
        <Container>
          <FormatQuoteIcon/>
          <Navbar.Brand href="#home" className='headername'>QUOTES GENERATOR</Navbar.Brand>
          <Nav>
            <button style={{background: "black"}}><LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            </button>
            <button style = {{background:"black"}}><LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            </button>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default Header