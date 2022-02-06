// import React, {Component} from "react"
// import './Form.css'

// class Form extends Component {
//   constructor() {
//     super()

//     this.handleChange = this.handleChange.bind(this)

//     this.state = {
//       estadoFavorito: '',
//       nome: '',
//       email: '',
//       idade: 0,
//       vaiComparecer: false,
//       palavraChavefavorita: ''
//     }
//   }

//   handleChange(event) {
//     this.setState({estadoFavorito: event.target.value})
//     console.log(event.target.value)
//   }
//   render() {
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <label>
//             Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
//             <textarea 
//             name="estadoFavorito" 
//             value={this.state.estadoFavorito} 
//             onChange={this.handleChange} />
//           </label>
          
//           <label>
//             Email
//             <input type="email" name="email"/>
//           </label>
          
//           <label>
//             Nome
//             <input type="text" name="nome"/>
//           </label>
          
//           <label>
//             Idade
//             <input type="number" name="idade"/>
//           </label>
//           <label>
//             Vai comparecer à conferência?
//             <input type="checkbox" name="vaiComparecer"/>
//           </label>

//           <label>
//             Escolha sua palavra chave favorita:
//             <select name="palavraChaveFavorita">
//               <option value="estado">Estado</option>
//               <option value="evento">Evento</option>
//               <option value="props">Props</option>
//               <option value="hooks">Hooks</option>
//             </select>
//           </label>        
//         </form>
//       </div>      
//     );
//   }
// }

// export default Form;

/*
                        11.2 - Formulários no React
//  Componentes controlados
 
                        
Documentação formulários em React:
https://pt-br.reactjs.org/docs/forms.html

No JavaScript "tradicional", que vocês usavam nos primeiros blocos, você fez formulários, certo? Pois bem, se pergunte o seguinte: onde ficavam os dados que vocês inseriam nesses formulários? Os dados dos campos numéricos, de texto, select ... Eles não ficavam em nenhuma variável declarada por você certo?
Pois então! Se você reparar com um inspect , vai ver que os dados dos campos preenchidos sempre aparecem no próprio DOM quando inseridos. Você acredita que é aí que esses dados são salvos? Sim! No próprio DOM. Meio estranho, certo? Pensando numa aplicação React , onde nós salvaríamos os dados do nosso formulário? Pensando no formulário, lógico, como um componente.
... No Estado , correto?
Pois é! Como todos os dados que concernem os componentes do React, os dados de um formulário também devem ser salvos no Estado ! E eis o pulo do gato: a partir do momento que a informação do forms não é mais salva no próprio elemento, no DOM, mas no Estado do componente que o contém, passamos a dizer que esse elemento é um Componente Controlado!
 Atenção! Essa nomenclatura, oficial do React, é confusa. Estamos dizendo aqui que o elemento do formulário é um componente controlado. Não estamos falando dos componentes React aqui, mas dos elementos que compõem o formulário! Cuidado para não confundir.
💡 A extensão do Google Chrome React Developer Tools ( https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi ) é muito útil para se desenvolver aplicativos React! Não deixe de baixá-la.
*/

// event handlers genéricos

// import React, {Component} from "react"
// import './Form.css'

// class Form extends Component {
//   constructor() {
//     super()

//     this.handleChange = this.handleChange.bind(this)

//     this.state = {
//       estadoFavorito: '',
//       nome: '',
//       email: '',
//       idade: 0,
//       vaiComparecer: false,
//       palavraChavefavorita: '',
//       anecdote: ''
//     }
//   }

//   handleChange({target}) {
//     const { name } = target
//     const value = target.type === 'checkbox' ? target.checked : target.value // elemento tipo checkbox é com target.checked , tipo 

//     this.state ({
//       [name]: value
//     })
    
//   }
  
//   render() {
//     const { estadoFavorito, email, nome, idade, vaiComparecer, palavraChaveFavorita, anecdote }= this.state
//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <label>
//             Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
//             <textarea 
//             name="estadoFavorito" 
//             value={estadoFavorito} /* sem desconstruir: this.state.estadoFavorito */
//             onChange={this.handleChange} />
//           </label>
          
//           <label>
//             Email
//             <input type="email" name="email"  value={email} onChange={this.handleChange}/>
//           </label>
          
//           <label>
//             Nome
//             <input type="text" name="nome" value={nome} onChange={this.handleChange}/>
//           </label>
          
//           <label>
//             Idade
//             <input type="number" name="idade" value={idade} onChange={this.handleChange}/>
//           </label>
//           <label>
//             Vai comparecer à conferência?
//             <input type="checkbox" name="vaiComparecer" value={vaiComparecer} onChange={this.handleChange}/>
//           </label>

//           <label>
//             Escolha sua palavra chave favorita:
//             <select name="palavraChaveFavorita" value={palavraChaveFavorita} onChange={this.handleChange}>
//               <option value="estado">Estado</option>
//               <option value="evento">Evento</option>
//               <option value="props">Props</option>
//               <option value="hooks">Hooks</option>
//             </select>
//           </label>

//           <fieldset>
//               <legend>Texto e arquivos</legend>
//               <label htmlFor="anecdote">
//                 Anedota:
//                 <textarea
//                   id="anecdote"
//                   name="anecdote"
//                   onChange={ this.handleChange }
//                   value={ anecdote }
//                 />
//               </label>

//               <input type="file" /* No React, um <input type="file" /> é sempre um componente não controlado porque seu valor só pode ser definido por um usuário e não programaticamente */ />
//             </fieldset>        
//         </form>
//       </div>      
//     );
//   }
// }

// export default Form;

/*
event handlers genéricos ... descrição

Uma excelente forma de criarmos formulários 100% com componentes controlados é fazermos um event handler genérico, capaz de atualizar o estado de todos os componentes com a mesma lógica.
O truque é o seguinte:
a) Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente ( name="estadoFavorito" value={this.state.estadoFavorito} 
b) No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo. const { name } = target 
c) Interpole o nome do componente como chave do estado numa sintaxe como a acima. 
this.state ({
[name]: value
})
*/

/*
Transmitindo informações de componente filho para componente pai

A transmissão de informações de um componente filho para um componente pai é um dos conceitos primordiais de React. Ele se baseia nos seguintes pilares:
a) O componente pai detém o Estado e controla completamente como ele será atualizado. Isso significa que as funções que manipularão o estado devem ser declaradas sempre nele mesmo.
b)Quando algum componente filho deve passar alguma informação ao componente pai, ele deve receber como props a função que atualiza o estado do pai e dar a ela, como parâmetro, a informação pedida.
c) A informação transmitida dessa forma será inserida no estado do componente pai.
No código abaixo vemos um exemplo disso acontecendo numa aplicação.
*/
import React, {Component} from "react"
import EstadoFavorito from "./EstadoFavorito"
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChavefavorita: '',
      anecdote: ''
    }
  }

  handleChange({target}) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value // elemento tipo checkbox é com target.checked , tipo 

    this.setState({
      [name]: value
    })
    
  }
  
  render() {
    const { estadoFavorito, email, nome, idade, vaiComparecer, palavraChaveFavorita, anecdote }= this.state
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={estadoFavorito} /* define uma prop no pai */ handleChange={this.handleChange} /*, no pai passar a função que manipula o estado como prop *//> 
          
          
          <label>
            Email
            <input type="email" name="email"  value={email} onChange={this.handleChange}/>
          </label>
          
          <label>
            Nome
            <input type="text" name="nome" value={nome} onChange={this.handleChange}/>
          </label>
          
          <label>
            Idade
            <input type="number" name="idade" value={idade} onChange={this.handleChange}/>
          </label>
          <label>
            Vai comparecer à conferência?
            <input type="checkbox" name="vaiComparecer" value={vaiComparecer} onChange={this.handleChange}/>
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" value={palavraChaveFavorita} onChange={this.handleChange}>
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>

          <fieldset>
              <legend>Texto e arquivos</legend>
              <label htmlFor="anecdote">
                Anedota:
                <textarea
                  id="anecdote"
                  name="anecdote"
                  onChange={ this.handleChange }
                  value={ anecdote }
                />
              </label>

              <input type="file" /* No React, um <input type="file" /> é sempre um componente não controlado porque seu valor só pode ser definido por um usuário e não programaticamente */ />
            </fieldset>        
        </form>
      </div>      
    );
  }
}

export default Form;

/*              Aula ao vivo
Para não precisar criar um componente para cada input, pode se criar um componente padrão pra quase todos os componentes... exemplo da aula ao vivo

<Login.js> (pai)

import React from 'react';
import Input from './Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'murillo',
      password: '',
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { password, email, message } = this.state;
    return (
      <section>
        <h2>Login</h2>
        <form>
          <Input
            name="email"
            value={ email }
            type="email"
            onInputChange={ this.handleChange }
          />
          <Input
            name="password"
            value={ password }
            type="password"
            onInputChange={ this.handleChange }
          />
          <Input
            name="message"
            value={ message }
            type="text"
            onInputChange={ this.handleChange }
          />
          <button type="submit">FAZER LOGIN</button>
        </form>
      </section>
    );
  }
}

export default Login;

<Input.js> (filho)

import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { value, onInputChange, name, type } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onInputChange }
      />
    );
  }
}
export default Input;
*/