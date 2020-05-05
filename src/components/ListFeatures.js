import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'

const FeatureGrid = ({ gridItems }) => (
  <Container fluid>
    <Row>
      {gridItems.map(item => (
        <Col key={item.item} xs={12} md={4}>
          {item.item}
        </Col>
      ))}
    </Row>
  </Container>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
    })
  ),
}

export default FeatureGrid
