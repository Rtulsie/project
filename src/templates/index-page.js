import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Row, Col} from 'react-bootstrap'
import IndexFeatures from '../components/IndexFeatures'
import Img from 'gatsby-image'

export const IndexPageTemplate = ({
  image,
  heading,
  subheading1,
  occasions,
  subheading2,
  weekly,
  subheading3,
  monthly,
  services,
  products,
  gallery,

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
      <Row>
        <Col xs={12} md={4} className="text-center">
          <h2>{services.text}</h2>
          <Link to='/services'>
            <Img style = {{ width: 'auto', height: '300px'}} fluid={services.image.childImageSharp.fluid} alt="Services" />
          </Link>
          <p>{services.description}</p>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <h2>{products.text}</h2>
          <Link to='/products'>
            <Img style = {{ width: 'auto', height: '300px'}} fluid={products.image.childImageSharp.fluid} alt="Products" />
          </Link>
          <p>{products.description}</p>
        </Col>
        <Col xs={12} md={4} className="text-center">
          <h2>{gallery.text}</h2>
          <Link to='/gallery'>
            <Img style = {{ width: 'auto', height: '300px'}} fluid={gallery.image.childImageSharp.fluid} alt="Gallery" />
          </Link>
          <p>{gallery.description}</p>
        </Col>
      </Row>
    </Container>
    <Container>
      Maybe add About area and contact
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
  services: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
  }),
  products: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
  }),
  gallery: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
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
        services={frontmatter.services}
        products={frontmatter.products}
        gallery={frontmatter.gallery}
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
        services {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        products {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        gallery {
          text
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
