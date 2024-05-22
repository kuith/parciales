export class Parcial {
    constructor({ nombre, peso }) {
        this.nombre = nombre;
        this.peso = peso;
        this.nota = 0;
        this.id = Date.now();
    }
}