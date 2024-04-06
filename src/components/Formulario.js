import React ,{useState} from 'react'
import styled from '@emotion/styled';
import { obtenerDiferencia, calcularMarca, obtenerPlan } from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label= styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width:100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

export const Formulario = ( {guardarResumen,guardarCargando} ) => {

    const [error, guardarError]= useState(false);

    const [datos, guardarDatos]= useState({
        marca:'',
        year:'',
        plan:'basico',
    })
    //extraer los valores del state
    const {marca, year, plan}= datos;
    //guardar los datos en el state
    const obtenerDatos = e =>{
        e.preventDefault();
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
}

const cotizarSeguro= e =>{
    e.preventDefault();

    if(marca.trim() ===''|| year.trim()===''|| plan.trim()===''){
        guardarError(true);
        return;
    }
    guardarError(false);
    let resultado=2000;
    //obtener la diferencia de a;os

    const diferencia= obtenerDiferencia(year);

    //por cada a;o hay que restar el 3%
    resultado-= ((diferencia*3)*resultado)/100;

    resultado= calcularMarca(marca)* resultado;
    const incrementoPlan= obtenerPlan(plan);
    resultado= parseFloat(incrementoPlan* resultado).toFixed(2);
    
    guardarCargando(true);
    setTimeout(()=> {
        guardarCargando(false);
        guardarResumen({
            cotizacion: resultado,
            datos
        });
    
    },2000)
 
}


  return (
    <form
    onSubmit={cotizarSeguro}
    >
        {error? <Error>Todos los  campos son obligatorios</Error>: null}
        <Campo>
            <Label>Marca</Label>
            <Select
            onChange={obtenerDatos}
            name="marca"
            value={marca}
            >
                <option value="">---Seleccione---</option>
                <option value="Americano">Americano</option>
                <option value="Europeo">europeo</option>
                <option value="Asiatico">asiatico</option>
            </Select>
        </Campo>

        <Campo>
            <Label>Año</Label>
            <Select
            onChange={obtenerDatos}
            name="year"
            value={year}
            >
                <option value="">---Seleccione---</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
            </Select>
        </Campo>

        <Campo>
            <Label>Plan</Label>
            <input
            type="radio"
            name="plan"
            value="Basico"
            checked={plan ==="basico"}
            onChange={obtenerDatos}
            />Básico

            <input
            type="radio"
            name="plan"
            value="completo"
            checked={plan ==="completo"}
            onChange={obtenerDatos}
            />Completo
        </Campo>

        <Boton type="submit">Cotizar</Boton>
    </form>
  )
}

Formulario.propTypes= {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando:PropTypes.func.isRequired
}