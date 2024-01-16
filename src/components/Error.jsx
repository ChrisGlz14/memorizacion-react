import React from 'react'
import styled from 'styled-components'


const StyleError = styled.div`
    font-size: 50px;
    color: wheat;
    background-color: red;
`
export const Error = () => {
  return (
    <StyleError>Error al cargar los datos</StyleError>
  )
}
