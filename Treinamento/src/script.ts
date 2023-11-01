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
    console.log(`Área do quadrado: ${this.valor * this.lado}`)
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
  age:number
}

const usuario:User = {
  fistName:'vinicius',
  LastName:'andrade',
  age:20

}

console.log(usuario.fistName)