import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import gsap from "gsap";
import PropTypes from 'prop-types'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = ({ siteTitle }) => {
  return(
    <header>   
      <Navbar className="themeColor" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img 
          src={logo}
          width="50"
          alt="Logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contact">
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="/career">Career</NavDropdown.Item>
            </NavDropdown>
          </Nav >
          <Nav className="justify-content-end">
            <Nav.Link
                      href="https://www.facebook.com/POLISHMEPRETTY868/"
                      target="_blank"
                      rel="noopener noreferrer">
              <span className="icon">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </span>
            </Nav.Link>
            <Nav.Link
                      href="https://www.instagram.com/polishmepretty_tt/"
                      target="_blank"
                      rel="noopener noreferrer">
              <span className="icon">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </span>
            </Nav.Link>
          </Nav>        
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header