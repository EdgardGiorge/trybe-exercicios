import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
            16/03 - 17.1 - Context API do React

O que vamos aprender?
Você vai estender seus conhecimentos em React aprendendo alguns recursos mais avançados que a ferramenta oferece. Hoje, especificamente, você vai aprender a utilizar a Context API . Essa funcionalidade avançada do React permite que você compartilhe estado entre vários componentes em uma árvore de componentes, sem que seja necessário passá-lo manualmente através de props do componente que o armazena até aquele que de fato o utiliza. É, muitas vezes, usada como alternativa ao Redux.

Diferença entre o redux e context API (nativo do react): o Redux cria um estado e qualquer componente da aplicação desde que dispare uma ação consegue alterar este estado. Já o Context API ele cria um estado e todos os filhos deste componente que criou o estado consegue acessar e alterar ele.
Você será capaz de:
Utilizar a Context API do React para gerenciar estado.
 Por que isso é importante?
Você já aprendeu os principais conceitos que envolvem uma aplicação React: componentes, props, estado, children, proptypes, lifecycle methods etc. Aprendeu também a utilizar algumas bibliotecas externas que simplificam algumas tarefas muito frequentes em React, como roteamento e gerenciamento de estado. Com isso, você já é capaz de construir aplicações React complexas e plenamente funcionais.
Mas há mais. React possui vários recursos avançados. Não é estritamente necessário conhecê-los, mas eles podem ajudar a tornar suas aplicações mais simples, concisas e eficientes. Em alguns casos, é possível até mesmo eliminar a necessidade de utilizar uma biblioteca externa, como o Redux, para adereçar certos problemas.
A Context API é um recurso do React que permite compartilhar estado entre diversos componentes em uma árvore de componentes sem a necessidade de se passar props e callbacks manualmente entre eles ou de utilizar uma ferramenta específica para isso.

O problema
Antes de falarmos o que é Context API e como ela pode ser utilizada, vamos entender qual é sua motivação e que tipo de problema ela resolve.
Para começar, vamos imaginar uma hierarquia de componentes um tanto quanto lúdica, mas que serve aos nossos propósitos. Imagine que temos quatro componentes, representando uma família: GreatGrandfather , Grandmother , Father e Daughter . Como você deve imaginar, esses componentes representam, respectivamente, um bisavô, uma avó, um pai e uma filha de uma família. O bisavô deixou acumulada uma herança de R$ 1.000.000 e, atualmente, só sua neta (o componente Daughter ) está interessada em saber o valor da herança (OK, sabemos que na vida real as coisas provavelmente seriam bem diferentes 😬).

import React, { Component } from 'react';

class GreatGrandfather extends Component {
  state = {
    inheritance: 1000000,
  }

  render() {
    return (
      <Grandmother inheritance={this.state.inheritance} />
    );
  }
}

function Grandmother(props) {
  return (
    <Father inheritance={props.inheritance} />
  );
}

function Father(props) {
  return (
    <Daughter inheritance={props.inheritance} />
  );
}

function Daughter(props) {
  return (
    <div>
      <span>
        {`Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`}
      </span>
    </div>
  );
}

Até aí, é um código React padrão. Há um componente GreatGrandfather que mantém estado, e esse estado é passado através de props até o componente que precisa utilizá-lo, Daughter . Mas qual é o problema com essa estrutura?
GreatGrandfather , que mantém o estado, está no nível mais alto da árvore, enquanto Daughter , que utiliza este estado, está três níveis abaixo. Por isso, somos obrigados a passar o dado por toda a árvore de componentes. Grandmother e Father não utilizam essse dado, mas precisam recebê-lo e repassá-lo para seus filhos, pois existe um componente abaixo na árvore que necessita dele. Esse processo é comumente chamado de prop drilling , porque você está "perfurando" ( drilling ) vários componentes com props apenas para que os dados cheguem até o componente que faz uso deles.
Vamos supor agora que você queira permitir que Daughter não só tenha acesso ao valor da herança, mas que possa também gastá-la. Como faríamos isso? A herança é parte do estado de GreatGrandfather , então somente esse componente pode alterá-la, utilizando o método setState . Contudo, o componente que de fato tomará a iniciativa de atualizar o estado está três níveis abaixo na árvore. A solução é criar um handler em GrandGreatfather e passá-lo como callback por todos os componentes na árvore até Daughter , incorrendo mais uma vez em prop drilling.

import React, { Component } from 'react';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    return (
      <Grandmother
        inheritance={this.state.inheritance}
        spendInheritance={this.spendInheritance}
      />
    );
  }
}

function Grandmother(props) {
  return (
    <Father
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

function Father(props) {
  return (
    <Daughter
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

function Daughter(props) {
  return (
    <div>
      <span>
        `Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`
      </span>
      <button type="button" onClick={props.spendInheritance}>
        Gastar Herança!
      </button>
    </div>
  );
}

É claro, isso é um processo lento, tedioso e propenso a erros. Se você errar o nome de alguma prop, por exemplo, vai gastar um tempo tentando descobrir em que ponto a passagem de props está errada.
Passar props por um ou dois níveis na árvore é aceitável, mas, à medida que o número de componentes e o nível de aninhamento na árvore aumenta, prop drilling torna-se insustentável. Se não se convenceu ainda, tente imaginar o seguinte, no nosso exemplo:
Cada pessoa agora tem múltiplos filhos. Ou seja, abaixo do bisavô, há múltiplos avôs, e abaixo de cada um há vários pais, que por sua vez possuem múltiplos filhos.
Há bem mais de três níveis na árvore genealógica de componentes.
O estado agora é composto de 5 propriedades, ao invés de uma. Para cada propriedade, há um método handler que lida com alterações em seu valor.
Todos esses campos do estado e todos os seus handlers precisam ser passados como prop por todos os componentes na árvore porque agora todos querem ser capazes de ler e atualizar os dados no estado de GreatGrandFather .
Seu linter lhe recomenda sempre declarar as PropTypes de um componente. Você vai ter que fazer isso para todos as props em todos os componentes, mesmo aquelas que só são repassadas para os níveis mais baixos.
Consegue imaginar o pesadelo? 😱😰😫🤢 Em uma aplicação suficientemente grande, não é difícil encontrar um cenário semelhante a esse.

A solução
A essa altura, você já deve conhecer uma forma de resolver esse problema: adicionar Redux ou outra biblioteca de gerenciamento de estado à aplicação. O estado seria movido para um store e somente os componentes que precisassem acessá-lo se conectariam ao store e acessariam o estado diretamente. Sem mais prop drilling 😃. Esse é exatamente o tipo de problema que o Redux foi desenhado para resolver.
Porém, há uma alternativa, fornecida por padrão pelo React desde a versão 16.3.0: Context API. Para recapitular o problema e entender seu funcionamento, veja o vídeo abaixo.
Agora, vamos recapitular o funcionamento da Context API.
Context API fornece um meio de passar dados através da árvore de componentes sem a necessidade de passar props manualmente em cada nível. Para criar um contexto, utiliza-se o método createContext do React.

import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);

createContext retorna um objeto que possui dois componentes como propriedades: Provider e Consumer . O valor passado como parâmetro para createContext será utilizado como o valor padrão do contexto, caso nenhum valor seja especificado ao utilizar o Provider.
Provider é responsável por "prover" os dados para os componentes que estão nos níveis abaixo dele na árvore de componentes. Ele aceita uma prop obrigatória value com os dados que serão compartilhados. Esse valor pode ser qualquer valor JavaScript, como um número, string, array ou objeto.

<MyContext.Provider value={ algum valor compartilhado }>
<MyComponent>
<MyOtherComponent>
  ...
</MyOtherComponent>
<MyComponent>
</MyContext.Provider>

Consumer é utilizado sempre que um componente precisa "consumir" o valor do contexto.

function MyComponent() {
return (
<MyContext.Consumer>
  {(value) => {
     renderiza algo utilizando o valor recebido do contexto 
  }}
</MyContext.Consumer>
)
}

Via de regra, o contexto é utilizado em vários arquivos diferentes, seja como provider, seja como consumer. Assim, é usual criá-lo e exportá-lo em arquivo separado e importá-lo sempre que for necessário.

// MyContext.js

import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;


// MyComponent.js

import React from 'react';

import MyContext from './MyContext';

function MyComponent() {
return (
<MyContext.Provider value={123}>
  <MyOtherComponent />
</MyContext.Provider>
)
}

export default MyComponent;


// MyOtherComponent.js

import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
return (
<MyContext.Consumer>
  {(value) => (
    <Something />
  )}
</MyContext.Consumer>
)
}

export default MyOtherComponent;

Provider e Consumer

Quando se utiliza um consumer , React encontrará na árvore o provider correspondente mais próximo e utilizará seu valor. Caso não seja encontrado um provider , o valor do contexto utilizado será o valor passado para createContext quando o contexto foi criado.
Por exemplo, imagine que criamos um contexto com 1 como valor default.

const MyContext = createContext(1);

Se colocamos um provider na árvore e passamos para ele 1000000 como valor, este será o valor recebido quando utilizamos um consumer.

<MyContext.Provider value={1000000}>
<MyComponent>
<MyOtherComponent>
  ...
</MyOtherComponent>
<MyComponent>
</MyContext.Provider>

function MyComponent() {
return (
<MyContext.Consumer>
  {(value) => {  value = 1000000 
     renderiza algo utilizando o valor recebido do contexto 
  }}
</MyContext.Consumer>
)
}

Porém, se não colocarmos o Provider na árvore, quando um componente acessar o contexto através de consumer , o valor recebido será 1.

 Não existe mais o Provider nessa árvore 
<MyComponent>
<MyOtherComponent>
...
</MyOtherComponent>
<MyComponent>

function MyComponent() {
return (
<MyContext.Consumer>
  {(value) => {  value = 1 
     renderiza algo utilizando o valor recebido do contexto 
  }}
</MyContext.Consumer>
)
}

Render props

Atente para a sintaxe quando se utiliza um Consumer . Um componente consumer deve receber como children uma função. Essa função recebe como parâmetro o valor passado na prop value do Provider (nos exemplos acima, também chamamos o parâmetro da função de value , mas poderia ser qualquer nome) e deve retornar algo a ser renderizado. Esse ponto é muito importante, então certifique-se de compreendê-lo bem.
Se essa sintaxe lhe parece estranha, lembre-se de que uma função em JavaScript é um valor como qualquer outro, e que um componente pode receber como children um componente, uma tag HTML ou um valor JavaScript qualquer. Quando um componente recebe um valor, ele deve ser interpolado dentro de chaves {} . É exatamente isso o que foi feito no nosso exemplo.
Esse é um pattern em React conhecido como render props . Na seção de recursos adicionais você encontrará materiais que explicam em detalhes como esse pattern funciona e algumas situações em que ele pode ser utilizado.
Voltando ao nosso exemplo inicial, eis como nossa aplicação poderia ser refatorada utilizando Context API.

import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
constructor(props) {
super(props);
this.state = {
  inheritance: 1000000,
}
this.spendInheritance = this.spendInheritance.bind(this);
}

spendInheritance() {
this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
}

render() {
const contextValue = {
  inheritance: this.state.inheritance,
  spendInheritance: this.spendInheritance
};

return (
  <FamilyContext.Provider value={contextValue}>
    <Grandmother />
  </FamilyContext.Provider>
);
}
}

function Grandmother(props) {
return <Father />;
}

function Father(props) {
return <Daughter />;
}

function Daughter() {
return (
<FamilyContext.Consumer>
  {({ inheritance, spendInheritance }) => (
    <div>
      <span>
        `Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô`
      </span>
      <button type="button" onClick={spendInheritance}>
        Gastar Herança!
      </button>
    </div>
  )}
</FamilyContext.Consumer>
);
}

Observe que agora Father e Daughter não recebem props. Daughter acessa o estado diretamente, utilizando um Consumer . Sem mais prop drilling!

Funções em contexto

O exemplo anterior ilustra como funções podem ser colocadas em um contexto para permitir acesso em qualquer componente em que o contexto esteja disponível. De fato, uma vez que funções em JavaScript são valores como outro qualquer, não há diferença entre adicionar uma função ou qualquer outro valor dentro do objeto que será disponibilizado pelo contexto.
Você só deve se lembrar de fazer o binding no construtor ou criar a função como arrow function sempre que ela for utilizada como callback a partir de outro componente ou função.
Não se preocupe com o modo de como os componentes Grandmother , Father e Daughter são construídos. Na próxima aula vamos aprofundar um pouco mais sobre a utilização de funções para a construção de componentes.

Contexto em componentes de classe

A essa altura, você já sabe que é possível criar um componente utilizando funções ou classes. Em ambas as formas, você pode utilizar um consumer para acessar o contexto, como fizemos em todos os exemplos até agora.
Em componentes de classe, também é possível utilizar a propriedade contextType .
contextType é uma propriedade disponível em qualquer componente de classe, e seu único propósito é fazer com que seja possível acessar o valor de um contexto através de this.context , sem a necessidade de utilizar um consumer, em qualquer lifecycle method do componente, incluindo a função render .
Somente um contexto pode ser atribuído a contextType . Caso um componente de classe precise acessar mais de um contexto, será necessário utilizar um consumer, como exemplificado anteriormente.

const MyContext = createContext();

class MyComponent extends React.Component {
componentDidMount() {
const value = this.context;
// ...
}

render() {
const value = this.context;
// ...
}
}

MyComponent.contextType = MyContext;

Aula ao vivo:

excalidraw da aula ao vivo:

https://excalidraw.com/#json=2b5ULY9KVvTgtam4bLH05,zV1QATOoSY93qLbB0XcYwg

*/
