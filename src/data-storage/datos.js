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

const getPesoParcial = id => {
	let peso = getParcial(id)[0].peso;
	return peso;
}

const getNotaPonderada = id => {
	let notaPonderada = getParcial(id)[0].notaPonderada;
	return notaPonderada;
}

const setNotaParcial = (parcial, nuevaNota) => {
	parcial.nota = nuevaNota;
}

const setNotaPonderada = (parcial, nuevaNotaPonderada) => {
    parcial.notaPonderada = nuevaNotaPonderada;
};

const actualizarNota = (id, nuevaNota) => {
	let parcialCambiar = getParcial(id);
	if (comprobarNotaValida(nuevaNota)) {
        setNotaParcial(parcialCambiar[0], nuevaNota);
        setNotaPonderada(parcialCambiar[0], calcularNotaPonderada(id));
    } else {
        alert("La nota debe estar entre 0 y 10.");
    }
}

const comprobarNotaValida = nota => {
	if (nota >= 0 && nota <= 10) {
		return true
	}
	return false
	
}

const calcularNotaPonderada = (id) => {
	let parcial = getParcial(id);
	let notaPonderada = (parcial[0].nota * parcial[0].peso)/100;
	return notaPonderada;
}

const getNotaFinal = (parciales) => {
    let total = parciales.reduce(
        (acumulador, actual) => Number(acumulador) + Number(actual.notaPonderada),0);
    return total;
};



export const dataStorage = {
    addParcial,
    removeParcial,
    getParciales,
    getParcial,
	getTotalPeso,
	getNotaPonderada,
    actualizarNota,
    getNotaFinal,
    calcularNotaPonderada,
};