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
        console.log(`Perimetro: ${this.valor * this.lado}`);
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
    age: 20,
    loteria: [],
    sortiado: [10, 20, 30, 40, 50, 60],
    tentativas: 0,
    pontos: 0
};
const btntentar = document.querySelector('.btn-tentar');
const btnloteria = document.querySelector('.btn-loteria');
function Loteria() {
    const numerosLoteria = document.querySelectorAll('.inputLoteria');
    numerosLoteria.forEach((item) => {
        const numeroselecionado = +item.value;
        usuario.loteria.push(numeroselecionado);
    });
    for (let i = 0; i < 5; i++) {
        if (usuario.sortiado[i] == usuario.loteria[i]) {
            console.log(`Parabens acertasse: ${usuario.sortiado[i]}`);
            usuario.pontos = usuario.pontos + 1;
            if (usuario.pontos == 5) {
                alert(`ALELEUIAAAAA \n Foram necessários: ${usuario.tentativas} tentativas`);
            }
        }
    }
    console.log(`Numeros que voce sorteou: ${usuario.loteria}`);
    usuario.tentativas += 1;
    if (btnloteria) {
        btnloteria.disabled = true;
    }
    if (btntentar) {
        btntentar.disabled = false;
    }
}
function tentar() {
    LimparInput();
    limparArray();
    if (btnloteria) {
        btnloteria.disabled = false;
    }
    if (btntentar) {
        btntentar.disabled = true;
    }
}
function LimparInput() {
    const numerosLoteria = document.querySelectorAll('.inputLoteria');
    numerosLoteria.forEach((item) => {
        item.value = "";
    });
}
function limparArray() {
    usuario.loteria = [];
    usuario.pontos = 0;
}
const inputs = document.querySelectorAll('.inputLoteria');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); // Impede o envio do formulário padrão
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Mova o foco para o próximo input
            }
        }
    });
});
