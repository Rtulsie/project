import React, {useRef, useEffect} from 'react'
import { TweenMax, Power3, TimelineLite} from "gsap";
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import {Container, Row, Col} from 'react-bootstrap'

function Footer () {
let location = useRef(null);
let links = useRef(null);
let social = useRef(null);

useEffect (() => {
TweenMax.from(location, 3, { x: -100, ease: Power3.easeOut})
TweenMax.from(links, 3, { x: -100, ease: Power3.easeOut})
TweenMax.from(social, 3, { x: -100, ease: Power3.easeOut})
}, [])

  return (
    <footer>
      <Container fluid className="themeColor">
        <Container className="trigger">
          <Row className="adjustment-padding fooerReveal">
            <Col xs={12} md={4} className="locationAnimation" ref={el=> {location = el}}>
              <h3>OUR OFFICE</h3>
              <br/>
              <p>
                Address:
                <br/>98e Endeavour Road, Chaguanas,
                <br/>Trinidad and Tobago.
                <br/>Phone: (868) 303-6051
                <br/>Email: polishmeprettybb@gmail.com
              </p>
            </Col>
            <Col xs={12} md={4} className="linksAnimation" ref={el=> {links = el}}>
              <ul>
                <li>
                  <h3>QUICK LINKS</h3>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="socialAnimation" ref={el=> {social = el}}>
              <h3>FOLLOW US ON:</h3>
              <br/>
              <div className="social">
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
              </div>
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
export default Footer
