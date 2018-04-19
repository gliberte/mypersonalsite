import React from 'react'
import styled from 'styled-components'
import Me from '../img/me2.jpg'
import wood from '../img/wood.jpg'

const SeccionPrincipal = styled.section`
  background:url(${wood});
  height:auto;
  display:grid;
  grid-template-columns:1fr 1fr;

  @media (max-width:768px){
    grid-template-columns:1fr;
  }

  

`
const Introduccion = styled.div`
    font-family: 'East Sea Dokdo', cursive;
    font-size:1.8em;
    width:70%;
    background:rgba(0,0,0,0.5);
    padding:3rem;
    justify-self:start;
    display:flex;
    align-items:center;
    p{
        color:white;
    }

    @media (max-width:768px){
        justify-self:center;
        padding:1rem;
    }
    @media (max-width:360px){
        font-size:1.2em;
        width:100%;
    }

`
const Img = styled.img`
  border-radius:300px;
  border:3px solid white;
  justify-self:end;
  align-self:center;
  margin-right:7rem;
  width:300px;
  height:300px;
  
  @media (max-width: 768px){
      width:200px;
      height:200px;
      justify-self:center;
      margin-right:0;
  }
  @media (max-width:360px){
    width:150px;
    height:150px;
    }

`

const Span = styled.span`
font-family: 'Titillium Web', sans-serif;
font-weight:bold;
`

export default () => {
    return (
        <SeccionPrincipal>

            <Img src={Me} alt="" />
            <Introduccion>
                <p>
                    Hola, Mi nombre es Luis Solano. Soy un profesional del desarrollo de aplicaciones web y mobiles usando única y exclusivamente <Span>Javascript</Span>, con tecnologías como <Span>ReactJs</Span>  para el front-end, <Span>Node Js</Span>  para el back-end,
    <Span>GraphQL</Span>  para el desarrollo de interfaces de datos.
            </p>
            </Introduccion>
        </SeccionPrincipal>
    )
}