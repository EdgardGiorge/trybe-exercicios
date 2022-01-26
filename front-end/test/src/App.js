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

// INTRODUÇÃO AO REACT

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
 //Exerc. de fixação do Cap. Componentes React - Props:
 import Image from './Image';



function App() {
  return (
    <div>
      <MinhaDescricao />
      <main>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText="Cute cat string" />
      </main>
    </div>
  );
}


export default App;

/* Exercícios Introdução ao React

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
      

// COMPONENTES REACT

// Props

/* As props são umas das partes mais importantes de um componente. São por elas que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função. Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:
Lembrando que, assim como podemos ter vários parâmetros em uma função, conseguimos também passar inúmeras propriedades para o componente por meio das props . Adicionemos o sobrenome da pessoa à função e ao componente.
Ao componente Greeting :
import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;
Agora o chamamos dentro do componente App :
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;
Observe como a chamada do componente lembra a chamada de uma função com passagem de parâmetros! Seu retorno, nesse caso, será <h1>Hello, Samuel Silva</h1>
Você pode estar pensando: entendi que o uso de props é importante e como passá-las para um componente, mas como funciona exatamente o trâmite das props ? Para compreender isso melhor, vamos analisar com mais cuidado a linha 6 do código anterior. Ao atribuir as props name e lastName ao componente Greeting , o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props , num formato parecido com esse:
Esse objeto props , por sua vez, é passado para o componente Greeting , o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName .
const props = { name: 'Samuel', lastName: 'Silva' }

// Para Fixar

Agora vamos fazer este exercício de fixação!
Crie uma aplicação React na sua máquina via create-react-app com o nome fixation-exercises-10-2 . Crie um arquivo Image.js no diretório src do projeto e copie para esse arquivo o código escrito acima. Uma vez feito isso tudo, responda:
1- Qual o nome do componente declarado acima?

Solução: Image

2- Chame o componente Image , de forma que seja mostrada esta imagem, ou o texto Cute cat staring , caso a imagem não consiga ser carregada. */

//Solução: verifique o arquivo Image.jsx e App.js lá nas primeiras linhas ... up

//Composição de componentes

/* Conforme dito anteriormente, componentes são utilizados para construir uma aplicação React. Mas como essa construção é feita? Em React, faz-se uso de composição de componentes. Mas antes de nos aprofundarmos no assunto, vamos dar um passo para trás e refletir: de forma geral, o que é composição? São elementos ordenados de forma a constituir algo maior e mais complexo. São, por exemplo, as músicas em um álbum musical, as frutas em uma salada de frutas ou até mesmo os inputs , as labels e os buttons em um form . Como você já deve ter percebido, composições já fazem parte do nosso cotidiano e, com o uso do React , isso se tornará ainda mais comum. Componentes React podem conter um ou mais componentes! Essa é uma funcionalidade muito importante do React , pois permite a reutilização e a redução do nível de complexidade de códigos. Vamos refatorar o código abaixo para poder entender, na prática, sobre composição de componentes e seus benefícios. O código a seguir renderiza informações básicas sobre dois álbuns do Coldplay.

// src/App.js
import React from 'react';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App;

Como você deve ter notado, o código, apesar de conter pouca lógica, está extenso . Ambas as sections , apesar de possuirem estruturas semelhantes , renderizam informações diferentes. Imagine o tamanho do código se tivéssemos cinco albuns. Ou dez? Percebe-se que, nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável , dando início à nossa refatoração. Para isso, vamos criar um novo arquivo, chamado Album.js , para armazenar o código das sections e adaptá-lo para fazer a leitura das props que iremos passar futuramente:

// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;

Em seguida, vamos refatorar o App.js. Para substituirmos as sections pelo novo componente criado, temos que:
1. Importá-lo no arquivo App.js :
  // src/App.js
  import React from 'react';
  import Album from './components/Album'

2. Passar as props apropriadas:
  // src/App.js
   class App extends React.Component {
       ...
       render() {
         return (
           <div>
             <Album album={ album01 } />
             <Album album={ album02 } />
           </div>
         );
       }
   }
   ...

Desse modo, o componente App.js ficará assim:
Veja como o código ficou mais limpo e melhor de ler. Aqui, o nosso componente App contém dois componentes Album . Isso é composição de componentes! Cada um desses componentes recebe um objeto diferente através da prop album . Importante notar que os dois componentes irmãos <Album /> , são, na realidade, o mesmo componente, porém reutilizados** com base nas props recebidas. Ou seja, apesar de serem o mesmo componente, renderizam informações diferentes, uma vez que recebem props diferentes.
À primeira vista, componentizar a aplicação em uma combinação de componentes React pode parecer um processo pesado e complexo. No entanto, conforme a aplicação cresce, ter à disposição uma gama de componentes reutilizáveis e de baixo nível de complexidade individual facilitará muito o trabalho!

// src/App.js
import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;

Agora, vamos reforçar o que você acabou de aprender com este exemplo:
Analisando o código abaixo, temos:
O componente App é composto por dois componentes UserProfile. Em outras palavras, o componente App é pai dos dois componentes UserProfile . Além disso, <UserProfile user={joao} /> e <UserProfile user={amelia} /> são componentes irmãos , e eles dois são filhos do componente App .
O componente UserProfile , por sua vez, possui um componente Image. Ou seja, UserProfile tem Image como filho.
Os dados são repassados de componente pai para componente(s) filho(s). Olhando para o código abaixo, o componente App , que é pai dos dois componentes UserProfile , passa para cada um de seus filhos um objeto com as informações de um perfil. O mesmo pode ser dito olhando para UserProfile , que passa para seu componente filho Image a origem de uma imagem.


// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    return (
      <div className="App">
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </div>
    );
  }
}

export default App;


      