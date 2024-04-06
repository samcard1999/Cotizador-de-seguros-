import React,{useState} from 'react';
import { Header } from './components/Header';
import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import { Resumen } from './components/Resumen';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;

`;
const ContenedorFormulario= styled.div`
    background-color: #FFF;
    padding: 3rem;

`

function App() {

const [resumen, guardarResumen]= useState({
    cotizacion: 0,
    datos:{
        marca:'',
        year:'',
        plan:'',
    }
});
const {datos, cotizacion}= resumen;

const [cargando, guardarCargando]= useState(false);

return (
    <Contenedor>
<Header titulo='Cotizador de seguros'></Header>

<ContenedorFormulario>
    <Formulario
    guardarResumen={guardarResumen}
    guardarCargando={guardarCargando}
    ></Formulario>
    {cargando? <Spinner></Spinner>: null}
    

    <Resumen
    datos={datos}
    >
    </Resumen>
    {
        !cargando ?
        <Resultado
        cotizacion={cotizacion}
        ></Resultado>
        : null
    }
   
</ContenedorFormulario>
</Contenedor>
)
}
export default App;
