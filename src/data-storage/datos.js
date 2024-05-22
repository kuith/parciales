import { Parcial } from './parcial.js';

let parciales = [];

const addParcial = data => {
    const parcial = new Parcial(data);
	if(pesoParcialOk(getTotalPeso(getParciales()), parcial.peso)){
		alert("No se puede hacer. Te pasas del 100 en la suma de porcentajes");
	} else {
		parciales = [...parciales, parcial];
	}
}

const removeParcial = id => {
    parciales = parciales.filter( parcial => parcial.id !== id);
}

const getParciales = () => [...parciales];

const getTotalPeso = par => {
	let total = par.reduce((acumulador, actual) => Number(acumulador) + Number(actual.peso), 0);
	return total;
}

const pesoParcialOk = (pesoTotalActual, pesoNuevoParcial) => {
	return ((Number(pesoTotalActual) + Number(pesoNuevoParcial)) > 100);
}

const actualizarNota = (parcial, nota) => {
	
	console.log("Por actualizarnota del datos")
}

export const dataStorage = {
    addParcial,
    removeParcial,
    getParciales,
    getTotalPeso,
    actualizarNota,
};