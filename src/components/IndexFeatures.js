import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Row, Col} from 'react-bootstrap'

const FeatureGrid = ({ gridItems }) => (
  <Container fluid>
    <Row >
      {gridItems.map(item => (
        <Col key={item.text} xs={12} md={4} className="text-center content-padding">
          <div
            style={{
              width: '300px',
              display: 'inline-block',
            }}
          >
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </Col>
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
      price: PropTypes.string,
    })
  ),
}

export default FeatureGrid
