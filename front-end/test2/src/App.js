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
*/