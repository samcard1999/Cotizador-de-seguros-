//obtiene la diferencia de years
export function obtenerDiferencia(year){
    return new Date().getFullYear() - year;
}
//calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;

    switch(marca) {
        case 'Europeo':
            incremento= 1.30;
            break;
        case 'Americano':
            incremento= 1.15;
                break;
        case 'Asiatico':
             incremento=1.05;
             break
        default:
            break;
    }
    return incremento;
}

//calcula el total a pagar segun el plan

export function obtenerPlan( plan ){
    return (plan==='Basico')? 1.20 : 1.50;
}

//muestra la primera letra mayuscula

export function primerMayuscula (texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}