//JS E LÓGICA DE PROGRAMAÇÃO
//4.1 PRIMEIROS PASSOS - VARIÁVEIS
// let age = 43; 
// let fullName = "Edgard Giorge";
// age = 42;
// console.log(age);
// console.log(fullName);

//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas
// let movie = "A Grande aposta"; //Tipo String
// let score = 10; // tipo number. JS é dinâmico ele entende o q vc quer!
// let isGood = true; //boolean. No console do HTML com typeof te mostra o tipo de variável! 
// let name; // indefinida
// let color = null; // nula, bom pra alterar, na sequência uma cor mais pra frente
// let salary = 3500; // + - * / **
// console.log(3 ** 3); // 3 elevado a 3 (exponencial)
// salary+=1; // +=1 ou ++ incrementa 1 , -- decrementa 1
//console.log(salary); 
//console.log(typeof salary); // traz o tipo de variável

//Condições IF e ELSE, operadores de atribuição e operadores lógicos
// if (condição) {
//     código
// } else if (outraCondição) {
//     outro código
// }
//let trybe = 19.31; //Exemplo de operador &&
// if (trybe >= 14 && trybe < 14.40) {
//   console.log("Esquenta");    
// }else if (trybe >= 16.20 && trybe < 18.00) {
//   console.log("Aula ao vivo");  
// }else if (trybe >= 19.30 && trybe < 20.00) {
//     console.log("Fechamento"); 
// }else {
//   console.log("Fora dos momentos síncronos");    
// }
// const bebidaPrincipal =  'cafezinho'; //Exemplo de operador ||
// const bebidaAlternativa = 'suco de laranja';
// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }
// console.log(!null); // true Exemplo de operador ! (not)
// console.log(!undefined); // true

// Switch e Case
// let trafficLight; // está undefined de início
// trafficLight = "verde"; // defini um valor
// switch (trafficLight) { //chamei a variável
//   case "vermelho":      // Se a variável for vermelho...
//     console.log("pare");// Imprima pare
//     break;              // Se a condição for verdadeira pare o comando
//   case "amarelo":
//     console.log("atenção");
//     break;
//   case "verde":
//     console.log("siga");
//     break;
//   default:              // caso não atenda nenhuma condição
//     console.log("valor não identificado");
// }

//4.2 JavaScript - ARRAY E LOOP FOR
//Arrays (listas)
//let pizzas = ["4 Queijos", "Frango", "Palmito"]; //são chamados de índice ou chave, começam na posição 0
//pizzas[3] = "Calabresa";     // acrescenta mais um elemento na posição...
// pizzas[4] = "Peito de Peru"; // escolhida no caso [3] e [4]
// pizzas.push("Chocolate"); // acrescenta na última posição do array
//pizzas.pop(); //apaga a ultima posição do array "Chocolate"
//pizzas.shift()//apaga a primeira posição do array "4 Queijos"
//console.log(pizzas.indexOf("Calabresa"));// mostra em qual posição "o índice" de um item no array, no caso a Calabresa, está na posição 3.
// console.log("Menu de sabores: " + pizzas); //irá trazer todas as pizzas
//console.log(pizzas); //traz o conteúdo do array em []
//console.log(pizzas[1]); //traz o que tem na posição do índice, no caso 1( a segunda posição)
// console.log(pizzas.length); //traz o tamanho/quantidade de elementos do array
// console.log(pizzas.sort()); //traz em ordem alfabética ou numérica
// let separarString = 'Edgard Giorge de Souza';
// arrayDaString = separarString.split(" "); // Separa a string em um array " " neste caso com espaço 
// console.log(arrayDaString);
// arrayDaString = separarString.split(" ", 3); //separa mas trz só as 3 primeiras
// console.log(arrayDaString);
// console.log(arrayDaString.reverse()); //inverte a posição de um array
// console.log(arrayDaString.join()); // transforma um array/objeto em string e traz sem espaço e mantém as vírgulas do array
// console.log(arrayDaString.join(' ')); // traz uma string com espaço
// console.log(arrayDaString.join('-')); // traz uma string separada por hífen
// FOR Estrutura de repetição com array
// for (let index=0; index < pizzas.length; index += 1) {//let index=0 cria uma variável index e indica seu estado atual e de qual posição irá iniciar a varredura do array, ideal é começar sempre na posição 0. index < pizzas.length qual a condição pra varrer, até aonde eu repito a condição?. index += 1 ou ++ acrescenta 1 a cada varredura.
// let mensagens = "Sabor da pizza é " + pizzas[index] + "!";
// console.log(mensagens);
// let frutas = ["Maça","Laranja","Abacaxi","limao","Melância"];
// let frutaCitricas = ["Laranja", "limao"];
// let arrayFinal = [];
// for ( let i = 0 ;  i <  frutas.length ; i++) {
//   if (frutas[i] == frutaCitricas[0] || frutas[i] == frutaCitricas[1]) {
//     arrayFinal.push(frutas[i] )
//   } else {
//     console.log('não é citrica');
//   }
// }
// for (let i = 0 ;  i <  arrayFinal.length ; i++) {
//   console.log("resultado: ", arrayFinal[i]);
// }

//For/of
// let numeros = [1,2,3,4,5];
// for(let numero of numeros) { // percorra o array numeros e acrscente estes dados a variável número, cria loops     // resultado: 1 2 3 4 5
//   console.log(numero);
// }  
// let word = "Hello"; //permite iterar os valores das propriedades
// for (let letter of word) { //resultado: H e l l o
//   console.log(letter);
// }
// let arrOfNumbers = [10, 20, 30];//somar um valor a cada elemento do array e retorná-los
// for (let sum of arrOfNumbers) { // resultado: 11 21 31
//   sum +=1;             // importante: ele não altera o valor do array (arrOfNumbers)
//   console.log(sum);
// }

//4.3 - OBJETOS E FUNÇÕES
//Objetos:
// let eu = { //objeto edgard receberá dados e até outro objeto (borninfo)
//   name: 'Edgard',
//   'last-name': 'Giorge', //nomeclatura das Key's, kebap-case separado pot hífen, tem que ser por ''
//   age: 43,
//   profession: 'Engenheiro de software Júnior',
//   hobby: ['correr','game','futebol','ouvir música'],
//   borninfo: {
//     city: 'São Paulo',
//     state: 'São Paulo'
//   }
// };
// eu['fulName'] = eu.name + ' ' + eu['last-name']; //Cria outra propriedade
// console.log('Nome completo : ' + eu.fulName); //usar notação de ponto
// console.log('Idade ' + eu['age'] + ' anos'); // usar notação de aspas
// console.log('Nascido na cidade de ' + eu.borninfo.city + ' do Estado de '+ eu.borninfo.state);
// console.log('Hobbys: ' + eu.hobby);
// console.table(eu); //Imprimi o objeto em tabela 
// let diasDaSemana = { //As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades nomeadas com números, só usando notaçãpo de colchetes
//   1: 'domingo',
//   2: 'segunda',
//   3: 'terça',
//   4: 'quarta',
//   5: 'quinta',
//   6: 'sexta',
//   7: 'sábado',
//   };
//   console.log(diasDaSemana['1']); // resp. domingo
// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
//Duas formas de se resolver
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
// // ou 
// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

// For In
// let cars = ['Saab', 'Volvo', 'BMW']; //resultado for in no array:
// for (let index in cars) {           //Saab
//   console.log(cars[index]);         //Volvo
// }                                   //BMW
// let car = {       //resultado for in com iteração nas chaves de um objeto: 
//   type: 'Fiat',   //type Fiat
//   model: '500',   //model 500
//   color: 'white', //color white
// };
// for (let index in car) {
//   console.log(index, car[index]);
// }
//Imprima os valores de cada objeto juntos de acordo com cada uma das chaves
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };
// for (let properties in info) {
//   if (
//     properties === 'recorrente' &&
//     info[properties] === 'Sim' &&
//     info2[properties] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//     } else {
//    console.log(info[properties] + ' e ' + info2[properties]);
//   }
// }

// Funções:
// function nomeDaFuncao(recebe entrada de valores que uma função espera(se precisar), param1, param2 ,devem ser separados por vírgula) {
//   var resultado  = param1 + param2;//código que faz alguma coisa
//   return resultado; //ela pode retornar um valor
//   }
//   para invocar uma função … nomeDaFuncao(10, 20);
// function bomDiaTryber(nome) {      //Função sem parâmetro
//   console.log('Bom dia, ' + nome);
// }
// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo
// function bomDia() {
//   return 'Bom dia!';
// }
//console.log(bomDia());   
// let situacao = 'desligado'; // outra Função sem parâmetro
// function ligarDesligar() {
//   if(situacao  === 'desligado') {
//     situacao = 'ligado';
//   }else {
//     situacao = 'desligado';
//   }
// }
// ligarDesligar();
// console.log(situacao);
// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
// function maiorNum(primeiroNum, segundoNum) { // Funções com parâmetros
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }
// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais
//Exemplo de função (diagnóstico 12/11)resultado esperado: 10...9...8...7...6...5...4...3...2...1…!
// let numeros = "";
// let pontos = "...";
// function count_down(x) {
//     for(let index = 0; index < x; index += 1) {
//         let contador = x - index;
//         numeros = numeros + contador + pontos;
//     }
//     console.log(numeros + "!");
//   } 
// count_down(10);
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// function verificaPalindrome(string) { // espera que entre uma string
//   let reverse = string.split('').reverse().join(''); // transforma em array sem espaço, depois inverte, depois transforma em string de novo
//   if (reverse === string) { 
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(verificaPalindrome('arara')); //true
// console.log(verificaPalindrome('desenvolvimento')); //false
//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.Array de teste: [2, 3, 6, 7, 10, 1];.Valor esperado no retorno da função: 4 .
// function arrayDeInteiros(numeros){
//   let maiorIndice = 0;
//   for(let index in numeros){ // incrementa 1 no indice enquanto for < que numeros
//     if(numeros[maiorIndice] < numeros[index]){  
//     maiorIndice = index;
//     } 
//   }
//   console.log(maiorIndice);
// }
// arrayDeInteiros([2, 3, 16, 7, 10, 1]);
// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.Array de teste: [2, 4, 6, 7, 10, 0, -3];.Valor esperado no retorno da função: 6 .
// function arrayDeInteiros(numeros){
//     let menorIndice = 0;
//     for(let index in numeros){ // incrementa 1 no indice enquanto for < que numeros
//       if(numeros[menorIndice] > numeros[index]){  
//       menorIndice = index;
//       } 
//     }
//     console.log(menorIndice);
//   }
//   arrayDeInteiros([2, 4, 6, 7, 10, 0, -3]);
//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];. Valor esperado no retorno da função: Fernanda .
// function maiorPalavra (nomes) {
//   let nomeDeTeste = nomes[0];
//   for (index in nomes){
//     if (nomeDeTeste.length < nomes[index].length){
//       nomeDeTeste = nomes[index];
//     } 
//   }
//   return nomeDeTeste;
// }
// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. Array de teste: [2, 3, 2, 5, 8, 2, 3]; . Valor esperado no retorno da função: 2 .
//Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2
//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Valor de teste: N = 5. Valor esperado no retorno da função: 1+2+3+4+5 = 15.
// function somaTodosNumeros(numeros) {
//   let total = 0;
//   for (let index = 1; index <= numeros; index += 1) {
//     total = total + index;
//   }
//   return total;
// }
// console.log(somaTodosNumeros(5)); //15
//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. Valor de teste: 'trybe' e 'be' Valor esperado no retorno da função: true verificaFimPalavra('trybe', 'be'); Retorno esperado: true verificaFimPalavra 'joaofernando', 'fernan'); Retorno esperado: false
// function verificaFimPalavra(palavra, fimPalavra) {
//   palavra = palavra.split('');
//   fimPalavra = fimPalavra.split('');
//   controle = true;
//   for (let index = 0; index < fimPalavra.length; index += 1) {
//     if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//       controle = false;
//     }
//   }
//   return controle;
// }
// console.log(verificaFimPalavra('trybe', 'be')); //true
// console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

//Bloco5 - JavaScript: DOM, Eventos e Web Storage

//5.1 - DOM E SELETORES

//Aula ao vivo
//console.log('oi! tudobem?')
 // OBJETO WINDOW
 // OBJETO DOCUMENT
//console.log(document)
//  OBJETO BODY
//console.log(document.body);
 // BUSCAR ELEMENTOS
    // retornar 1 elemento específico
       //console.log(  document.getElementById('cont1')  )
      // console.log( cont1 );
    // retornar vários elementos com algo em comum
          //let minhaTag = document.getElementsByClassName('estilo1')
          //let minhaTag = document.querySelector('.estilo1 ');
          //let minhaTag = document.querySelectorAll('#cont1 .estilo1');
          //console.log( minhaTag  );
    // buscar elementos anteriores
          //let minhaTag = cont2.parentNode
          //console.log( minhaTag  );
    // buscar elementos filho
          //let minhaTag = cont2.children
          //console.log( minhaTag[0] );
    // buscar a partir de qualquer elemento
         // cont1.getElementsByClassName('estilo1');
 // ATUALIZAR PROPRIEDADES DOS ELEMENTOS
         // DOC https://www.w3schools.com/jsref/default.asp
         //cont1.querySelector('h2').innerText = 'Minha Lista 1';
         //document.querySelector('ul').style.backgroundColor = '#cccccc';
         //document.querySelectorAll('ul')[0].style.backgroundColor = '#cccccc';
         //REMOVE
         //document.querySelectorAll('ul')[1].removeAttribute("style")
 // ADD/REMOVE CLASS,ID,STYLE     
          //document.getElementsByTagName('li')[2].classList.remove("estilo1")
         //document.getElementsByTagName('li')[2].classList.add("estilo2")

         //document.querySelectorAll('.estilo1')[0].setAttribute('id','itemFavorito')
         //document.querySelectorAll('.estilo1')[0].removeAttribute("id");
 // EXEMPLOS COM FUNÇÕES
// function clearTextByTagName(tagName){
//      let tags = document.getElementsByTagName(tagName)

//      for(let i = 0; i < tags.length; i++){
//           if(tags[i].classList == 'estilo1'){
//             continue; // o que tiver class estilo1 , não executar a função'pular'
//           }
//           tags[i].innerText = '';

//      }
//      console.log(tags)     
// }
// clearTextByTagName('li');

//Parte 2 - Seletores de elementos
//Conteúdos
//Exercício do conteúdo getElementById 
// //1- Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// const paragraph = document.getElementById("paragraph");
//   paragraph.style.color = "green";
// console.log(document.getElementById('page-title').innerText = 'Love Actualy');
// //2- Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// console.log(document.getElementById('second-paragraph').innerText = 'Muito bom este filme');
// //3- Por fim, recupere o subtítulo e altere-o também.
// //console.log(document.getElementById('subtitle').innerText = 'Gênero = Romance Natalino');
// //Exercício do conteúdo getElementsByTagName e ClassName

//Exercício do conteúdo getElementByClassName e TagName
// // 1- Adicione uma classe igual para os dois parágrafos. R. <p class='testeClasse'
// //2- Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName;
// console.log(document.getElementsByClassName('testeClasse')[1].innerText);
// //3- Altere algum estilo do primeiro deles.
// let paragrafo1 = document.getElementsByClassName('testeClasse');
// paragrafo1[0].style.color = 'red';
// //4- Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
// let subtitulo = document.getElementsByTagName('h4');
// subtitulo[0].style.color = 'brown';
//Parte III - Qual seletor usar?
//Exercício do conteúdo Qual seletor usar
// const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
// emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';
// const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
// for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
//   emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
// }
// const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
// noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';
// const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
// for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
//   noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
// }
// const footer = document.getElementById('footer-container');
// footer.style.backgroundColor = 'rgb(0, 53, 51)';

//5.2 - TRABALHANDO COM ELEMENTOS
//Aula ao vivo
// Cirar elemento HTML por Javascript() 
//let div = document.createElement('div');
//div.className = 'main-box';
//div.id = 'fourth';
// Adicionar e remover elemento no DOCUMENTO HTML
//document.getElementsByTagName('main')
//main.appendChild(div);
//main.removeChild(div);
//div.innerText = 'conteudo....';
// encontrar o primeiro filho
//let firstElem = document.querySelector('#first').firstElementChild;
//console.dir(firstElem);
// encontrar o próximo irmão
//let proxElem = document.querySelector('#first').nextElementSibling;
//console.log(proxElem);
// colocar multiplas classes aos elementos por javascript
//drawing.className = "yellow circle small";
/* 
drawing.classList.remove('red');
drawing.classList.remove('circle');
drawing.classList.remove('small');
drawing.classList.add('yellow');
drawing.classList.add('circle');
drawing.classList.add('small');
 */
//console.log(drawing.classList)
// Converter array em STRING
// let frutas = ["Banana","Laranja","Maça","Manga"];
//console.log(frutas)
//let resultado =  frutas.join(',')
//console.log(resultado); 
// Converter STRING em ARRAY
//let frutasArr = resultado.split(',');
//console.log('frutasArr: ', frutasArr)
// EXEMPLOS COM FUNÇÕES
//let arrClasses = ['yellow', 'circle', 'small'];
//let arrClasses2 = ['red', 'square', 'small'];
//let arrClasses3 = ['green', 'circle', 'small'];
//let ball1 = createCustomElement(arrClasses);
//second.appendChild(ball2);
//document.querySelector('.main-box').appendChild(ball1);
//document.querySelectorAll('.main-box')[1].appendChild(ball1);
//let ball2 = createCustomElement(arrClasses2);
//third.appendChild(ball2);
//createCustomElement(arrClasses3);
// function createCustomElement(myClasses){
//     let element = document.createElement('div');
//     let str = myClasses.join(' ');
//     element.className = str;
//     return element;
// }

//Parte I - Buscando elementos
//Conteúdos
//Exercício do conteúdo buscando elementos
// // 1. Acesse o elemento elementoOndeVoceEsta.
//  let ondeVcEsta = document.getElementById('elementoOndeVoceEsta')
// // 2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//  let pai = ondeVcEsta.parentElement;
//  pai.style.color = 'red';
//  // 3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//  let primeiroFilhoDoFilho = ondeVcEsta.firstElementChild; 
//  primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';
//  // 4- Acesse o primeiroFilho a partir de pai.
//  let primeiroFilho = pai.firstElementChild;
//  // 5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
//  let primeiroFilho2 = ondeVcEsta.previousElementSibling;
//  // 6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
//  let textElement = ondeVcEsta.nextSibling;
//  // 7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
//  let terceiroFilho = ondeVcEsta.nextElementSibling;
//  // 8- Agora acesse o terceiroFilho a partir de pai.
//  let terceiroFilho2 = pai.lastElementChild.previousElementSibling;
 
 // Exercicio Parte II - Criando elementos
//  // 1- Crie um irmão para elementoOndeVoceEsta.
//  let pai1 = document.getElementById('pai');
//  let irmaoElementoOndeVoceEsta = document.createElement('section');
//  irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
//  pai1.appendChild(irmaoElementoOndeVoceEsta);
//  // 2- Crie um filho para elementoOndeVoceEsta.
//  let filhoElementoOndeVoceEsta = document.createElement('section');
//  filhoElementoOndeVoceEsta.id = 'filhoelementoOndeVoceEsta';
//  ondeVcEsta.appendChild(filhoElementoOndeVoceEsta);
// // 3- Crie um filho para primeiroFilhoDoFilho.
// let filhoPrimeiroFilhoDoFilho =  document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);
// //4- A partir desse filho criado, acesse `terceiroFilho`.
// terceiroFilho2 = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

//Exercícios Parte III - Removendo elementos 
// // 1- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
// for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//   const currentChildren = pai.childNodes[index];
//   if (currentChildren.id !== 'elementoOndeVoceEsta') {
//     currentChildren.remove();
//   }
// }
// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();

// Exercícios Trabalhando com elementos - Agora a prática
// // 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
// const elementH1 = document.createElement('h1');
// elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
// document.body.appendChild(elementH1);
// // 2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
// const elementMain = document.createElement('main');
// elementMain.className = 'main-content';
// document.body.appendChild(elementMain);
// // 3. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
// const elementSectionCenter = document.createElement('section');
// elementSectionCenter.className = 'center-content';
// elementMain.appendChild(elementSectionCenter);
// // 4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
// const paragraph = document.createElement('p');
// paragraph.innerHTML = 'Texto Show';
// elementSectionCenter.appendChild(paragraph);
// // 5. Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
// const elementSectionLeft = document.createElement('section');
// elementSectionLeft.className = 'left-content';
// elementMain.appendChild(elementSectionLeft);
// // 6. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
// const elementSectionRight = document.createElement('section');
// elementSectionRight.className = 'right-content';
// elementMain.appendChild(elementSectionRight);
// // 7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
// const elementImg = document.createElement('img');
// elementImg.className = 'small-image';
// elementImg.src = 'https://picsum.photos/200';
// elementSectionLeft.appendChild(elementImg);
// // 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
// const elementUl = document.createElement('ul');
// elementSectionRight.appendChild(elementUl);
// const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
//       'Sete', 'Oito', 'Nove', 'Dez']
// for (let num in arrayNumbers) {
//       const elementLi = document.createElement('li');
//       elementLi.innerHTML = arrayNumbers[num];
//       elementUl.appendChild(elementLi);
// }
// // 9. Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
// for (let index = 1; index <= 3; index += 1) {
//       const elementH3 = document.createElement('h3');
//       elementH3.innerHTML = 'Show ' + index;
//       elementMain.appendChild(elementH3);
// }
// // Segunda Parte
// // 1.Adicione a classe title na tag h1 criada;
// const title = document.querySelector('h1');
// title.className = 'title';
// // 2.Adicione a classe description nas 3 tags h3 criadas;
// const elementsH3 = document.getElementsByTagName('h3');
// for (let index = 0; index < 3; index += 1) {
//       elementsH3[index].className = 'description';
// }
// // 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
// const sectionLeftContent = document.getElementsByClassName('left-content')[0];
// elementMain.removeChild(sectionLeftContent);
// // 4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
// const sectionRightContent = document.getElementsByClassName('right-content')[0];
// sectionRightContent.style.marginRight='auto';
// // 5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
// const sectionCenterContent = document.getElementsByClassName('center-content')[0];
// sectionCenterContent.parentNode.style.backgroundColor = 'green';
// // 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
// ul.lastChild.remove();
// ul.lastChild.remove();

//5.3 EVENTOS

//Aula ao vivo
// window.onload = function () { //função anônima, quando n tem nome
//       // o js no html esta declarado dentro do head, por isso, todo conteúdo do js deve iniciar só depois do html carregado, por este motivo o js deve estar dentro do windown.onload
//   const button = document.querySelector('#start-race-btn'); // chamou o button pro js
//   const car1 = document.querySelector('.car1'); //chamou o car1
//   const car2 = document.querySelector('.car2'); //chamou o car2
//   function reset() {
//     car1.style.marginLeft = '0px'; // deve iniciar em 0 pro carro não voltar, sem este valor ele é uma string vazia, com isso o cálculo do button não funciona
//     car2.style.marginLeft = '0px'; 
//   }
//   reset();  
//   button.addEventListener('click', function() { // tipo de evento, o que disparar
//     car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px'; // desloca o car1 pra esquerda de maneira aleatória e soma com o próprio valor atual pra continuar indo a esquerda, pra isso ele deve transformar a string em número inteiro, dai o uso do parseInt.
//     car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';
//     if ((parseInt(car1.style.marginLeft) + 200) > window.innerWidth) { // Se a margin esquerda do carro + o tamanho dele (200) for maior que o tamanho da largura da página, ele emite um alerta de ganhou e zera a margin esquerda novamente"
//       alert('Carro VERMELHO ganhou!!!');
//       reset();
//     } 
//     if ((parseInt(car2.style.marginLeft) + 200) > window.innerWidth) {
//       alert('Carro VERDE ganhou!!!');
//       reset();
//     }
//   });
// }

//DiNãmica Calculadora
// const input1 = document.querySelector('#numero1');
// const input2 = document.querySelector('#numero2');
// const btnSoma = document.querySelector('.soma');
// const btnSubtracao = document.querySelector('.subtracao');
// const paragrafoResultado =  document.querySelector('.resultado');
// function soma() {
//   if(input1.value !== '' && input2.value !== '') {
//     paragrafoResultado.innerHTML = parseInt(input1.value) + parseInt(input2.value);
//   } else{
//     alert('Falta um número'); 
//     paragrafoResultado.innerHTML = '';
//   }
// }
// btnSoma.addEventListener('click', soma);
// function subtracao() {
//   if(input1.value !== '' && input2.value !== '') {
//     paragrafoResultado.innerHTML = parseInt(input1.value) - parseInt(input2.value);
//   } else{
//     alert('Falta um número'); 
//     paragrafoResultado.innerHTML = '';
//   }
// }
// btnSubtracao.addEventListener('click', subtracao);

//Parte I - O que é um escutador de eventos?
//Parte II - Exercício do conteúdo - Conheça o addEventListener

//Exercícios Eventos - Agora a prática
// function createDaysOfTheWeek() {
//   const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
//   const weekDaysList = document.querySelector('.week-days');

//   for (let index = 0; index < weekDays.length; index += 1) {
//     const days = weekDays[index];
//     const dayListItem = document.createElement('li');
//     dayListItem.innerHTML = days;

//     weekDaysList.appendChild(dayListItem);
//   };
// };
// createDaysOfTheWeek();
// 1- O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// function createDaysOfTheMonth() {
//   let getDaysList = document.querySelector('#days');

//   for (let index = 0; index < dezDaysList.length; index += 1) {
//     let day = dezDaysList[index];
//     let dayItem = document.createElement('li');

//     if (day === 24 | day === 31) {
//       dayItem.className = 'day holiday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else if (day === 4 | day === 11 | day === 18) {
//       dayItem.className = 'day friday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else if (day === 25) {
//       dayItem.className = 'day holiday friday';
//       dayItem.innerHTML = day;
//       getDaysList.appendChild(dayItem);
//     } else {
//       dayItem.innerHTML = day;
//       dayItem.className = 'day';
//       getDaysList.appendChild(dayItem);
//     }
//   };
// };
// createDaysOfTheMonth();
// 2- Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".Adicione a este botão a ID "btn-holiday" .Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
// function createHolidayButton(buttonName) {
// let buttonContainer = document.querySelector('.buttons-container');
// let newbutton = document.createElement('button');
// newbutton.id = 'btn-holiday';
// newbutton.innerHTML = buttonName;
// buttonContainer.appendChild(newbutton);
// };
// createHolidayButton('Feriados');
// 3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
// function changeBackground () {
//   let dayHoliday = document.querySelectorAll('.holiday')
//   for (let i = 0; i < dayHoliday.length; i +=1) {
//     if (dayHoliday[i].style.backgroundColor === 'blue') {
//       dayHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
//     } else {
//       dayHoliday[i].style.backgroundColor = 'blue';
//     }
//   }
// };
// buttonHoliday = document.querySelector('#btn-holiday');
// buttonHoliday.addEventListener('click', changeBackground);
// 4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".Adicione a este botão o ID "btn-friday".Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
// function createFridayButton(buttonName) {
//   let buttonContainer = document.querySelector('.buttons-container');
//   let newbutton = document.createElement('button');
//   newbutton.id = 'btn-friday';
//   newbutton.innerHTML = buttonName;
//   buttonContainer.appendChild(newbutton);
//   };
//   createFridayButton('Sexta-feira');
// 5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
// function changeText (arrFriday) {
//   let fridays = document.querySelectorAll('.friday')
//   for (let i = 0; i < fridays.length; i +=1) {
//     let arrFriday = [4, 11, 18, 25];
//     if (fridays[i].innerHTML !== 'SEXTOU o/') {
//       fridays[i].innerHTML = 'SEXTOU o/';
//     } else {
//       fridays[i].innerHTML = arrFriday[i];
//     }
//   }
// };
// buttonfridays = document.querySelector('#btn-friday');
// buttonfridays.addEventListener('click', changeText);
// 6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// function zoom (event) {
//   let passamouse = event.target;
//   passamouse.style.fontSize = '30px';
//   passamouse.style.fontWeight = '600px';  
// }
// days.addEventListener('mouseover', zoom);
// function nozoom (event) {
//   let passamouse = event.target;
//   passamouse.style.fontSize = '20px';
//   passamouse.style.fontWeight = '200px';  
// }
// days.addEventListener('mouseout', nozoom);
// 7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
// function addTask (task) {
//  let taskContainer = document.querySelector('.my-tasks');
//  let taskName = document.createElement('span');
//  taskName.innerHTML = task;
//  taskContainer.appendChild(taskName);
// }
// addTask('Projeto:');
// 8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
// function newTaskDiv(color) {
//   let tasksContainer = document.querySelector('.my-tasks');
//   let newTask = document.createElement('div');
//   newTask.className = 'task';
//   newTask.style.backgroundColor = color;
//   tasksContainer.appendChild(newTask);
// };
// newTaskDiv('yellow');
// 9- Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
// function addClass (event) { 
//   let clica = event.target;
//   if (clica.classList.contains('selected') === true) {
//     clica.classList.remove('selected');
//   } else {
//     clica.classList.add('selected');
//   }
// };
// let task1 = document.querySelector('.task');
// task1.addEventListener('click', addClass);
// 10- Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
// function setDayColor(event) {
//   let selectedTask = document.getElementsByClassName('task selected');
//   let taskDiv = document.querySelector('.task');
//   let taskColor = taskDiv.style.backgroundColor;
//   let eventTargetColor = event.target.style.color;
//     if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
//       let color = selectedTask[0].style.backgroundColor;
//       event.target.style.color = color;
//     } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
//       event.target.style.color = 'rgb(119,119,119)';
//     }
//   };
// days.addEventListener('click', setDayColor);

//5.4 WEB STORAGE
//Cookies
//document.cookie ='email = edgardgiorge@hotmail.com'; //cria um cookie em formato de string
//document.cookie = "email=edgardgiorge@hotmail.com; expires=Sun, 17 Dec 2022 12:00:00 UTC path=/"; // evita que o cookie se apague após fechar o navegador colocando uma data á expirar, path indica o caminho, por padrão é a ṕágina atual conforme exemplo supra! 
//document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC"; // atribui novo valor ao cookie1, neste caso apagando o cookie se colocarmos uma data expirada
//let cookie1 = document.cookie; // conteúdo do cookie pra uma variável
//console.log(cookie1);

//Local e Session Storage
//Exemplos de utilização
// console.log(localStorage.length); // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem('firstName', 'Edgard'); //salva uma entrada com a key = "firstname" e value = "Edgard"
//localStorage.setItem('lastName', 'Giorge'); //salva uma entrada com a key = "lastname" e value = "Giorge"
// localStorage.getItem("laststName") // retorna o valor "Giorge"
//localStorage.key(0); // uma outra maneira de retornar o valor da chave, neste caso a primeira posição 
//localStorage.lastName; // outra maneira de retornar value
//localStorage['lastName']; // outra maneira de retornar value
//localStorage.removeItem("lastName") // remove a entrada referente a key = "lastname"
//delete.localStorage.lastName; // outra maneira de apagar a chave
//localStorage.clear() // limpa todas as entradas salvas em localStorage
//let localStorage1 = localStorage;
//console.log(localStorage1); // imprimi no console
////Obs. o Session Storage são os mesmos comandos, são removidos assim que fechamos a aba , local Storage nunca é removido sem atuação (localStorage.removeItem("lastName")).

//Aula ao vivo
// let json = '{"result": true, "count":42}'; // tem que ser em "" dentro
// let obj = JSON.parse(json); // transforma uma string em um objeto
// console.log(obj.result, obj.count); // true 42
// let json1 = JSON.stringify(obj); // transforma um objeto em um string 
// console.log(json1); // {"result":true,"count":42}
