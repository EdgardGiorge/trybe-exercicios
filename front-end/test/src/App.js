/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App; */

/* Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:
1- Crie um novo projeto utilizando npx create-react-app nome-app
⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️
2- Na pasta src , acesse App.js e remova todo o conteúdo da função App , de modo que ela fique assim: 
3- Na pasta src , crie um arquivo chamado Component.js crie um componente que retorne um <h1> com o seu nome um paragráfo, <p> , com uma breve descrição sobre você.
Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um <div>.
4- Importe seu componente em App.js de modo que ele seja renderizado na tela quando a aplicação for iniciada, npm start. Para isso você precisará utilizar o export default para exportar seu componente, o export default é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo Component.js deverá ficar da seguinte forma:
5- Execute sua aplicação, npm start , e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns 🎉 */

 import logo from './logo.svg';
 import './App.css';
 import MinhaDescricao from './MinhaDescricao';

function App() {
  return (<MinhaDescricao />);
}


export default App;

/* Exercícios

1- Crie um novo projeto utilizando npx create-react-app.

Solução: npx create-react-app nomeDoSeuApp

2- Crie uma lista de tarefas simples que:
Utilize a função Task dentro do componente App .
Leia as tarefas de dentro de um Array.
Use a função map para criar cada item da lista no HTML.

Solução:

    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
        );
      }
    }

    export default App;

3- Crie um novo projeto utilizando npx create-react-app.
a) Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;
b) No arquivo Header.jsx , crie uma classe React, chamada Header. Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
c) No arquivo App.js , importe o componente Header criado anteriormente;
d) Renderize o componente Header no App.js ;
e) Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;
f) Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
g) Ainda no arquivo Content.jsx , adicione o seguinte array. A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:

O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`

Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.

h) Exporte o componente Content ;
i) No arquivo App.js , importe o componente Content criado anteriormente;
j)Renderize o componente Content no App.js ;
k)Crie um novo arquivo Footer.jsx ;
l)No arquivo Footer.jsx , crie uma classe chamada Footer .
A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
m)Importe o componente Footer no app.js
n)Renderize o componente Footer no app.js .


Solução - App.js:
      // App.js
      import React from 'react';

      import Header from './Header';
      import Content from './Content';
      import Footer from './Footer';

      import './App.css'

      class App extends React.Component {
        render() {
          return (
            <div>
              <Header />
              <Content />
              <Footer />
            </div>
          );
        }
      }

      export default App;

Solução - Header.jsx:
      // Header.jsx
      import React from 'react';

      class Header extends React.Component {
        render() {
          return (
            <div>
              <h1 className='title'>Conteúdos de Front-end</h1>
            </div>
          )
        }
      }

      export default Header;

Solução - Content.jsx:
      // Content.jsx
      import React from 'react';

      const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composição de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composição de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ]
      class Content extends React.Component {
        render() {
          return(
            <div className="content">
              {conteudos.map((elem) => (
                <div key={elem.conteudo} className="card">
                  <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
                  <p>{`status: ${elem.status}`}</p>
                  <p>{`bloco: ${elem.bloco}`}</p>
                </div>
              ))}
            </div>
          );
        }
      }

      export default Content;

Solução - Footer.jsx:
    // Footer.jsx
      import React from 'react';

      class Footer extends React.Component {
        render() {
          return (
            <footer className='footer'>
              <h1>E isso é só o começo...</h1>
            </footer>
          )
        }
      }

      export default Footer; */      
      