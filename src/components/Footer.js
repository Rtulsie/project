import React from 'react'
//import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

import {Container, Row, Col, Nav} from 'react-bootstrap'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <Container fluid className="themeColor">
          <Container>
            <Row className="adjustment-padding">
              <Col xs={12} md={4}>
                <Row>
                  <Col>
                    <h3>OUR OFFICE</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <p>
                            Address:
                        <br/>98e Endeavour Road, Chaguanas,
                        <br/>Trinidad and Tobago.
                        <br/>Phone: (868) 303-6051
                        <br/>Email: polishmeprettybb@gmail.com
                      </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <Nav as="ul" className="flex-column">
                  <Nav.Item as="li">
                    <h3>QUICK LINKS</h3>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/services">Services</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/products">Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} md={4}>
                <Row>
                  <h3>FOLLOW US ON:</h3>
                </Row>
                <Col className="social">
                  <a title="facebook" href="https://www.facebook.com/POLISHMEPRETTY868/">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/polishmepretty_tt/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </Col>
              </Col>
            </Row>
            <Row className="adjustment-padding">
              <p>©2019 by Polish Me Pretty Beauty Boutique.</p>
            </Row>
          </Container>
        </Container>
      </footer>
    )
  }
}

export default Footer
