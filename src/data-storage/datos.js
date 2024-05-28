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

const getParcial = id => {
	let parcial = parciales.filter((parcial) => parcial.id === id);
		return parcial
}

const getTotalPeso = par => {
	let total = par.reduce((acumulador, actual) => Number(acumulador) + Number(actual.peso), 0);
	return total;
}

const pesoParcialOk = (pesoTotalActual, pesoNuevoParcial) => {
	return ((Number(pesoTotalActual) + Number(pesoNuevoParcial)) > 100);
}

const getNotaParcial = parcial => {
	return parcial.nota;
}

const setNotaParcial = (parcial, nuevaNota) => {
	parcial.nota = nuevaNota;
}

const actualizarNota = (id, nuevaNota) => {
	let parcialCambiar = getParcial(id);
	setNotaParcial(parcialCambiar[0], nuevaNota);
}

const calcularNotaFinal = () =>{}

export const dataStorage = {
    addParcial,
    removeParcial,
    getParciales,
    getParcial,
    getTotalPeso,
    actualizarNota,
    calcularNotaFinal,
};