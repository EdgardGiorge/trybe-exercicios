const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
//Adicionar novas propriedades ao objeto. Sintaxe: objeto.nomeDaPropriedade ou objetovariavelQueContemONomeDaPropriedade] :
customer.lastName = 'Farias'; //maneira 1
customer['estadoCivil'] = 'Divorciado'; //maneira 2
console.log(customer); 
//Adicionar novas propriedades de acordo com o valor de algumas variáveis.

const customer1 = {
  firstName: 'Edgard',  
};

let newKey = 'lastName'; // informo nome da chave através da variável newKey
const lastName = 'Giorge'; // informo o valor da variável
customer1[newKey] = lastName;// indico a chave e o valor 

newKey = 'fullName'; //reaproveito a variável pra dar nome a outra chave
const fullName = `${customer1.firstName} ${customer1.lastName}`;
customer1[newKey] = fullName;
console.log(customer1);
console.table(customer1); // visualiza o objeto em formato de tabela
