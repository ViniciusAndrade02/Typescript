class Quadrado{

  readonly lado = 4
  valor:number;
  

  constructor(valor:number){
    this.valor = valor;
  }

  Area(){
    console.log(this.valor * this.valor)
    
  }

  Perimetro(){
    console.log(this.valor*this.lado)
  }
}


const sla = new Quadrado(5)
console.log(sla.Area())
console.log(sla.Perimetro())