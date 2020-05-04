import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Row} from 'react-bootstrap'


export const IndexPageTemplate = ({
  heading,
  firstImage,
  main_caption,
  sub_caption,
  services_group1
}) => (
  <div className="content">
    <Container>
      <Row>
        <h1>{heading}</h1>
      </Row>
      <Row>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!firstImage.childImageSharp ? firstImage.childImageSharp.fluid.src : firstImage
            })`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'space-around',
              alignItems: 'left',
              flexDirection: 'column',
            }}
          >
            <h2
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              color: 'pink',
              padding: '1rem',
              }}
            >
              {main_caption}
            </h2>
          </div>
        </div>
      </Row>
    </Container>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  firstImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  main_caption: PropTypes.string,
  sub_caption: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        firstImage={frontmatter.first_image}
        main_caption={frontmatter.main_caption}
        sub_caption={frontmatter.sub_caption}
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
        heading
        first_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main_caption
        sub_caption {
          blurbs {
            caption
          }
        }
        services_group1 {
          blurbs {
            image {
              childImageSharp{
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`
