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
*/