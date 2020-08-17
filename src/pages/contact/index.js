import React from 'react'
import '../../utils/fontawesome'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Img from '../../utils/fontawesome';
import {Container, Row, Col} from 'react-bootstrap'

import contact from '../../img/contact/contact.jpeg'
import contact1 from '../../img/contact/contact1.jpg'
import contact2 from '../../img/contact/contact2.jpeg'
import contact3 from '../../img/contact/contact3.jpeg'
import contact4 from '../../../static/img/contact4.jpeg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/career?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <Container className="themeColor">
          <h1 className="fontColor text-center" style={{paddingTop:'30px'}}>Contact Us</h1>
            <Row>
              <Col xs={12} md={8} style={{textAlign:'center'}}>
                <img src={contact} alt="Polish Me Pretty Interior" style={{height:'290px'}}/>
              </Col>
              <Col>
                Map
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} md={4}>
                <h5>ADDRESS</h5>
                <div>
                  <div className="specialFooterAlign fontColor">
                    <Img icon={'map-marker-alt'}/>
                  </div>
                  <div style={{display: "inline-block"}} className="fontColor">
                    98e Endeavour Road, Chaguanas,
                    <br/>Trinidad and Tobago.
                  </div>
                </div>
                <a  className="button is-link" href="tel:+18683036051">GET IN TOUCH</a>
              </Col>
              <Col xs={12} md={4}>
                <h5>OPENING HOURS</h5>
                <p className="fontColor">
                  Monday: Closed
                  <br/>Tuesday-Friday: 10:30AM-7PM
                  <br/>Saturday: 10AM-7PM
                  <br/>Sunday: 10AM-3PM
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h5>SEND US A MESSAGE</h5>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        placeholder={'NAME'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        placeholder={'EMAIL'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        placeholder={'MESSAGE'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={6} md={2}>
                <img src={contact1} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px', marginBottom:'30px'}}/>
              </Col>
              <div/>
              <Col xs={6} md={2}>
                <img src={contact2} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px'}}/>
              </Col>
              <Col xs={6} md={2}>
                <img src={contact3} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px', marginBottom:'30px'}}/>
              </Col>
              <Col xs={6} md={2}>
                <img src={contact4} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px'}}/>
              </Col>
              <Col xs={6} md={2}>
                <img src={contact4} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px'}}/>
              </Col>
              <Col xs={6} md={2}>
                <img src={contact4} alt="Polish Me Pretty Interior" style={{width:'150px', height:'120px'}}/>
              </Col>
            </Row>
            <div style={{paddingBottom:'30px'}}/>
        </Container>
        <div className="adjustment-padding"/>
      </Layout>
    )
  }
}
