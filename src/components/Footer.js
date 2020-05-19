import React, {useRef, useEffect} from 'react'
import '../utils/fontawesome'
import ButtonLink from '../utils/fontawesome'
import { TweenMax, Power3, TimelineLite} from "gsap";
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import whatsapp from '../img/social/whatsapp.svg'
import logo1 from '../img/logo1.svg'
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
        <Container>
          <Row className="adjustment-padding">
            <Col 
              xs={12} md={4}
              data-sal="slide-right"
              data-sal-duration ="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
              >
              <h3>OUR OFFICE</h3>
              <div>
                <div className="specialFooterAlign fontColor">
                  <Img icon={'map-marker-alt'}/>
                </div>
                <div style={{display: "inline-block"}} className="fontColor">
                  Address:
                  <br/>98e Endeavour Road, Chaguanas,
                  <br/>Trinidad and Tobago.
                </div>
              </div>
              <div>
                <div className="footerAlign fontColor">
                  <Img icon={'phone-alt'} />
                </div>
                <div style={{display: "inline-block"}} className="fontColor">
                  Phone: (868) 303-6051
                </div>
              </div>
              <div>
                <div className="footerAlign fontColor">
                  <Img icon={'envelope'} />
                </div>     
                <div style={{display:"inline-block"}} className="fontColor">
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
              <ul>
                <li>
                  <h3>QUICK LINKS</h3>
                </li>
                <li>
                  <a className="fontColor" href="/">Home</a>
                </li>
                <li>
                  <a className="fontColor" href="/services">Services</a>
                </li>
                <li>
                  <a className="fontColor" href="/products">Products</a>
                </li>
                <li>
                  <a className="fontColor" href="/about">About</a>
                </li>
                <li>
                  <a className="fontColor" href="/contact">Contact</a>
                </li>
              </ul>
              <br/>
            </Col>
            <Col 
              xs={12} md={4}
              data-sal="slide-right"
              data-sal-duration ="1000"
              data-sal-delay="700"
              data-sal-easing="ease"
              
            >
              <img 
                  src={logo1}
                  width= '170'
                  alt="Logo"
                  className="filterWhite"
              />
              <h5>FOLLOW US ON:</h5>
                <div>
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
                  <a title="instagram" href="tel:+18683036051" target="_blank" className="socialIcon">
                    <img
                      src={whatsapp}
                      alt="Whatsapp"
                      style={{ width: '2em', height: '2em' }}
                      className="filterWhite"
                    />
                  </a>
                </div>
            </Col>
          </Row>
          <Row className="adjustment-padding fontColor">
            <p>©2019 by Polish Me Pretty Beauty Boutique.</p>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}
export default Footer
