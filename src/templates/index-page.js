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
  about,
  secondImage,
}) => (
<div classname="content">
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
    <Container fluid className="themeColor fontColor" style={{paddingTop:'30px'}}>
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
      <Row>
        <div
          className="full-width-image-container text-center content"
          style={{
            backgroundImage: `url(${about.background.childImageSharp?about.background.childImageSharp.fluid.src:about.background})`,
            //backgroundPosition: `center center`,
            backgroundAttachment: `fixed`,
            backgroundRepeat: 'no-repeat',
          }}>
            <div
              style={{
                  display: 'flex',
                  height: '150px',
                  lineHeight: '1',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'column',
                  paddingLeft:'30px',
                  paddingRight:'30px',
              }}
              >
              <h1
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                  data-sal="slide-up"
                  data-sal-duration ="3000"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                >{about.title}
                </h1>
                <h4 
                  data-sal="slide-up"
                  data-sal-duration ="1000"
                  data-sal-delay="600"
                  data-sal-easing="ease"
                >{about.subheading}</h4>
                <p
                  data-sal="slide-up"
                  data-sal-duration ="1000"
                  data-sal-delay="800"
                  data-sal-easing="ease"
                >{about.description}</p>
                <a href="tel:+18683036051"
                  data-sal="slide-up"
                  data-sal-duration ="1000"
                  data-sal-delay="1000"
                  data-sal-easing="ease"
                >{about.contact}</a>
            </div>
          </div>
      </Row>
    </Container>
    <Container>
      <Row>
        <div
          className="full-width-image-container adjustment-padding"
          style={{
            backgroundImage: `url(${secondImage.childImageSharp?secondImage.childImageSharp.fluid.src:secondImage})`,
            backgroundPosition: `center center`,
          }}
        />
        </Row>
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
  about: PropTypes.shape({
    title: PropTypes.string,
    subheading: PropTypes.string,
    description: PropTypes.string,
    contact: PropTypes.string,
    background: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  secondImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        about={frontmatter.about}
        secondImage={frontmatter.secondImage}
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
            fluid(maxWidth: 2048, quality: 100) {
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
                fluid(maxWidth: 2048, quality: 100) {
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
                fluid(maxWidth: 2048, quality: 100) {
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
                fluid(maxWidth: 2048, quality: 100) {
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
              fluid(maxWidth: 2048, quality: 100) {
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
              fluid(maxWidth: 2048 quality: 100) {
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
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        about {
          title
          subheading
          description
          contact
          background {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        secondImage {
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
