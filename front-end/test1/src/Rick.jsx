import React, {Component} from "react";
import './Rick.css';

class Rick extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="Rick">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({name, image}) =>{
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>                
            )
          })}
        </div>
      </div>
    );
  }   
}

export default Rick;

/*
//Requisições e componentDidMount

Agora, vamos dar uma atenção especial para o método componentDidMount , que será um dos que você mais usará daqui pra frente.
Como você já deve ter percebido, trabalhar com requisições à APIs é uma prática muito comum no cotidiano de quem desenvolve. Operações assíncronas requerem uma atençãozinha extra e, para que não ocorram problemas, caso sua requisição tenha que retornar algo para ser renderizado logo que a página carregar, é muito importante que você entenda bem a importância dessa etapa do ciclo de vida.

Para entender melhor, usando React, vamos consumir uma API de Rick and Morty, cujo o endpoint é https://rickandmortyapi.com/api/character , e exibir na tela os nomes dos personagens e suas respectivas fotos.
Note que a chave results é a que contém as informações que queremos, por isso é ela que estamos setando no nosso estado. Verificar se você está inserindo a chave certa é essencial e por isso você não deve deixar de ler a documentação da API que irá consumir para ver como os seus dados são retornados!
Depois disso, com nosso estado já recebendo o resultado da API , poderíamos fazer uma desestruturação no estado e fazer apenas um .map para iterar o array e renderizá-lo na tela. Outro detalhe importante aqui é o uso da key , que deve ser um identificador único, como se fosse um ID para cada item da lista iterada. Lembre-se: a função das keys é ajudar o React a identificar quais itens sofreram alterações para que o React não precise renderizar novamente toda a lista novamente e sim apenas se preocupar com a parte modificada.
Agora, é só criar tags para encapsular as informações que queremos, ou seja, o nome e a imagem dos personagens. Ou será que há mais o que fazer?!
Você certamente notou que continua aparecendo apenas o título que tínhamos colocado anteriormente na página. Se você der um console.log em characters irá notar que o array continua vazio. Aquele velho problema do código ser lido antes da API retornar ataca novamente, mas nada tema, porque com o componentDidMount não há problema!
Todos os nossos problemas serão resolvidos apenas chamando a função fetchCharacters dentro do componentDidMount , mas, caso prefira, você pode fazer o fetch diretamente dentro dele. Irá funcionar das duas formas.
//  Primeira maneira:
    fetchCharacters() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }

    componentDidMount() {
      this.fetchCharacters();
    }

//  Segunda maneira:
    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }
*/    