export class Parcial {
    constructor({ nombre, peso, nota }) {
        this.nombre = nombre;
        this.peso = peso;
        this.nota = nota;
        this.id = Date.now();
    }
}