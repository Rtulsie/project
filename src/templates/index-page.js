import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Row} from 'react-bootstrap'
import IndexFeatures from '../components/IndexFeatures'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading1,
  occasions,
  subheading2,
  weekly,
  subheading3,
  monthly,

}) => (
<div>
  <div className="full-width-image-container margin-top-0"
    style={{
            backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
            backgroundPosition: `center center`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: 'no-repeat',
          }}>
  </div>
  <div>
    <Container>
      <Row className="justify-content-center">
        <h1>{heading}</h1>
      </Row>
      <Row>
        <h3>{subheading1}</h3>
      </Row>
      <Row>
        <IndexFeatures gridItems={occasions.blurbs} />
      </Row>
      <Row>
        <h3>{subheading2}</h3>
      </Row>
      <Row>
        <IndexFeatures gridItems={weekly.blurbs} />
      </Row>
      <Row>
        <h3>{subheading3}</h3>
      </Row>
      <Row>
        <IndexFeatures gridItems={monthly.blurbs} />
      </Row>
    </Container>
    <Container fluid className="themeColor content-padding fontColor">
      add more stuff
    </Container>
  </div>
</div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading1: PropTypes.string,
  occasions: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  subheading2: PropTypes.string,
  weekly: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  subheading3: PropTypes.string,
  monthly: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading1={frontmatter.subheading1}
        subheading2={frontmatter.subheading2}
        subheading3={frontmatter.subheading3}
        occasions={frontmatter.occasions}
        weekly={frontmatter.weekly}
        monthly={frontmatter.monthly}
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
        image{
          childImageSharp {
            fluid(maxWidth: 240, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading1
        occasions {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        subheading2
        weekly {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        subheading3
        monthly {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
