import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarr from './Navbarr';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Images from '../Images/Images';
function Header(props) {
  const cartProducts=useSelector(state=>state.cart);
  return (
    <>
    <Navbarr/>
      <Navbar  data-bs-theme="secondary">
        <Container>
          <Navbar.Brand href="">
            <img src={Images.shoopynav} style={{height:'30px',width:'35px'}} alt='shoppylogo'/>
          </Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Product">Products</Nav.Link>
          </Nav>
            <Nav.Link as={Link} to="./SignIn">SignIn</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;