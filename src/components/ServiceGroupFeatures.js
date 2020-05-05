import React, {Fragment} from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Row, Col} from 'react-bootstrap'

const FeatureGrid = ({ gridItems }) => (
  <Container>
    <Row >
      {gridItems.map(item => (
        <Fragment key={item.text} >
            <Col xs={{span: 12, order: 1}} md={{span: 4, order: 12}} className="my-auto">
                <PreviewCompatibleImage imageInfo={item} />
            </Col>
            <Col xs={{span: 12, order: 12}} md={{span: 8, order: 1}}>
                <h4>{item.heading}</h4>
                <p className="font-italic font-weight-light">{item.text}</p>
                    <Link to="/contact">Book Your Apppointment Now</Link>
                    <br/><a href="tel:8683398239">Get in Touch</a>
            </Col>
        </Fragment>
      ))}
    </Row>
  </Container>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
