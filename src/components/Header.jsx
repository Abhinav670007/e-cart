import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';



function Header() {
  //to access the state value
    const wishList=useSelector((state)=>state.wishlistReducer)
    // console.log(wishList);
    const cart = useSelector((state)=>state.cartReducer)
    console.log(cart);
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container>
      <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i class="fa-solid fa-cart-shopping fa-bounce"></i>   E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2' ><Link style={{textDecoration:'none',color:'white'}} to={'/Wishlist'}>WishList <Badge bg="secondary">{wishList.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border border-secondary rounded ms-3 mts-3'><Link style={{textDecoration:'none',color:'white'}} to={'cart'}><i class="fa-solid fa-cart-shopping fa-beat-fade text-warning"></i> Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header