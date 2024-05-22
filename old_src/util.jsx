import Parcial from "./components/parcial";

const addParcial = (parciales, data) => {
    const sumaActual = sumaPorcentajes(parciales);
    const nuevoPeso = nuevoParcial(data).peso;
    const ActualMasNuevo = Number(sumaActual) + Number(nuevoPeso);

    if (parciales.length == 0 || ActualMasNuevo < 100) {
        parciales.push(nuevoParcial(data));
        console.log("porcentaje total = " + sumaPorcentajes(parciales));
    } else {
        alert("El porcentaje excede el 100%");
    }
}

const nuevoParcial = (data) => {
    const newParcial = {
        nombre: data.nombre,
        peso: data.peso,
        id: Date.now(),
    };
    return newParcial;
}

const mostrarParciales = (parciales) => {
    const misParciales = parciales.map((parcial) => (
        <Parcial nombre={parcial.nombre} peso={parcial.peso} key={parcial.id} />
    ));
    return misParciales;
}


/* const sumaPorcentajes = (parciales) => {
    const porcentajeTotal = parciales.reduce((total, item) => {
        total + item.peso;
    }, 0);
    return Number(porcentajeTotal);
} */

function sumaPorcentajes(parciales) {
    const total = parciales.reduce((previousValue, currentValue) => {
    return Number(previousValue) + Number(currentValue.peso);
    }, 0);
    return total
}


const calcularNotaParcial = (nota, peso) => {
    const notaParcial = (nota * peso) / 100;
    return notaParcial;
}

const calculatNotaFinal = () => {
    const notaFinal = 0;
    return notaFinal;
}

export const utilidades = {
    nuevoParcial,
    addParcial,
    sumaPorcentajes,
    calcularNotaParcial,
    calculatNotaFinal,
    mostrarParciales,
};