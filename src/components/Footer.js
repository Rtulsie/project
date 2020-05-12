import React, {useRef, useEffect} from 'react'
import '../utils/fontawesome'
import ButtonLink from '../utils/fontawesome'
import { TweenMax, Power3, TimelineLite} from "gsap";
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import {Container, Row, Col} from 'react-bootstrap'
import Img from '../utils/fontawesome';


function Footer () {
let location = useRef(null);
let links = useRef(null);
let social = useRef(null);

useEffect (() => {
/*TweenMax.from(location, 3, { x: -1200, ease: Power3.easeOut})
TweenMax.from(links, 3, { x: -100, ease: Power3.easeOut})
TweenMax.from(social, 3, { x: -100, ease: Power3.easeOut})

ref={el=> {location = el}}*/
}, [])

  return (
    <footer>
      <Container fluid className="themeColor">
        <Container className="trigger">
          <Row className="adjustment-padding fooerReveal">
            <Col 
              xs={12} md={4}
              data-sal="slide-right"
              data-sal-duration ="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
              >
              <h3>OUR OFFICE</h3>
              <div>
                <div className="specialFooterAlign">
                  <Img icon={'map-marker-alt'} />
                </div>
                <div style={{display: "inline-block"}}>
                  Address:
                  <br/>98e Endeavour Road, Chaguanas,
                  <br/>Trinidad and Tobago.
                </div>
              </div>
              <div>
                <div className="footerAlign">
                  <Img icon={'phone-alt'} />
                </div>
                <div style={{display: "inline-block"}}>
                  Phone: (868) 303-6051
                </div>
              </div>
              <div>
                <div className="footerAlign">
                  <Img icon={'envelope'} />
                </div>     
                <div style={{display:"inline-block"}}>
                  Email: polishmeprettybb@gmail.com
                </div>
              </div>
              <br/>
            </Col>
            <Col 
              xs={12} md={4}
              data-sal="slide-right"
              data-sal-duration ="1000"
              data-sal-delay="500"
              data-sal-easing="ease"
              >
              <ul className="text-center">
                <li>
                  <h3>QUICK LINKS</h3>
                </li>
                <li>
                  <a className="linkColor" href="/">Home</a>
                </li>
                <li>
                  <a className="linkColor" href="/services">Services</a>
                </li>
                <li>
                  <a className="linkColor" href="/products">Products</a>
                </li>
                <li>
                  <a className="linkColor" href="/about">About</a>
                </li>
                <li>
                  <a className="linkColor" href="/contact">Contact</a>
                </li>
              </ul>
            </Col>
            <Col 
              xs={12} md={4}data-sal="slide-right"
              data-sal-duration ="1000"
              data-sal-delay="700"
              data-sal-easing="ease"
              className="my-auto"
            >
              <h3>FOLLOW US ON:</h3>
                <div>
                  <a title="facebook" href="https://www.facebook.com/POLISHMEPRETTY868/">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '2em', height: '2em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/polishmepretty_tt/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '2em', height: '2em' }}
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
