import React, {Fragment} from 'react'
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
                <p>{item.text}</p>
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
