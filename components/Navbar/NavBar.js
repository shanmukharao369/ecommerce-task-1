import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Cart from "../Header/Cart";

const NavBar = () => {
  return (
    <Navbar  bg="dark" variant="dark" fixed="top" className="border border-white">
      <Container className="justify-content-center me-7 " style={{ fontFamily: "Serif" }}>
        <Navbar.Brand href="#">HOME</Navbar.Brand>
        <Navbar.Brand href="#">STORE</Navbar.Brand>
        <Navbar.Brand href="#">ABOUT</Navbar.Brand>      
      </Container>
      <Cart></Cart>
    </Navbar>
  );
};

export default NavBar;