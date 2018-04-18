import React from "react";
import styled from "styled-components";
import Link from 'gatsby-link'

import Intro from '../secciones/Intro'

const Container = styled.div`
  
`


export default ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Intro/>
      
    </Container>


  )

};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort:{fields:[frontmatter___date],order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`;