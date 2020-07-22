import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import whatsapp from '../img/social/whatsapp.svg'
import PropTypes from 'prop-types'
import {Navbar, Nav} from 'react-bootstrap';

const Header = ({ siteTitle }) => {
  return(
    <header>   
      <Navbar className="themeColor linkColor2" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img 
          src={logo}
          width="50"
          alt="Logo"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{textAlign:'center'}}>
          <Nav className="mr-auto">
            <Nav.Link style={{color:'#ffffff'}} href="/services">Services</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} href="/products">Products</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} href="/gallery">Gallery</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} href="/contact">Contact Us</Nav.Link>
            <Nav.Link style={{color:'#ffffff'}} href="/career">Career</Nav.Link>
          </Nav >
          <Nav className="justify-content-end" style={{display:'inline'}}>
            <a title="facebook" href="https://www.facebook.com/POLISHMEPRETTY868/" target="_blank" className="socialIcon">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '2em', height: '2em' }}
                className="filterWhite"
              />
            </a>
            <a title="instagram" href="https://www.instagram.com/polishmepretty_tt/" target="_blank" className="socialIcon">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '2em', height: '2em' }}
                className="filterWhite"
              />
            </a>
            <a title="whatsapp" href="tel:+18683036051" className="socialIcon">
              <img
                src={whatsapp}
                alt="Whatsapp"
                style={{ width: '2em', height: '2em' }}
                className="filterWhite"
              />
            </a>
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