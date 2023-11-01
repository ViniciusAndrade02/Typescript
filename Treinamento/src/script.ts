class Quadrado{

  readonly lado = 4
  valor:number;
  

  constructor(valor:number){
    this.valor = valor;
  }

  Area(){
    console.log(`Área do quadrado: ${this.valor * this.valor}`)
    
  }

  Perimetro(){
    console.log(`Perimetro: ${this.valor * this.lado}`)
  }
}

function Rodar(){
  const input: HTMLInputElement | null = document.querySelector('input');

  if (input) {
    const valor = parseInt(input.value);
  
    if (!isNaN(valor)) {
      const sla = new Quadrado(valor);
      console.log(sla.Area());
      console.log(sla.Perimetro());
    }
  }
  
}



type User = {
  fistName:string,
  LastName:string,
  age:number,
  loteria:number[],
  sortiado:number[],
  tentativas: number,
  pontos:number
}

const usuario:User = {
  fistName:'vinicius',
  LastName:'andrade',
  age:20,
  loteria:[],
  sortiado:[10,20,30,40,50,60],
  tentativas:0,
  pontos:0


}
const btntentar: HTMLButtonElement | null = document.querySelector('.btn-tentar');
const btnloteria: HTMLButtonElement | null = document.querySelector('.btn-loteria');

function Loteria(){
  const numerosLoteria: NodeListOf<HTMLInputElement> = document.querySelectorAll('.inputLoteria');

  numerosLoteria.forEach((item) => {
    const numeroselecionado:number = +item.value
    usuario.loteria.push(numeroselecionado)

  })

  for(let i=0;i<5;i++){
    if(usuario.sortiado[i] == usuario.loteria[i]){
      console.log(`Parabens acertasse: ${usuario.sortiado[i]}`)
      usuario.pontos = usuario.pontos + 1

      if(usuario.pontos == 5){
        alert(`ALELEUIAAAAA \n Foram necessários: ${usuario.tentativas} tentativas`)
        
      }
    }
  }

  console.log(`Numeros que voce sorteou: ${usuario.loteria}`)
  usuario.tentativas+= 1
  
  if (btnloteria) {
    btnloteria.disabled = true;
  }

  if (btntentar) {
    btntentar.disabled = false;
  }
  

}

function tentar(){
  LimparInput()
  limparArray()

  if (btnloteria) {
    btnloteria.disabled = false;
  }
  if (btntentar) {
    btntentar.disabled = true;
  }
}

function LimparInput(){

  const numerosLoteria: NodeListOf<HTMLInputElement> = document.querySelectorAll('.inputLoteria');
  numerosLoteria.forEach((item) => {
    item.value = ""
  })
}

function limparArray(){
  usuario.loteria = [];
  usuario.pontos = 0
}

const inputs = document.querySelectorAll('.inputLoteria') as NodeListOf<HTMLInputElement>;

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault(); // Impede o envio do formulário padrão

      if (index < inputs.length - 1) {
        (inputs[index + 1] as HTMLInputElement).focus(); // Mova o foco para o próximo input
      }
    }
  });
});