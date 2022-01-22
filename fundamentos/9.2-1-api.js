// Application Programming Interface (API)
// API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas.
// Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação. Essas APIs retornam dados em response (resposta) a um request (requisição) do cliente, nos permitindo acesso a dados de fontes externas (imagem de Api em contexto de web:

// APIs também nos permitem compartilhar dados com outros sites ou aplicações. Você já deve ter observado a opção de "Compartilhar no Facebook" ou "Compartilhar no Twitter". No momento em que você clica nessa opção, a aplicação que você está visitando se comunica com sua conta do Twitter ou Facebook e altera os dados do seu status, por exemplo, através de uma API.
// Por que precisamos de APIs?
// Imagine a seguinte situação: você está trabalhando em um blog e gostaria de exibir para os visitantes os tweets que fazem referência a ele.
// Uma estratégia seria contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados em tempo real.
// Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.
// Quem precisa criar e manter APIs?
// APIs públicas e baseadas na web são desenvolvidas e aprimoradas constantemente por grandes empresas de tecnologia (principalmente de mídias sociais), organizações governamentais, startups de software ou qualquer outra empresa ou pessoa que colete dados e precise disponibilizá-los de algum modo.
// Como uma API se diferencia de um back-end padrão de um site?
// (Toda API é um back-end, mas nem todo back-end é uma API)
// Um back-end padrão de um site retorna templates (um arquivo HTML pronto, por exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response .
// As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON .
// O que é JSON e por que o usamos?
// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
// {
//   "trybers": [
//     {
//       "name": "Lauro Cesar",
//       "github": "lauroandrade",
//       "status": "#vqv"
//     }
//   ]
// }
// Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value . A key (chave) fica no lado esquerdo e o value (valor) no lado direito. No array trybers, podem ser adicionados vários outros objetos.
// JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras. Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.
// Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse() , assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.
// Vamos ver um breve exemplo a respeito disso. Para simplificar, no arquivo script.js , vamos forçar por meio das crases para que nosso JSON inicie-se como do tipo string.

// Crie um arquivo index.html e adicione o seguinte código:
// Também crie um arquivo script.js e adicione a lógica a seguir:

// (arquivos 9.2):
const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});
//Nesse script, utilizamos o JSON.parse() para analisar nosso json (nesse caso, uma string) e converter em um formato compatível com o JavaScript. Assim, temos mais poder sobre as informações e podemos manipular elas para, por exemplo, adicionar elas ao DOM.

// Como utilizar APIs na minha aplicação?
// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
// * Encontre uma API pública, que seja bem documentada e mantida;
// * Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
// * Entenda o formato dos dados disponíveis;
// * Faça requests e receba responses da API com os dados que você deseja receber.
// Fazendo uma requisição a uma API
// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
// No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response.

// wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q

// Você também pode abrir o link dentro do seu browser e observar o retorno dos dados no formato JSON: https://pokeapi.co/api/v2/pokemon/ditto