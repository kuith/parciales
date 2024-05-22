const sumaPorcentajes = (parciales) => {
    const porcentajeTotal = parciales.peso.reduce(
      (prev, next) => Number(prev) + Number(next),0);
    return porcentajeTotal
}

const calcularNotaParcial = (nota, peso) => {
    const notaParcial = (nota * peso) / 100;
    return notaParcial;
}

const calcularNotaFinal = () => {
    const notaFinal = 0;
    return notaFinal;
}

export const utilidades = {
    sumaPorcentajes,
    calcularNotaParcial,
    calcularNotaFinal
};