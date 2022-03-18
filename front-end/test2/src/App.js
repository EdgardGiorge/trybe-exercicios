import { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import HowTo from './components/HowTo';
import Profile from './components/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/about' component={About} /> {/* Se a minha url estiver direcionada para a path /about, eu renderizo o componente About */ }
        <Route path='/howto/:ship' render={(props)=> <HowTo {...props} name="Conteúdo do How to"/>} /> {/* Passar uma prop pelo componente em  que estamos querendo renderezar chamamos o render e ao invés de passarmos um componente, passamos uma call back, que irá retornar o componente renderizado. 2 "Pulos do gato": Poderíamos passar a prop pela call back (<HowTo name="Conteúdo do How to"/>), outra opção é que o router passa um array de props e podemos usar isso captutando com spread operator, com isso teremos acessp a 3 props, history(traz o histórico do navegador), location e match(serve pra passar parâmetro pela url através do param), temos que colocar uma sintax no path também, a :ship que significa que podemos colocar qualquer palavra na url e resgatá-la no componente com a chave chip: <Route path='/howto/:ship' render={(props)=> <HowTo {...props}, do lado do componente (la no HowTo reagatamos (ver dentro do HowTo/>), com isso da pra resgatar api's*/}
        <Route path='/profile'><Profile /></Route> {/* Podemos passar o componente que queremos utilizar como filho do Route,  fazendo o uso de elemento children */ }
        <Route exact path='/' component={Home} /> {/* exact pra renderizar exatamente a url escrita */}
      </Switch>  
    </BrowserRouter>
  )}
}

export default App;

/*
//        Single Page Application

Antes de começar a falar sobre React Router , é preciso entender um tipo de aplicação chamado Single Page Application ( SPA ), haja vista que aplicações em React Router são SPA s. São páginas web que não precisam dar reload, o conceito de SPA que existem em várias bibliotecas e frameworks de dev de front-end , não só em react, serve pra você ter em uma única página web já na primeira vez que você acessa, toda navegação, interação e carregamento de novas informações dela dinamicamente através de lógica de JS, baseado no que a pessoa faz. Foco 100% na experiência de quem usa, agilidade e eficiência, com uma página fluída, sem delay de um ponto ao outro.

//  props.children

Children é uma ótima ferramenta para reutilização de componentes. A utilização é bem simples, veja abaixo:
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
      </div>
    )
  }
}
E dessa forma podemos acessar e exibir na tela o valor SUPIMPA no ComponentePai :
const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
Nesse exemplo utilizamos uma tag p , mas note que poderia ser um ou vários elementos de qualquer natureza, seja uma tag, ou até um componente. Ainda sim, ela é acessada da mesma forma dentro de ComponentePai . É importante perceber que, no caso acima, props.children é um objeto por ser apenas um elemento. Caso o ComponentePai esteja com mais de um elemento dentro como no exemplo abaixo, props.children se torna um array de objetos , com as informações de cada filho.
class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
        </ComponentePai>
      </div>
    )
  }
}

//      Instalação React Router Dom

Para poder fazer uso de React Router , é preciso que se instale em uma aplicação React o pacote react-router-dom:
npm install react-router-dom@v5
Recentemente foi lançada uma atualização para o pacote react-router-dom que trouxe breaking changes , ou seja, mudanças que não são compatíveis com as versões anteriores. Por isso é importante que você instale o react-router-dom na vesrão especificada acima, para que os exemplos da aula funcionem corretamente.

//      Componentes BrowserRouter e Route

Em suma:
1) BrowserRouter é o componente que encapsula a sua aplicação, de forma a te possibilitar fazer uso de navegação.
2) Route é o componente fundamental em React Router , que estabelece o mapeamento entre o caminho de URL declarado com o componente. Tal mapeamento, no que diz respeito à correspondência entre o caminho da URL atual e a presente no componente, pode ser feito das seguintes formas, ilustradas pelos seguintes exemplos:
a) <Route path="/about" component={About} /> : lê-se que se o caminho da URL atual do navegador começa com o caminho /about , como declarado na prop path no componente Route , há uma correspondência entre os caminhos da URL e do componente Route , e o componente About será renderizado. Ou seja, se o caminho da URL atual for /home , não há correspondência, logo o componente About não será renderizado. Entretanto, se a URL atual for /about ou /about/me , há correspondência, e o componente About é renderizado. O parâmetro exact entra em ação quando você tem vários caminhos com nomes semelhantes.
b) <Route exact path="/about" component={About} /> : lê-se que, se houver uma correspondência exata entre o caminho da URL atual e o caminho /about declarado em Route , o componente será renderizado. Ou seja, se o caminho da URL atual for /home ou /about/me , não há correspondência exata, logo o componente About não será renderizado. Entretanto, se a URL atual for /about , há correspondência exata, e o componente About será renderizado.
OBS : Além dessas duas formas de renderização de componente com Route , você pode fazer uso de elemento children. Ou seja, se você tiver a rota <Route path="/about" component={About} /> , você também poderá fazer da seguinte forma:
    <Route path="/about" >
      <About />
    </Route>
3) Se houver vários componentes apresentando correspondência entre seu caminho de URL e o caminho atual da aplicação, todos os componentes apresentando correspondência serão renderizados . Ou seja, suponha que houvesse a seguinte lista de componentes do tipo Route:
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/" component={Home} />
Se o caminho atual da URL da aplicação for / , todos esses componentes serão renderizados, haja vista que todas as rotas não fazem correspondência exata entre o caminho da URL atual e o definido via prop path , e fazer path="/" faz correspondência com qualquer caminho de URL ;
Agora, se o caminho atual da URL da aplicação for /contact , os componentes Contact e Home serão renderizados. Isso pode ser um problema, e uma forma de atacá-lo é organizar essas rotas via componente Switch , que você verá com mais detalhes em instantes. 😉
*/

/*
Componente Switch
O componente Switch é usado para encapsular um conjunto de rotas que você definiu via Route , conforme podemos observar na imagem abaixo:


Dada a URL atual da aplicação, o Switch procura de cima para baixo pelo primeiro Route que possuir correspondência entre seu caminho definido na prop path do componente e a URL atual da aplicação. Ou seja, se tivermos um Switch com as rotas abaixo:
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
  <Route path="*" component={NotFound} /> // exemplo de notFound 404
</Switch>
Ao mudarmos a URL da aplicação para que seu caminho seja /contact , somente o componente Contact será renderizado.
Todos os filhos de um Switch devem ser Route ou Redirect . Apenas o primeiro filho que corresponder ao local atual será renderizado. Se não houvesse o Switch mais de um componente poderia ser renderizado na mesma rota de forma errada.
Em uma comparação direta, é como o switch case do javascript :
É apenas uma comparação, não utilize o exemplo abaixo.
  switch (rota) {
    case '/about':
      return <About />;
    case '/contact':
      return <Contact />;
    case '/movies':
      return <Movies />;
    default:
      return <Home />
  }

  Componente Redirect
Conforme o próprio nome diz, Redirect é um componente que permite ativamente levar quem usa a aplicação para diferentes locais dela. Um caso de uso bastante comum de Redirect é autenticação: a pessoa só pode acessar informações sensíveis (tipo conta bancária) de uma aplicação se ela já estiver autenticada; caso contrário, ela é redirecionada para uma página de login. Veja um exemplo de utilização abaixo:
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route exact path="/">
      {logado ? <Redirect to="/dashboard" /> : <Login />}
    </Route>
  </Switch>
Caso a aplicação tenha o caminho / será feita uma verificação na variável logado , no caso de true a página será redirecionada para o caminho /dashboard e então renderizará o componente Dashboard , caso contrário, renderizará o componente Login .
Dê sempre prioridade para a utilização de Redirect para redirecionar, uma vez que, ele é criado para isso.
Para que você tenha um pouco mais de contexto, observe a imagem abaixo que compara o Link e o Redirect:

Entendendo o fluxo dos componentes do React Router




Main Group 7: 
List Products = Primeira Tela
Products = Product Container
Shop Cart = Cart

primeira tela: cart = bycart , product = newProduct
cart = prod = produto 

AddProduct = AddProductToCart em ProducDetail

AddProductToCart em ListProduct

08/02 - 13.1 – Metodologias ágeis

Os métodos ágeis buscam promover um processo de gerenciamento de projetos que incentiva a inspeção e adaptação frequente. É uma filosofia que acaba por incentivar o maior trabalho em equipe, a auto-organização, a comunicação frequente, o foco no cliente e a entrega de valor.
Basicamente, os métodos ágeis são um conjunto de práticas eficazes que se destinam a permitir a entrega rápida e de alta qualidade do produto, tendo uma abordagem de negócios que alinha o desenvolvimento do projeto com as necessidades do cliente e os objetivos da empresa.
Pilares do manifesto Ágil:
1- Indivíduos e interações mais que processos e ferramentas
2- Software em funcionamento mais que documentação abrangente
3- Colaboração com o cliente mais que negociação de contratos
4- Responder a mudanças mais que seguir um plano
É importante frisar que os itens da direita possuem valor no manifesto, mas os da esquerda devem estar em posição de destaque.
Os frameworks são ferramentas que têm como base os princípios ágeis e podem ser implantados em times ou empresas que desejam incorporar o Agile em suas práticas. Entretanto, nem sempre é possível seguir as regras dos frameworks ao pé da letra. Por isso, há quem advogue que os princípios ágeis devem ser adaptados à realidade de cada área ou organização. Afinal, o mais importante é que os princípios fundamentais se mantenham e cumpram com o objetivo de facilitar e agilizar os processos e as entregas da equipe, sem gerar complexidade desnecessária.
Scrum
Scrum é um framework para gestão e planejamento de projetos. As equipes que trabalham neste método, geralmente, são divididas em Product Owner (PO) , Scrum Master e Scrum Team (ou Time de Desenvolvimento ). Você, como pessoa desenvolvedora, deverá, geralmente, integrar a equipe desta última parte da divisão.
As Metodologias ágeis de desenvolvimento de software são iterativas, ou seja, o trabalho é dividido em iterações (ciclos). No Scrum, os projetos são divididos em ciclos chamados de Sprints .
O Sprint representa um espaço de tempo, normalmente de 2 a 4 semanas, no qual um conjunto de atividades deve ser executado. As funcionalidades a serem implementadas em um projeto são mantidas em uma lista que é conhecida como Product Backlog . Este material contém todas as funcionalidades que foram elencadas como importantes para quem usa o produto, e é responsabilidade do PO definir seu conteúdo. Estas informações não precisam necessariamente estar disponíveis no início de um projeto, podendo ser acrescidas, alteradas e melhoradas à medida que se aprende mais sobre o produto e quem o usa.
O próximo passo é conectar o que foi priorizado pela pessoa PO com o Scrum Team . Para isso, no início de cada Sprint , faz-se um Sprint Planning Meeting , ou seja, uma reunião de planejamento na qual a pessoa PO prioriza os itens do Product Backlog e a equipe seleciona as atividades que ela será capaz de implementar durante o Sprint que se inicia, originando o Sprint Backlog . Para entender melhor o Scrum e a Sprint Planning , vamos a um vídeo:
O status das tarefas do Sprint Backlog será atualizado pela pessoa que for Scrum Master . Este papel entra para fazer a gestão dos valores e das práticas do Scrum , assegurando sua funcionalidade e garantindo que o que foi selecionado pode e deve ser entregue ao final do ciclo. É comum observar que, em algumas empresas, o papel de Scrum Master é desempenhado pela mesma pessoa que é liderança técnica do time de desenvolvimento (Tech Lead). Nestes casos, não existe uma pessoa que faz exclusivamente o papel de Scrum Master. Nas empresas que possuem uma pessoa com função exclusiva de Scrum Master, os papéis de Scrum Master e Tech Lead são separados. Isso quer dizer que, apesar da pessoa Scrum Master assumir uma responsabilidade importante de gestão das práticas ágeis do time, a liderança do time de desenvolvimento continua sendo o(a) Tech Lead.
Além das tarefas citadas, a pessoa Scrum Master atuará como facilitadora da Daily Meeting (ou Daily Scrum ou DM ), uma reunião diária como o objetivo de disseminar a evolução do projeto, e identificar impedimentos que podem ser resolvidos com ajuda dos membros da equipe. A Daily deve ser breve, e cada integrante deve basicamente responder à três perguntas:
a) O que você fez ontem?
b) O que fará hoje?
c) Há algum impedimento no seu caminho?
Finalmente, faz-se uma Sprint Retro Meeting (ou Sprint Retrospective ), onde são apontados os pontos positivos e negativos do último Sprint , assim como ações para mitigar os pontos negativos e evitar que se repitam. Após essa reunião, a equipe parte para o planejamento do próximo Sprint .
Assim, reinicia-se o ciclo, levando em consideração os aprendizados da última iteração. A figura abaixo ilustra o ciclo que você estudou:




Kanban
O método Kanban foi criado pela japonesa Toyota na década de 1960 e faz parte da metodologia Just in Time , um sistema de administração da produção que determina que deve ser feito somente o imprescindível para realização da etapa seguinte do processo, em um fluxo de trabalho contínuo. Em outras palavras: fazer apenas o que é necessário, quando necessário e na quantidade necessária.
Em meio à falta de recursos e diante da necessidade de se modernizar para acompanhar as mudanças do mercado, a empresa precisava mudar sua metodologia de gestão e procurar por uma Gestão por Resultados , ou seja um modelo que priorizasse os resultados de todos os colaboradores que nele atuam, permitindo que os gestores e seus times avançassem cautelosamente, porém de forma contínua e produtiva.
Era preciso agir rápido e urgentemente para criar um novo sistema de manufatura. Assim, inspirados pelo livro Today and Tomorrow , de Henry Ford, a diretoria da Toyota desenvolveu o Kanban .
Diante das dificuldades da época, o fato do Kanban ser bastante visual facilitou muito o trabalho das equipes de produção e montagem. O sistema melhorou a comunicação entre as pessoas que trabalhavam na empresa, bem como o entendimento de quais peças precisavam ser repostas no momento correto. A padronização também foi auxiliada pelo sistema, assim como a redução de desperdícios.
A metodologia Kanban propõe a utilização de cartões ou post-its em um quadro para indicar e acompanhar, de maneira visual, prática e utilizando poucos recursos, o andamento dos fluxos de produção nas empresas. De um lado do quadro, ficam as tarefas que precisam ser executadas, o que pode ser chamado de Backlog , que assim como no Scrum , são as funcionalidades e objetivos do projeto como um todo, podendo ou não estarem completamente prontos nos processos iniciais de desenvolvimento. E, do outro, as etapas de execução: em andamento e entregue. Você pode alterar o nome dessas etapas de acordo com seus processos internos. Conforme as tarefas são desempenhadas, o cartão ou post-it é colocado no campo correspondente ao status da tarefa.
Assista ao vídeo abaixo para complementar o conhecimento relacionado ao Kanban:
Os benefícios do sistema Kanban
O Kanban nada mais é que uma maneira simples e visual de organizar as tarefas e o fluxo de trabalho, tornando tudo muito mais eficiente. Os benefícios do sistema Kanban são:
a) Visão do todo;
b) Simplicidade;
c) Acesso a informações;
d) Facilitação do fluxo de trabalho;
e) Incentivo à comunicação;
f) Prioridade e metas claras.
Visão do todo
Seja físico ou digital, o Kanban é visual. Isso é especialmente útil em situações em que várias pessoas ou grupos coordenam e cooperam em um mesmo projeto, ou processo, permitindo que essas pessoas planejem suas tarefas atuais e as seguintes. O Kanban oferece uma visão do todo, ou seja, uma perspectiva holística de um processo. Ao invés de fazer com que as pessoas trabalhem isoladamente, o sistema Kanban permite que todas as pessoas na organização tenham uma melhor compreensão e apreciação do que outras pessoas e equipes estão fazendo. A liderança de área, por sua vez, consegue ter uma visão concreta de quem está fazendo o quê e quantas etapas faltam para um projeto ser finalizado.
Simplicidade
A ideia e o conceito por trás do Kanban são simples. É isso que o torna atraente para quase todas as áreas de uma organização. A simplicidade permite que todas as pessoas participem com mais facilidade e comprem a ideia.
Acesso à informação
O Kanban tem processos inclusivos, que permitem que as pessoas tenham acesso a mais informações. Ele dá às pessoas mais conhecimento corporativo, o que é particularmente útil para aquelas que têm pouco entendimento de um sistema complexo, como, por exemplo, as pessoas recém-contratadas. No fim da cadeia, ele dá poder às pessoas e incentiva a autonomia.
Facilitação do fluxo de trabalho
O Kanban contribui para que haja menos desperdício nas operações, tornando tudo mais prático e conciso. Partes redundantes ou desnecessárias de um processo podem ser removidas, enquanto outras podem ser simplificadas. Ou seja, o fluxo de trabalho pode ser facilitado, sem comprometer a qualidade. Isso significa uma constante melhora na produtividade.
Incentivo à comunicação
Como o uso do Kanban fornece uma visão do todo, isso incentiva uma melhor cooperação e comunicação entre pessoas e equipes. As pessoas que trabalham na empresa poderão ajustar melhor seus cronogramas e prazos, porque sabem exatamente o que as outras pessoas estão fazendo. Por extensão, isso também serve como meio de controle e equilíbrio, no qual as ineficiências e gargalos ao longo do processo podem ser eliminados.
Prioridades e metas claras
O Kanban aprimora a capacidade de foco, pois, além do uso do WIP limit , o time tem uma visão ampla dos processos e do fluxo de trabalho, e a gerência fica mais capacitada para decidir o que de deve ser priorizado para atingir os objetivos e metas estabelecidas.

15/02 - 14.1 - React Testing Library: Primeiros Passos
Introdução ao RTL
No conteúdo de testes já visto no curso, funções eram testadas. Já no RTL o objetivo é testar comportamento, como se algo aparece ou não na tela. Por exemplo:
Podemos testar se a nossa página possui um título específico (igual aos requisitos que se pedem no projeto!);
Em uma lista de tarefas, como o projeto Todo list , precisamos verificar, por exemplo, se a funcionalidade de adicionar uma nova tarefa funciona. Para isso, devemos simular o comportamento de quem usa, que seria adicionar um texto no campo de texto alvo e clicar no botão que adiciona a nova tarefa. Para testar se funcionou, verificamos se o texto aparece em algum lugar da página. O RTL nos dá as ferramentas necessárias para realizar essa simulação!
Esses são apenas alguns dentre muitos exemplos! Agora veremos a estrutura desses testes e suas ferramentas:
Crie uma nova aplicação com o comando npx create-react-app testes-react .
Não se preocupe! A biblioteca RTL já vem instalada nos novos projetos.
Abra a aplicação no VSCode e abra o arquivo App.test.js . Ele está dentro do diretório src .
Observe o arquivo App.test.js :

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
O que ele está fazendo é verificar se algum elemento dentro do componente App possui o texto "learn react" ( /string/i é utilizado para ignorar case sensitive , ou seja, não diferenciar letras maiúsculas e minúsculas). Para rodar os testes vá para a pasta src e execute npm test .
Caso apareça a mensagem abaixo basta clicar a tecla "a", pra rodar todos os testes “press a to run all tests.”
Como pode ver, o nosso único teste passou. Quer dizer que existe o texto "learn react" dentro do componente App ! Se rodar aplicação com o npm start , você encontrará o texto "learn react", conforme indicado pelo teste.
Agora vamos provocar um erro ou uma falha. Mude o texto "learn react" para "algo que não aparece" e rode o teste. Seu terminal acusará erro.
Ele está falando que não foi possível encontrar um elemento que possui o texto "/algo que não aparece/i".
Dê uma olhada na cheatsheet da react-testing-library . Ela explica de forma resumida como a biblioteca funciona. Nos aprofundaremos nas explicações ao longo deste bloco!
💡 Você ja reparou no arquivo setupTests.js ? Por padrão ele é criado junto ao comando npx create-react-app , dentro dele temos comentários e uma importação, essa importação fornece para nossos testes o que chamamos de custom jest matchers . O .toBeInTheDocument() no exemplo acima é um deles, e você pode consultar outros na documentação do jest-dom (https://github.com/testing-library/jest-dom )sempre que precisar.
Agora veremos cada parte do código para entender como que a biblioteca de teste funciona. Para testar uma aplicação precisamos seguir alguns passos:
Renderização
Testar um componente significa, em poucas palavras, renderizá-lo em um browser real ou numa simulação de um browser e testar nele o comportamento desejado. Na RTL , é necessário o uso da função render() para fazer isso. A função render() faz a renderização de um componente em memória para que se possa simular as interações com esse componente.
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
Para usar o seletor/query getByText , precisamos usar o screen.getByText . Observe que ele é muito parecido com os seletores do DOM, como o document.getElementById() ou document.querySelector() . Seguindo a mesma lógica, ao usar o screen.getByText() , ele retornará um elemento html. A vantagem de utilizar o screen é que você não precisará atualizar e desestruturar a chamada do render para todo teste que você fizer, pois é possível consultar e utilizar todos os elementos do DOM através do próprio screen . Em outras palavras, ele receberá um objeto com os elementos contidos no DOM e você poderá acessar as propriedades desse objeto através dele.
Seletores
Seletores ou Queries são métodos que usamos para indicar ao RTL algum elemento da nossa aplicação e assim podermos realizar nossos testes e comparações.
Veremos agora algumas formas de buscar por algum elemento HTML. No exemplo foi visto apenas o getByText que busca por um elemento que possui um determinado texto.
Todos os seletores (queries) estão disponíveis nessa lista de queries da react-testing-library , mas não é necessário ler toda a documentação! Use-a para tirar dúvidas ou procurar algum assunto específico. Veremos algumas queries durante a aula.
Mas como fazer para buscar um elemento que não possui um texto? Como um input? Para isso, existem outros seletores.
Vamos acrescentar um input de email ao arquivo App.js :
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
    </div>
  );
}

export default App;
Pronto, mudamos a estrutura e adicionamos um campo email com uma label dentro do nosso arquivo App.js . Agora precisamos testar se esse input está, de fato, aparecendo na tela. Como ele não possui um texto, não podemos usar o getByText , mas podemos usar o getByLabelText , onde ele pegará o input de acordo com o texto da label que está associado a ele. Nesse caso, o input está relacionado com a label Email .
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
Como pode ver, mudamos os expects também, verificando se o elemento está na tela e é do tipo correto.
Mas e se um campo não tiver texto e nem label? Podemos usar o getByRole . Ele busca pelo atributo role. No caso de um botão, o role é definido pela propriedade type="button" . O role serve, por exemplo, para buscar por um elemento <button>Enviar<button/> ou <input type="button" value="Enviar" /> .
Adicione um botão ao App.js .
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
    </div>
  );
}

export default App;
Adicione o teste abaixo dentro do arquivo App.test.js :
test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
});
Agora adicione um novo botão na aplicação.
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
Note que, ao rodar os testes, ocorre um erro. O que acontece é que o getByRole espera encontrar apenas um elemento, mas acaba encontrando dois, o botão de Enviar e o de Voltar , pois os dois possuem o role button , retornando a mensagem Found multiple elements with the role "button" . Para resolver esse problema precisamos usar outro seletor, o getAllByRole , que armazenará todos os valores encontrados pelo seletor em um array. Para testar precisamos mudar o teste para:
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existe dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});
Observe que usamos buttons juntamente com toHaveLength para verificar se foram encontrados dois botões. Não precisamos usar o toBeInTheDocument para realizar a verificação de presença no documento!
Foi necessário comentar o nosso segundo teste para não ocorrer um erro. Vamos modificá-lo para verificar se existe um botão de enviar. Para isso usaremos a query getByTestId . Para usar esse seletor devemos adicionar uma propriedade ao nosso botão de enviar, o data-testid , que é um identificador para a biblioteca de testes.
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" />
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
O teste ficará assim:
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});
Buscamos o elemento pelo data-testid e verificamos se ele está na tela. Em seguida, verificamos se este elemento é um botão e com a propriedade toHaveValue conferimos se possui o texto Enviar.
Testando eventos
Por enquanto, estamos apenas testando se as coisas estão sendo renderizadas, mas precisamos testar o comportamento da pessoa usuária, como um clique em um botão. Para isso, usaremos a userEvent . A user-event é uma biblioteca complementar à React Testing Library (RTL) que possibilita a simulação de várias interações com o navegador. Essa biblioteca é baseada no método fireEvent da React Testing Library, mas seus métodos são mais aproximados da interação da pessoa usuária. Enquanto um fireEvent.change(input, { target: { value: 'hello world' } }) dispara um evento de alteração do campo de input, um userEvent.type(input, 'hello world') testará interações keyDown, keyPress e keyUp para cada caractere digitado. Portanto é uma boa prática, e altamente recomendado utilizar userEvent ao invés de fireEvent , sempre que possível . Você pode consultar a documentação com os eventos do userEvent e a lista completa de eventos suportados pelo fireEvent . Quando utilizamos o create-react-app para criar um projeto, a biblioteca user-event já vem instalada por padrão. Mas caso você precisa instalar ela manualmente, basta rodar o comando:
npm install --save-dev @testing-library/user-event
A maioria dos métodos do userEvent são síncronos, exceto quando utilizar o userEvent.type, pois ele aguarda a informação que será testada. O type possui três parâmetros, sendo o terceiro parâmetro opcional, type(element, text, [options]) , esse terceiro parâmetro pode ser utilizado para passar um delay , em milissegundos, que será o tempo esperado entre dois caracteres digitados para realizar a ação do teste. Você pode utilizar essa opção caso queira testar o comportamento de uma pessoa usuária com maior ou menor agilidade de digitação, o valor default para o delay é 0 . O userEvent.type é um evento que retorna uma Promise, porém, como valor default é 0, você só precisará aguardar o retorno dessa Promise caso passe algum valor para a option delay , do contrário o userEvent.type funcionará de modo síncrono.
Modificaremos nosso App.js para que, quem usa, possa inserir o seu email no campo, salvá-lo e mostrá-lo na tela:
// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;
Observe as mudanças que foram feitas.
Rode a aplicação e a teste à mão, adicionando seu email no campo e clicando no botão de enviar. Veja se seu email foi salvo.
Agora iremos automatizar cada passo que você fez no código usando o userEvent , para não precisar testar à mão cada passo desses toda vez que alterar o código. Bastará, ao invés disso, apenas rodar o npm test . Para utilizar o userEvent é necessário importar a biblioteca para o arquivo onde o teste será realizado:
import userEvent from '@testing-library/user-event';
Observe cada linha do teste:
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
Passo a passo:
a) Primeiro renderizamos a aplicação, depois salvamos o email da pessoa usuária em uma variável (o que é uma boa prática).
b) Depois, verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor: ,
c) Depois procuramos pelo o campo de email e o botão que enviará os dados.
d) Simulamos a digitação da pessoa usuária no campo de email com o userEvent.type(inputEmail, EMAIL_USER) , passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ( 'email@email.com' ).
e) Simulamos um clique no botão com o userEvent.click(btnSend) , passando o elemento do botão como parâmetro.
f) Verificamos se após o click , o campo de input do email retorna para vazio e se a tag <h2> , que anteriormente só exibia Valor: , agora recebe o email passado ao input, resultando em Valor: email@email.com.
Cheatsheet na documentação oficial:
https://testing-library.com/docs/dom-testing-library/cheatsheet
Testando apenas um componente
Agora imagine que está escrevendo teste para a aplicação, mas precisa apenas testar um componente que você criou ou vai criar. Não precisamos renderizar toda a nossa aplicação para realizar um teste: podemos renderizar apenas aquele componente específico e criar os testes para ele.
Usaremos a mesma aplicação anterior e criaremos um componente que mostra se o email é válido ou não. Crie o componente ValidEmail.js
// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
Substitua a linha do h2 no App.js e não esqueça de importar o ValidEmail:
<h2 data-testid="id-email-user">{ `Valor: ${ saveEmail }` }</h2>
// Substitua a linha de cima pela a debaixo.
<ValidEmail email={ saveEmail } />
Rode os testes e observe que mesmo sem mudar nenhum teste, todos eles passaram, assegurando que nossa aplicação continua funcionando mesmo após essa mudança (super conveniente, certo?). Agora falta testar essa funcionalidade nova que adicionamos. Mas testaremos apenas renderizando o nosso componente ValidEmail . Crie um arquivo ValidEmail.test.js.
import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
Observe que a estrutura é bem parecida com a dos outros testes. O que foi modificado é o que está sendo renderizado. No lugar de render(<App />) , colocamos render(<ValidEmail email={ EMAIL_USER } />) . O componente que queremos renderizar precisa de uma props para funcionar, portanto precisamos passar um valor para ela, que no caso é email={ EMAIL_USER } . O teste verifica se, com a prop passada, o nosso teste passará.
Já estamos testando o cenário onde o email é válido, agora precisamos testar o cenário contrário, ou seja, quando o email é inválido. Para isso, basta criar um novo teste, definindo a constante EMAIL_USER com o valor de um email inválido e alterando o texto buscado para Email inválido . Adicione o teste abaixo e rode os testes:
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
Agora, para você começar a fixar o assunto, adicione novas funcionalidades a esse componente e faça o teste:
Não exibir a mensagem caso o email ainda não tenha sido enviado.
Mude a cor do texto caso o email seja válido ou inválido.
Dicas: Você pode usar o .not para negar o expect ( .not.toBeInTheDocument() ) no seu teste e também usar a propriedade styles no seu componente para trocar a cor.
16/02 - 14.2 - React Testing Library: Mocks e Inputs
Os Mocks
O objetivo de mockar uma função, módulo ou requisição é permitir a quem desenvolve ter controle sobre todo o funcionamento de seus testes. Pense em uma requisição de API que constantemente muda seu retorno. Como ter certeza do seu retorno e, principalmente, de que seu teste não está caindo em um falso-positivo ?
No exemplo abaixo, podemos ver um caso em que simular o comportamento da função seria necessário para o teste:
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});
Mockar o comportamento da função retornaNumeroAleatorio() para garantir que ela está, nesse teste, retornando um número par, seria a solução para esse impasse!
Dentre as principais formas de se mockar algo somente utilizando Jest, destacam-se três:
jest.fn();
jest.mock();
jest.spyOn();
Veja o vídeo abaixo para entender melhor sobre simulação de comportamentos
Mockando funções com Jest
O método jest.fn() configura-se como a forma mais simples de se mockar algo: ele transforma uma função em uma simulação. Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, o comportamento definido no mock será chamado, em vez da função original.
Ele é muito útil para casos como o do exemplo da seção anterior, em que precisamos ter controle dos números gerados aleatoriamente.
Fazendo o teste para saber se a função é chamada, temos:

test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});
Esse teste deveria passar, não? Afinal, a função foi chamada logo acima dele. Mas ele não passa e o erro nos indica o que fazer:
Matcher error : received value must be a mock or spy function
Esse erro acontece porque a propriedade toHaveBeenCalled , assim como outras que serão ensinadas a seguir, são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente .
Portanto, vamos utilizar o jest.fn() para testar a chamada dessa função:
test("#divisivelPorDois", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
  divisivelPorDois = jest.fn();

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
});
Ao declarar divisivelPorDois = jest.fn(); , estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função divisivelPorDois e que ela será uma simulação da função original.
Por ser uma simulação, podemos especificar qual vai ser o retorno da função . Basicamente, o que podemos dizer é: "No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, ao invés de um valor aleatório!" . Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value) . O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.
test("#divisivelPorDois", () => {
  // testando se a função foi chamada e qual seu retorno
  divisivelPorDois = jest.fn().mockReturnValue(true);

  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
  expect(divisivelPorDois()).toBe(true);
});
No exemplo acima, estamos manualmente chamando a função divisivelPorDois(); . Caso isso não seja feito, o teste expect(divisivelPorDois).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.
Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, utilizamos a propriedade toHaveBeenCalledTimes(number) :
test("#divisivelPorDois", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  divisivelPorDois = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(divisivelPorDois).toHaveBeenCalledTimes(0);

  expect(divisivelPorDois()).toBe("first call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(1);

  expect(divisivelPorDois()).toBe("second call");
  expect(divisivelPorDois).toHaveBeenCalledTimes(2);

  expect(divisivelPorDois()).toBe("default value");
  expect(divisivelPorDois).toHaveBeenCalledTimes(3);
});
É possível implementar vários comportamentos em uma simulação. No exemplo acima, note que a implementação mockReturnValueOnce se sobrepõe em relação ao mockReturnValue , que se torna um padrão apenas após os retornos de mockReturnValueOnce serem executados.
Mockando Módulos
Diferente do jest.fn() , que simula apenas uma função por vez, temos o jest.mock() , que tem como principal diferencial mockar todo um pacote de dependências ou módulo de uma vez.
Por exemplo: em um arquivo chamado math.js , temos as seguintes funções:
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
Utilizando o jest.fn() , teríamos que mockar todas as funções uma a uma. Com o jest.mock() , podemos mockar todas com um só comando:
jest.mock('./math');
Uma vez que mockarmos todo o arquivo math.js , passemos a simular o comportamento de todas as suas funções, porém sua implementação individual permanece indefinida. Caso passemos os parâmetros 1 e 2 para a função somar , por exemplo, o retorno será "undefined". Isso se dá porque a simulação deixou de acessar o comportamento da função original do math.js .
Apesar de podermos definir um retorno com mockReturnValue , há casos em que é útil ir além dessa capacidade de retornar valores e criar um novo comportamento para a função simulada. É o que o método mockImplementation(func) faz. Ele aceita uma função que deve ser usada como implementação.
Veja um exemplo:
const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
No exemplo acima, utilizamos também o método toHaveBeenCalledWith(...args) , que valida quais parâmetros foram passados para a função.
Assim como o mockReturnValueOnce , podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce.
Trabalhando com mock e funções originais
Você já aprendeu que ter controle sobre o comportamento de uma função e usar matchers como o toHaveBeenCalled são ferramentas essenciais para quem desenvolve.
Existem casos nos quais é útil verificar os efeitos colaterais de uma função , como em uma alteração de um elemento na página, por exemplo. Mas como fazer isso se, ao mockar uma função, ela perde sua implementação original? E ao mesmo tempo, sem mockar , não podemos testá-la com o matcher?
O jest.spyOn() é capaz de resolver esse problema. Ele "espia" a chamada da função simulada, enquanto deixa a implementação original ativa.
const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});
Podemos notar no exemplo que a simulação da função é criada, mas sua implementação é mantida, e a soma realizada.
Há também como limpar, resetar ou restaurar mocks . Existem três métodos capazes de fazer isso:
mock.mockClear()
Útil quando você deseja limpar os dados de uso de uma simulação entre dois expect s;
mock.mockReset()
Faz o que o mockClear() faz;
Remove qualquer retorno estipulado ou implementação;
Útil quando você deseja resetar uma simulação para seu estado inicial;
mock.mockRestore()
Faz tudo que mockReset() faz;
Restaura a implementação original;
Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;
Como exemplo, imagine que você queira testar a função mockada somar implementando para ela um método de subtração, mas que depois você queira redefinir as implementações do mock .
const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});
No exemplo acima, por termos usado o jest.fn(), não há como restaurar as implementações originais da função, pois suas funcionalidades não permitem. A única ferramenta que nos permite transitar entre simulação e comportamento original é o jest.spyOn() .
const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});

Testando uma chamada de API no React
Os testes que dependem de requisições são os mais beneficiados com o uso do mock . Excluem problemáticas como falha na API, instabilidade de internet e tamanho de retorno.
Agora que você já conheceu o básico de mockar funções e módulos no Jest, vamos ver como isso funciona em uma aplicação React. Utilizaremos a api de piadas aleatórias para acompanhar os exemplos. Primeiro crie uma aplicação com npx create-react-app , substitua o App.js pelo conteúdo abaixo:
// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        {joke}
      </div>
    );
  }
}

export default App;
Teste se sua aplicação tem o funcionamento correto no navegador retornando uma piada aleatória a cada vez que a pagina é atualizada.
Agora temos o problema, como testar a aplicação sem que quebre toda vez que nossa api retornar uma nova piada diferente? 🤔
Para resolver esse problema, vamos ver dois exemplos com o Jest que vão nos permitir mockar , respectivamente, um módulo e sua implementação.
Exemplo 1
Substitua o arquivo App.test.js pelo conteúdo abaixo:
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
Vamos em partes entender o que esta acontecendo:
A constante joke cria um objeto similar ao que é retornado da API ;
O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ;
As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.
Exemplo 2
Existem diversas formas de mockagem , você se lembra que a função fetch é uma Promise ? Que vantagem isso traz dentro dos testes? Veja no código abaixo:
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
O código é muito similar ao do primeiro exemplo, alterando somente o mock .
Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise , e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise , que quando resolvida retorna sua piada.
Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await , onde temos o mock dessa forma:
global.fetch = jest.fn(async () => ({
  json: async () => joke
}));
Mockar requisições é uma coisa realmente complexa mas, Palma, palma, não priemos cânico , você pode revisitar o conteúdo sempre que precisar e com o tempo e prática, estará fazendo mocks como se não fosse nada.
Nestes casos, utilizamos o mock para evitar uma chamada externa à API, tornando o nosso teste mais rápido e confiável, retornando o resultado contido na constante joke . Imagine que a API saia do ar ou que perdemos acesso à internet enquanto o teste roda. O teste quebraria, apesar do seu código estar funcionando. Mockar a chamada à API evita esse tipo de problema. Outro ponto é que seus testes vão rodar mais rápido se você não fizer uma chamada real à API todas as vezes que você for rodar seu teste.
Testando inputs em React
Agora, vamos falar um pouco sobre teste de formulários, que são um pouco diferentes do resto da página porque normalmente os componentes já estão em tela no momento do carregamento mas os valores do input não estão. Então precisamos, nos testes, interagir com o input da mesma forma que a pessoa que está utilizando a aplicação faria para poder testá-lo corretamente.
Vamos primeiro criar dois campos de texto, um para digitar nome e outro para digitar e-mail.
No arquivo App.js de sua aplicação react coloque o código abaixo e veja no navegador e no console dele como funciona:
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;

    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ (e) => this.handleInput(e) }
            />
          </label>
        </p>
      </div>
    );
  }
}
export default App;
Vamos escrever o teste, ele vai interagir com os inputs, colocar valores neles, assim como quem navegar pela página faria. Depois, vamos testar se o que for digitado aparece na página.
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com');
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
No código, vemos como utilizar o userEvent . Observe que importamos uma biblioteca auxiliar para ter acesso a esta funcionalidade, que simula interações entre a pessoa usuária e a página. Ela é recomendada pois sua execução se aproxima mais a de uma interação real de uma pessoa, do que o método nativo que existe no RTL , o fireEvent .
O userEvent dispara um evento no elemento da página selecionado. Observe a sintaxe no nosso exemplo: estamos utilizando o evento type , e no primeiro argumento da função informamos o elemento que queremos interagir ( inputNome ), e no segundo parâmetro, o que queremos digitar neste campo ( 'Estudante da Trybe' ).
Uma coisa que pode ajudar a entender o que está acontecendo é O console.log na função handleInput do arquivo App.js exibindo a variável value . Fazendo isso, o console.log aparece no teste, o que lhe dará a certeza de que a RTL está realmente renderizando sua página e inserindo nos campos os valores, da mesma forma que uma pessoa faria.
Para visualizar o comportamento dos testes acima basta ter uma aplicação react e substituir o arquivo App.js e App.test.js.

17/02 - 14.3 - React Testing Library: Testando React Router
Vamos passar por alguns pontos antes para termos uma maior compreensão do que vamos realizar:
1 - A biblioteca history nos permite acessar a sessão de histórico do navegador e também a localização atual (URL). Nesse link você pode encontrar a documentação.
Você pode encontrar na documentação maiores detalhes sobre todos os métodos e propriedades da biblioteca, mas para nossos testes, os mais utilizados serão o push , que permite mudar de rota dentro do ambiente de testes , e o location.pathname , que retorna a URL exata em que você está.
De dentro da biblioteca, você também importará a createMemoryHistory , que é feita para ser utilizada em ambientes que não possuem DOM, por exemplo, em testes automatizados. O intuito dessa função é criar um novo histórico de navegação, para ser utilizado durante o teste. Essa biblioteca é bastante utilizada nesses casos, como veremos no próximo tópico.
2 - A função renderWithRouter é uma função customizada para fazer testes com rotas, uma vez que a função render normal da RTL não dá suporte ao router . Ela pode ser muito útil e usa o createMemoryHistory para embutir no seu componente renderizado a lógica de histórico de navegação , para uso nos testes. Veja o código de exemplo para se familiarizar.
Testando React Router
Agora, vamos praticar o que aprendemos. Siga os passos abaixo para criar e testar uma aplicação usando React Router :
Primeiro, utilize o create-react-app com o nome que desejar.
Depois disso, vamos instalar as dependências que utilizaremos nesse projeto, a react-router-dom , history e a @testing-library/react , com o comando abaixo.
npm i react-router-dom@v5
Por último vamos copiar esse código para dentro do nosso arquivo App.js apagando tudo o que já estiver lá.
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
Repare que, para efeito de aprendizado, temos mais de um componente dentro do arquivo App.js , por isso o export default no componente App . Os outros componentes, que estão sendo exportados acima do component App , também terão os seus respectivos exports . Lembrando que isso não é uma boa prática . Estamos fazendo dessa forma para diminuirmos a complexidade da aplicação, com o intuito de facilitar o entendimento.
Outro ponto de atenção é que, quando utilizamos o export default e o export , a maneira de importar os componentes sofre uma pequena alteração - que veremos na hora de realizar os testes.
Ao terminar de instalar, vamos nos deparar com um problema! A nossa página dará o seguinte erro:
You should not use <Link> outside a <Router>
Esse erro acontece porque o BrowserRouter deve encapsular todos os itens chamados pelo react-router-dom e, no nosso caso, existem dois <Link> no App.js , o que nos leva a esse erro. Vamos resolver isso colocando a tag <BrowserRouter> no arquivo index.js , deixando ele da seguinte forma:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
Agora sim! Vamos ao navegador entender o que esse código está fazendo. Basicamente, o nosso código cria um router básico com duas páginas, a Home e a About , além de criar uma página de Not Found para quando a pessoa digitar uma URL que não existe.
Após isso, vamos usar a função renderWithRouter que é uma função helper ou assistente. Uma função helper executa uma tarefa específica e não depende de outras funções.
No nosso caso, a helper irá criar um histórico e renderizar o componente que iremos testar. Para não ficarmos sem contexto de onde essa função veio, ela foi tirada da documentação oficial da Testing Library que você pode encontrar aqui. Vamos salvar a helper num arquivo src/renderWithRouter.js e entendê-la antes de escrevermos os testes:
//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};
export default renderWithRouter;
Aqui utilizaremos a biblioteca history para criar um histórico de navegação. A helper irá passar o histórico para o componente Router , e vai renderizar o componente que quisermos dentro dele, bastando apenas passar o componente como argumento quando a chamarmos.
Existe uma forma de fazer sem o helper , mas ela implica em escrever bem mais código. Esse link tem um exemplo muito parecido com o que estamos fazendo, a grande diferença é que lá eles não utilizam uma função auxiliar. Repare que a sintaxe que utilizaremos será bem parecida com a do site, com a diferença de verbosidade que no exemplo do link acima será bem maior.
Com a ajuda desta função, vamos escrever muito menos código na hora de testar, porque precisamos apenas chamar a renderWithRouter . Não podemos esquecer que devemos colocar o <BrowserRouter /> encapsulando o componente <App /> inteiro.
Para fazermos isso, devemos colocá-lo no index.js . Isto é necessário porque queremos ter controle sobre o BrowserRouter nos testes. Se ele estiver dentro do componente que vamos testar, nós perderemos o controle sobre ele.
Uma outra característica dessa função é que ela retorna tanto o componente que passamos como parâmetro, já encapsulado no router, quanto o histórico que geramos, o que também serve para nos levar a outras páginas com facilidade.
Escrevendo os testes da Aplicação
Agora que vimos o App que vamos testar e entendemos a função que vamos utilizar, iremos escrever os testes dentro do arquivo src/App.test.js:
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';

it('deve renderizar o componente App', () => {
  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});
Aqui, fizemos os imports necessários: o próprio react , a helper e o componente que iremos testar.
Importamos o teste em si, que chama a helper passando o componente a ser renderizado. Nesse primeiro caso, mostraremos como renderizar a aplicação toda, fazendo um teste geral, depois vamos ver como renderizar um componente específico.
Continuando os testes, vamos clicar no link About em nossa aplicação e verificar se estamos na página correta.
// import React from 'react';
// import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

// it('deve renderizar o componente App', () => {
//   renderWithRouter(<App />);

//   const homeTitle = screen.getByRole('heading', {
//     name: 'Você está na página Início',
//   });
//   expect(homeTitle).toBeInTheDocument();
// });

it('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});
Com o userEvent (que deve ser importado da @testing-library/user-event ), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre ). Depois disso, utilizaremos o history.location.pathname para verificar se estamos na página correta e, por último, checamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.
Agora que temos mais um caso de uso, é interessante colocar o describe, ele ajudará bastante na hora de separar os testes e numa eventual falha, saberemos qual teste falhou. Vamos colocá-lo abaixo:
// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

describe('teste da aplicação toda', () => {
  // it('deve renderizar o componente App', () => {
  //   renderWithRouter(<App />);

  //   const homeTitle = screen.getByRole('heading', {
  //     name: 'Você está na página Início',
  //   });
  //   expect(homeTitle).toBeInTheDocument();
  // });

  // it('deve renderizar o componente Sobre', () => {
  //   const { history } = renderWithRouter(<App />);

  //   const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  //   expect(aboutLink).toBeInTheDocument();
  //   userEvent.click(aboutLink);

  //   const { pathname } = history.location;
  //   expect(pathname).toBe('/about');

  //   const aboutTitle = screen.getByRole('heading',
  //     { name: 'Você está na página Sobre' });
  //   expect(aboutTitle).toBeInTheDocument();
  // });
});
Encerrando esse teste de aplicação total, vamos testar a página que deveria aparecer ao digitar na barra de endereços uma página que não existe:
// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
// import App from './App';

// describe('teste da aplicação toda', () => {
//   it('deve renderizar o componente App', () => {
//     renderWithRouter(<App />);

//     const homeTitle = screen.getByRole('heading', {
//       name: 'Você está na página Início',
//     });
//     expect(homeTitle).toBeInTheDocument();
//   });

//   it('deve renderizar o componente Sobre', () => {
//     const { history } = renderWithRouter(<App />);

//     const aboutLink = screen.getByRole('link', { name: 'Sobre' });
//     expect(aboutLink).toBeInTheDocument();
//     userEvent.click(aboutLink);

//     const { pathname } = history.location;
//     expect(pathname).toBe('/about');

//     const aboutTitle = screen.getByRole('heading',
//       { name: 'Você está na página Sobre' });
//     expect(aboutTitle).toBeInTheDocument();
//   });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });
// });

A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se o texto que aparece no navegador, ao digitar um caminho para uma página que não existe, é encontrado.
Testando componentes isoladamente
Até aqui nós aprendemos como testar nossa aplicação renderizando ela por completo. Mas é possível testar os componentes separadamente também. Vamos ver como:
it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />);

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument();
});
Você verá que, ao copiar esse test, o Jest retornará um erro, dizendo que o componente About não foi definido. Isso é porque ele não foi importado nesse arquivo! Altere a linha de import do App.js para:
  import App, { About } from './App';
Talvez você esteja se perguntando porque o App não foi importado com {} e o About foi. Isso aconteceu porque só pode haver um export default por arquivo (que faz o componente ser importável sem as chaves {} ) e o App tomou esse espaço, então os outros componentes exportados ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {} .
Para ver a diferença entre a renderização da aplicação inteira e de apenas um componente, cause um erro nos testes, alterando o que é esperado no getByRole dos testes. Você verá que, ao importar apenas o componente, toda a estrutura ao redor dele não é renderizada. No nosso caso de exemplo, os links do topo não são renderizados.

- fazer exercícios de tests
*/