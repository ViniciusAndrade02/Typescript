"use strict";
class Quadrado {
    lado = 4;
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    Area() {
        console.log(this.valor * this.valor);
    }
    Perimetro() {
        console.log(this.valor * this.lado);
    }
}
const sla = new Quadrado(5);
console.log(sla.Area());
console.log(sla.Perimetro());
