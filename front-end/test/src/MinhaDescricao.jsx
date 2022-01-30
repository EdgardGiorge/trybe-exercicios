import React, { Component } from "react";


class MinhaDescricao extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    console.log(this)
    console.log('Clicou e usou o constructor')    
  }
  render() {
    return(
      <div className="App">
      <h1>Giorge</h1>
      <p>Sou Edgard Giorge, mas costumo ser chamado de Giorge, tenho 43 anos, sou formado em Administração e  Eletrônica. No aspecto social, gosto de quase todos os tipos de música, jogo game, pratico corrida, sou a maioria das vezes ‘caseiro’.  No aspecto profissional, atuei em várias áreas sempre me desafiando.
      Sou de São Paulo mas já morei em muitas partes do Brasil
      O mais importante pra mim é  estar em companhias e viver ao lado de pessoas agradáveis.</p>
      <button onClick={this.handleClick}>Test Constructor</button>
      </div>

    )
  }
}

export default MinhaDescricao;

/* 

// Vinculando funções à classe com this e bind no constructor

Vinculando funções à classe com this e bind no constructor
this ,é um objeto que o react cria e entrega pra nós, dentro dele tem muitas coisas dentre eles o prop e state
constructor() , é uma método/função interna que podemos subscrevê-la , pra isso dentro dela usamos uma outra função chamada… super(). Conseguimos então, vincular(bind) ou se fazer acessar o this dentro das funções com a seguinte sintaxe:
constructor  () {
  super()
  this.<nomeDaFunção> = this.<nomeDaFunção>.bind(this)
}
 <nomeDaFunção> , a função então é escrita dentro da classe (sem precisar escrever function antes da função), antes do render() , assim se consegue renderizar a função!
 
 // Para Fixar:
 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
4 - Garanta acesso ao objeto this na função que você declarou.

 constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    console.log(this)
    console.log('Clicou e usou o constructor')    
  }
  render() {
    return(
      <div className="App">      
      <button onClick={this.handleClick}>Test Constructor</button>
      </div>

    )
  }
}
*/