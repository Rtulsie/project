import React from 'react'
import '../../utils/fontawesome'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Img from '../../utils/fontawesome';
import {Container, Row, Col} from 'react-bootstrap'

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
    fetch('/', {
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
          <h1 className="fontColor text-center">Contact Us</h1>
            <Row>
              <Col>Picture</Col><Col>Map</Col>
            </Row>
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
            <Row>
              Line of pictures
            </Row>
        </Container>
      </Layout>
    )
  }
}
