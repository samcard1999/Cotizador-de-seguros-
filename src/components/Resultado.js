import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top:2rem;
    padding: 1rem;
    text-align: center;


`
const TextoCotizacion =styled.p`
    color: #00838F;
    padding:1rem;
    text-transform: uppercase;
    font-weigth: bold;
    margin: 0;

`
const ResultadoCotizacion= styled.div`
    text-align:center;
    padding:.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224, 237);
    margin-top: 1rem;
    possition: relative;
`

export const Resultado = ({cotizacion}) => {


    return (
    (cotizacion===0) 
    ? (<Mensaje>Elige marca, año, y tipo de seguro </Mensaje>)
    :( 
    <ResultadoCotizacion>
        <TextoCotizacion>El precio total es: {cotizacion}</TextoCotizacion>
    </ResultadoCotizacion>
   )
  )
}

Resultado.propTypes = {

    cotizacion: PropTypes.number.isRequired
}