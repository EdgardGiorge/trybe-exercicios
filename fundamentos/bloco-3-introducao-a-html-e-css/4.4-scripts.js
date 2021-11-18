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
