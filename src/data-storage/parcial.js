export class Parcial {
    constructor({ nombre, peso, nota, notaPonderada }) {
        this.nombre = nombre;
        this.peso = peso;
        this.nota = nota;
        this.notaPonderada = notaPonderada;
        this.id = Date.now();
    }
}