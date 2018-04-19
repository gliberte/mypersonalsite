import React from 'react'
import Link from 'gatsby-link'
import styled,{injectGlobal} from 'styled-components'

import WallCabecera from '../img/wall-cabecera.jpg'
import bosque from '../img/bosque.jpg'
import laptop from '../img/laptop.jpg'

const Titulo = styled.div`
  display:inline;
`
const Container = styled.div`
  margin:0 auto;
`
const ItemLink = styled.li`
  display:inline-block;
  margin-right:1rem;
`
const Cabecera = styled.header`
  
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-items:center;
  align-items:center;
  background-image:url(${bosque});
  height:200px;

  @media (max-width:768px){

  }
  @media (max-width:360px){
    height:0;
  }
`
const UL = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
  text-align:center;
  background:#212121;
  li{
    display:inline-block;
    margin-top:1rem;
  }
  li a{
    color:white;
    font-weight:bold;
    transition:all 0.3s linear;
  }
  li a:hover{
    color:yellow;
  }
  
  
`


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Cinzel|Courgette|East+Sea+Dokdo|Titillium+Web');
`

export default ({ children, data }) => (
  <Container>
    <Cabecera>

    </Cabecera>
    <UL>
        <ItemLink><Link to="/">Home</Link></ItemLink>
        <ItemLink><Link to="/about">Acerca</Link></ItemLink>
        <ItemLink><Link to="/blog">Blog</Link></ItemLink>
      </UL>

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