import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CareerFeatures from '../components/CareerFeatures'
import {Container, Row} from 'react-bootstrap'

export const CareerPageTemplate = ({
    title,
    description,
    intro,
}) => (
        <Container>
            <Row>
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            </Row>
            <Row>
                <CareerFeatures gridItems={intro.blurbs} />
            </Row>
            <br/>
        </Container>
        
)

CareerPageTemplate.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
  }),
}

const CareerPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <CareerPageTemplate
                title={frontmatter.title}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

CareerPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

  export default CareerPage

  export const careerPageQuery = graphql`
    query CareerPage($id: String!) {
        markdownRemark(id: {eq: $id }) {
            frontmatter {
                title
                description
                intro {
                  blurbs {
                    image {
                      childImageSharp {
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