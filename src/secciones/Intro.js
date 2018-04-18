import React from 'react'
import styled from 'styled-components'
import Me from '../img/me2.jpg'

const SeccionPrincipal = styled.section`
  background:#EEEEEE;
  height:500px;
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-items:center;
  align-content:center;

  @media (max-width:700px){
    grid-template-columns:1fr;
  }
  

`
const Introduccion = styled.div`
    font-family: 'Courgette', cursive;
    width:70%;
    justify-self:start;
    display:flex;
    align-items:center;
`
const Img = styled.img`
  border-radius:300px;
  justify-self:end;
  margin-right:7rem;
  width:300px;
  height:300px;
  
  @media (max-width: 700px){
      width:200px;
      height:200px;
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
                    Hola, Mi nombre es Luis Solano. Soy aficionado al desarrollo de aplicaciones web y mobiles, usando única y exclusivamente
    Javascript, con tecnologías como <Span>ReactJs</Span>  para el front-end, <Span>Node Js</Span>  para el back-end,
    <Span>GraphQL</Span>  para el desarrollo de interfaces de datos.
            </p>
            </Introduccion>
        </SeccionPrincipal>
    )
}