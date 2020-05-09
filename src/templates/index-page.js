import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { Container, Carousel} from 'react-bootstrap'

export const IndexPageTemplate = ({
  image1,
  image2,
  image3,
  image4,
  image5,
}) => (
  <Container fluid className="content-padding">
    <Carousel style={{height:"600px"}}>
      <Carousel.Item className="uniformedCarousel">
        <Img fluid={image1.childImageSharp.fluid} alt="First Carousel" />
      </Carousel.Item>
      <Carousel.Item className="uniformedCarousel">
        <Img fluid={image2.childImageSharp.fluid} alt="Second Carousel" />
      </Carousel.Item>
      <Carousel.Item className="uniformedCarousel">
        <Img fluid={image3.childImageSharp.fluid} alt="Third Carousel" />
      </Carousel.Item>
      <Carousel.Item className="uniformedCarousel">
        <Img fluid={image4.childImageSharp.fluid} alt="Fouth Carousel" />
      </Carousel.Item>
      <Carousel.Item className="uniformedCarousel">
        <Img fluid={image5.childImageSharp.fluid} alt="Fifth Carousel" />          
      </Carousel.Item>
    </Carousel>
  </Container>
)

IndexPageTemplate.propTypes = {
  image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image1={frontmatter.image1}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        image4={frontmatter.image4}
        image5={frontmatter.image5}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter{
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
