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

 //import logo from './logo.svg';
 import './App.css';
 import MinhaDescricao from './MinhaDescricao';
 //Exerc. de fixação do Cap. Componentes React - Props:
 import Image from './Image';
 import Form from './Form'

function App() {
  return (
    <div>
      <MinhaDescricao />
      <Form />
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

// Lista de componentes e chaves

Agora que você já sabe o que é componente e como compô-lo, suponha que você precise implementar um componente que renderiza uma lista de compras. Entretanto, você não sabe de antemão os elementos dessa lista. Como você renderizaria dinamicamente essa lista de compras?Imagine que temos a seguinte lista a ser renderizada de maneira dinâmica:
const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
O primeiro passo é criar uma coleção de elementos. Para isso, iteramos sobre shoppingList com uma HOF que retorne, em um novo array , cada item da lista envolvido por um elemento <li> . A seguir, atribuímos o array resultante para a variável items.
// o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return (<li>{ item }</li>);
});
Agora, só nos resta renderizar a lista que acabamos de criar! Para isso, dentro do escopo do return , devemos fazer o uso das chaves { } e utilizar, dentro dela, a constante de elementos criada anteriormente. É por meio das chaves que o React irá diferenciar o que é código a ser executado e o que deve ser apenas impresso para leitura:
import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}
export default App;
Pronto! Agora já podemos a renderizar múltiplos componentes de forma dinâmica, sem quaisquer problemas, certo? Quase! Ao executar o código acima, receberemos, pelo console , um alerta de que uma key deve ser definida para cada item renderizado. Essas keys são importantes para o React indentificar, com precisão, quais itens foram adicionados, removidos ou alterados. Então, como atribuímos e quais devem ser os valores dessas keys? O melhor valor para uma key é um que seja único para cada item da lista, como, por exemplo, um ID . No entanto, nem sempre dispomos de um ID estável em mãos, tal qual o caso do nosso código acima. Para solucionarmos esse problema, utilizamos o índice gerado no segundo parâmetro da nossa HOF . E, para atribuirmos a key , adicionamos na <li> um atributo key com o valor escolhido:
const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));
Vale ressaltar que, não é recomendado o uso de índices como keys em listas que possibilitam a alteração na ordem dos itens , pois pode impactar negativamente o desempenho da aplicação ou gerar problemas relacionados ao estado do componente. Caso esteja curioso e deseje entender mais a fundo esse debate e como o uso do índice pode afetar a aplicação, leia "Index as a key is ananti-pattern", por Robin Pakorny , na sessão de Recursos Adicionais.

Agora vamos fazer este exercício de fixação:

1- Lembra do código de exemplo da seção anterior, referente à composição de componentes? Crie os componentes Image , UserProfile e App no diretório src do projeto fixation-exercises-10-2 , e vamos olhar especificamente para o arquivo App.js:

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

Solução:

// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https:\/\/cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile key={user.id} user={user} />)}
        // Como boa prática utilizamos a chave `id` do objeto como nossa key por ser única,
        // caso ela não existisse, precisarímos utilizar o `index` como segundo parâmetro do map.
      </div>
    );
  }
}

export default App;

//        PropTypes, checagem de tipos

Agora você vai estudar outro importante fundamento do React : a checagem de tipos ! Imagine que você criou um componente reutilizável e que ele, para funcionar corretamente, precisa receber determinadas props de tipos específicos, caso contrário a aplicação quebrará. A checagem de tipos ajuda a prevenir cenários como esse, pois verifica os tipos das props passadas para um componente durante o desenvolvimento e levanta um warning se algo não estiver como planejado. Como deve ter notado, essa verificação previne inúmeros erros, economizando muito tempo de desenvolvimento!
A melhor forma para compreender o uso dessa ferramenta é visualizar um exemplo prático e destrinchá-lo:

antes… no terminal instalar pacotes prop-types
npm install prop-types

import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;
1- O primeiro passo para utilizar o prop-types é importá-lo no componente:
    import PropTypes from 'prop-types';
2- Em seguida, para executarmos a checagem de tipos no componente Greeting , adicionamos a seguinte estrutura antes do export default :
    Greeting.propTypes = {
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    };
É dentro dessa estrutura que ocorre a checagem das props . Basta pegarmos o nome da prop que queremos tipar, e usar a sintaxe de identificação apropriada para o caso. À primeira vista, pode parecer confuso, por isso vamos ao exemplo:
    ...
    name: PropTypes.string,
    …
2- A outra prop que falta ser tipada , lastName , se encontra em uma situação bem semelhante à anterior. Então repetimos o processo, trocando apenas o nome da prop :
    ...
    name: PropTypes.string,
    lastName: PropTypes.string,
    …
Agora podemos ter certeza que, caso o componente seja renderizado com alguma prop de tipo inválido, o console disparará um aviso , facilitando muito o processo de debugging .
E caso o nosso componente seja renderizado sem nenhum valor numa prop , ainda será disparado o aviso? Em casos como esse, no qual as props são essenciais para o bom funcionamento do componente, é importante acrescentar o .isRequired - inglês para "é obrigatório" - após a definição do tipo da prop :
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
Desse modo, sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.
Abaixo segue alguns dos principais validadores oferecidos pela PropTypes . Caso esteja revisitando o conteúdo e nenhum dos validadores abaixo consigam te ajudar, ou esteja apenas curioso para saber mais sobre outros validadores que a biblioteca oferece, acesse "React - PropTypes" na sessão de Recursos Adicionais.
MeuComponente.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios basta adicionar .isRequired
  numeroObrigatório: PropTypes.number.isRequired,

  // Tipos básico do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDe: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDe: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    avaibility: PropTypes.bool,
  }),
};
*/

//              Aula ao vivo

// arquivo App.js
/*
import React from "react";
import './index.css';
import Card from './components/Card';
import contens from './data'


class App extends React.Component {
  
  render(){
    return (
      <main>
        <div>
          <h1>Conteudo</h1>
          <p>Acesse a agenda de cada módulo abaixo, ou continue aprendendo com nossas aulas ao vivo e trilha de Soft Skills.</p>
          <section> 
            {
              contens.map(item => {
                return <Card key={item.title} itemInfo={item}  />
              })
            }
          </section>
        </div>
      </main>
    );
  }
}

export default App;

// arquivo Card.js

import React from 'react';
import PropTypes from 'prop-types';
//QUERO RECEBER INFORMACOES

class Card extends React.Component {
    render(){
        //PROPS => OBJETO
        const {itemInfo} = this.props
        const {imageUrl, name, title} = itemInfo;

        //const {itemInfo : {imageUrl, name, title}} = this.props;
        return(
          <article>
            <img src={imageUrl}/>
            <h3>{name}</h3>
            <h2>{title}</h2>
          </article>
        )
    }
}

Card.propTypes = {
    itemInfo: PropTypes.shape({
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        title: PropTypes.string
    })
}

export default Card;

// arquivo data.js

const contents = [
    {
      id: 1,
      name: "Modulo 1",
      title: "Fundamentos",
      imageUrl: "https://app.betrybe.com/static/media/fundamentals.d4ce6da9.svg",
      isLarge: false
    },
    {
      id: 2,
      name: 2,
      title: "Front-end",
      imageUrl: "	https://app.betrybe.com/static/media/front-end.3f3c4418.svg",
      isLarge: false
    },
    {
      id: 3,
      name: "Modulo 3",
      title: "Back-end",
      imageUrl: "https://app.betrybe.com/static/media/back-end.a979af1a.svg",
      isLarge: false
    },
    {
      id: 4,
      name: "Modulo 4",
      title: "Ciência da computação",
      imageUrl:
        "https://app.betrybe.com/static/media/computer-science.7ae26ddf.svg",
      isLarge: false
    },
    {
      id: 5,
      name: "Modulo 5",
      title: "SoftSkills",
      imageUrl: "	https://app.betrybe.com/static/media/soft-skills.756af71b.svg",
      isLarge: true
    },
    {
      id: 6,
      name: "Modulo 6",
      title: "Aulas ao vivo",
      imageUrl: "https://app.betrybe.com/static/media/live-lectures.500f6512.svg",
      isLarge: true
    }
  ];
  
  export default contents;
  */
 
 //       Exercícios Componentes React
 /* Você vai implementar de forma simplificada uma Pokedex!! Para os que não estão familiarizados com o universo Pokemon , a Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os pokemons presentes no arquivo data.js mencionado acima.
 Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você pelo menos implemente estes dois componentes:
 1- Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
 a) nome do pokemon;
 b) tipo do pokemon;
 c) peso médio do pokemon, acompanhado da unidade de medida usada;
 d) imagem do pokemon.
 
 2- Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .
 Segue uma sugestão de implementação da aplicação:
 Gif exibindo uma sugestão de implementação da aplicação my-pokedex.

 // Solução:

Gabarito do exercício
É mostrada, em sequência, uma sugestão de implementação da aplicação, em que todas as modificações efetuadas se encontram dentro do diretório ./my-pokedex/src , onde my-pokedex é o nome do projeto criado com create-react-app .
Hey! Está com dúvida de como iniciar? Segue uma dica que pode ser útil e tente novamente fazer o exercício.
Que tal começar trabalhando no App.js importando o array de pokemons?
arquivo ./my-pokedex/src/data.js:

const pokemons = [
  {
      id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: 6.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
      id: 4,
      name: "Charmander",
      type: 'Fire',
      averageWeight: {
          value: 8.5,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
      id: 10,
      name: "Caterpie",
      type: 'Bug',
      averageWeight: {
          value: 2.9,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
      id: 23,
      name: "Ekans",
      type: 'Poison',
      averageWeight: {
          value: 6.9,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
  },
  {
      id: 65,
      name: "Alakazam",
      type: 'Psychic',
      averageWeight: {
          value: 48.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
  },
  {
      id: 151,
      name: "Mew",
      type: 'Psychic',
      averageWeight: {
          value: 4.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  },
  {
      id: 78,
      name: "Rapidash",
      type: 'Fire',
      averageWeight: {
          value: 95.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
      id: 143,
      name: "Snorlax",
      type: 'Normal',
      averageWeight: {
          value: 460.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/f/fd/Spr_4p_143_s.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
      id: 148,
      name: "Dragonair",
      type: 'Dragon',
      averageWeight: {
          value: 16.5,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  }
];

export default pokemons;

// arquivo ./my-pokedex/src/App.js:

import React from 'react';
import './App.css';
import pokemons from './data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
      // No arquivo App.js, estamos renderizando o componente da Pokedex.
      // Criamos a prop "pokemons", e nela chamamos o nosso json "pokemons",
      // pokemons={} é a nossa prop e o valor dentro das {} é o nosso json,
      // ou seja nomeDaProps={valorDaProps}, o nome da props é o que foi passado
      // dentro do componente Pokedex.
      // O valor da props, vem o import que fizemos na linha 3 do arquivo data.js
      // pois desta forma poderemos trabalhar com esses dados via "props".
      // Uma informação importante é que podemos dar qualquer nome a uma prop,
      // mas atente-se para que seja um nome descritivo.
    </div>
  );
}

}

export default App;

E aí, conseguiu dar o primeiro passo, mas ainda se sente perdido? Tente isso:

// arquivo ./my-pokedex/src/Pokedex.js:

import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
      const { pokemons } = this.props;
      // Recebemos do App.js, através da props "pokemons", o nosso array de pokemons.
      // Devemos fazer um map, e nele renderizar o componente <Pokemon>, que receberá
      // por props cada item do array.
      // Lembre-se: é no componente Pokemon que iremos
      // renderizar todas as informações necessárias para a exibição.
        return (
            <div className="pokedex">
                {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;

// arquivo ./my-pokedex/src/Pokemon.js:

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.

    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;

Chegamos na parte final do exercício! Não se preocupe se foi preciso olhar o gabarito para visualizar o que precisava ser feito! Mas não se esqueça de refazer o exercício para fixar o conteúdo!
Caso você não queira se aventurar no css , deixamos um pronto pra você! ;)

// arquivo ./my-pokedex/src/App.css:

.App {
  text-align: center;
}

// arquivo ./my-pokedex/src/index.css:

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pokemon {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  flex: 1 1 0;
  min-width: 25%;
  margin: 10px 10px;
  border: 1px gray solid;
  border-radius: 10px;
}

.pokedex {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
}
*/