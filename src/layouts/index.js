import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Titulo = styled(Link) `
  text-shadow:none;
  background-image:none;
  h3{
    display:inline;
  }
`
const Container = styled.div`
  margin:0 auto;
  max-width:750px;
  padding:0 1rem;
`
const ItemLink = styled.li`
  display:inline-block;
  margin-right:1rem;
`
const Cabecera = styled.header`
  margin-bottom:1.5rem
`
const UL = styled.ul`
  list-style:none;
  float:right;
`


export default ({ children, data }) => (
  <Container>
    <Cabecera>
      <Titulo to={'/'}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Titulo>
      <UL>
        <ItemLink><Link to="/">Home</Link></ItemLink>
        <ItemLink><Link to="/about">Acerca</Link></ItemLink>
      </UL>
    </Cabecera>

    {children()}
  </Container>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `