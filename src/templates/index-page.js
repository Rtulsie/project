import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ListFeatures from '../components/ListFeatures'
import ServiceGroupFeatures from '../components/ServiceGroupFeatures'
import { Container, Row} from 'react-bootstrap'


export const IndexPageTemplate = ({
  heading,
  firstImage,
  secondImage,
  services_group1,
  main,
  thirdImage,
  services_group2,
  fourthImage,
  fifthImage,
  services_group3,
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
              !!firstImage.image.childImageSharp ? firstImage.image.childImageSharp.fluid.src : firstImage.image
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
              "{firstImage.caption}"
            </h2>
            <h4
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              color: 'pink',
              padding: '1rem',
              }}
            >
              {firstImage.sub_caption}
            </h4>
          </div>
        </div>
      </Row>
      <Row>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!secondImage.image.childImageSharp ? secondImage.image.childImageSharp.fluid.src : secondImage.image
            })`,
            //backgroundPosition: `top left`,
            //backgroundAttachment: `fixed`,
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
              "{secondImage.caption}"
            </h2>
            <h5
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              //color: 'pink',
              padding: '1rem',
              }}
            >
              <ListFeatures gridItems={main.list} />
            </h5>
          </div>
        </div>
      </Row>
      <Row>
        <ServiceGroupFeatures gridItems={services_group1.blurbs} />      
      </Row>
      <Row>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!thirdImage.image.childImageSharp ? thirdImage.image.childImageSharp.fluid.src : thirdImage.image
            })`,
            //backgroundPosition: `top left`,
            //backgroundAttachment: `fixed`,
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
              "{thirdImage.caption}"
            </h2>
            <h4
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              //color: 'pink',
              padding: '1rem',
              }}
            >
              {thirdImage.subcaption}
            </h4>
          </div>
        </div>
      </Row>
      <Row>
        <ServiceGroupFeatures gridItems={services_group2.blurbs} />      
      </Row>
      <Row>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!fourthImage.image.childImageSharp ? fourthImage.image.childImageSharp.fluid.src : fourthImage.image
            })`,
            //backgroundPosition: `top left`,
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
              "{fourthImage.caption}"
            </h2>
            <h4
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              //color: 'pink',
              padding: '1rem',
              }}
            >
              {fourthImage.caption}
            </h4>
          </div>
        </div>
      </Row>
      <Row>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!fifthImage.image.childImageSharp ? fifthImage.image.childImageSharp.fluid.src : fifthImage.image
            })`,
            //backgroundPosition: `top left`,
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
              "{fifthImage.caption}"
            </h2>
            <h4
              className="has-text-weight-bold is-size-1 text-center"
              style={{
              //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#f40',
              //color: 'pink',
              padding: '1rem',
              }}
            >
              {fifthImage.caption}
            </h4>
          </div>
        </div>
      </Row>
      <Row>
        <ServiceGroupFeatures gridItems={services_group1.blurbs} />      
      </Row>
    </Container>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  firstImage: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    caption: PropTypes.string,
    sub_caption: PropTypes.string,
  }),
  secondImage: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    caption: PropTypes.string,
    sub_caption: PropTypes.array,
  }),
  services_group1: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    text1: PropTypes.string,
    list: PropTypes. array,
    text2: PropTypes.string,
    text3: PropTypes.string,
  }),
  thirdImage: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    caption: PropTypes.string,
    sub_caption: PropTypes.array,
  }),
  services_group2: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  fourth_image: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    caption: PropTypes.string,
    sub_caption: PropTypes.array,
  }),
  fifthImage: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    caption: PropTypes.string,
    sub_caption: PropTypes.array,
  }),
  services_group3: PropTypes.shape({
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
        secondImage={frontmatter.second_image}
        services_group1={frontmatter.services_group1}
        main={frontmatter.main}
        thirdImage={frontmatter.third_image}
        services_group2={frontmatter.services_group2}
        fourthImage={frontmatter.fourth_image}
        fifthImage={frontmatter.fifth_image}
        services_group3={frontmatter.services_group3}
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
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          sub_caption
        }
        second_image {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          sub_caption {
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
            heading
            text
          }
        }
        main {
          text1
          list {
            item
          }
          text2
          text3
        }
        third_image {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          sub_caption
        }
        services_group2 {
          blurbs {
            image {
              childImageSharp{
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
        fourth_image {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          sub_caption
        }
        fifth_image {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          sub_caption
        }
        services_group3 {
          blurbs {
            image {
              childImageSharp{
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            text
          }
        }
      }
    }
  }
`
