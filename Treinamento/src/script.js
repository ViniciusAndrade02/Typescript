"use strict";
class Quadrado {
    lado = 4;
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    Area() {
        console.log(`Área do quadrado: ${this.valor * this.valor}`);
    }
    Perimetro() {
        console.log(`Área do quadrado: ${this.valor * this.lado}`);
    }
}
function Rodar() {
    const input = document.querySelector('input');
    if (input) {
        const valor = parseInt(input.value);
        if (!isNaN(valor)) {
            const sla = new Quadrado(valor);
            console.log(sla.Area());
            console.log(sla.Perimetro());
        }
    }
}
const usuario = {
    fistName: 'vinicius',
    LastName: 'andrade',
    age: 20
};
console.log(usuario.fistName);
