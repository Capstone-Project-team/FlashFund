import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../../assets/css/login.css"

//nav bar for already logged in users
const LandingNavbar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Flash Fund</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      ></Navbar.Collapse>
    </Navbar>
  )
}

export default LandingNavbar
