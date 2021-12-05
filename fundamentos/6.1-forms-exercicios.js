//6.1 FORMS

//Exercicios
//1- Temos o seguinte raciocínio: captamos nosso select do HTML e criamos um array com todas as siglas dos estados. Depois acionamos um for que vai passar por todas elas e enquanto isso, vai criando uma option por vez e adicionando informações nela como innerText e value . Por fim, insere cada uma delas no nosso select que falamos anteriormente.
// 1- Crie um <fieldset> para os seguintes dados pessoais:
// Nome - Texto Limite de 40 caracteres Campo obrigatório
// Email - Texto Limite de 50 caracteres Campo obrigatório
// CPF - Texto Limite de 11 caracteres Campo obrigatório
// Endereço - Texto Limite de 200 caracteres Campo obrigatório 
// Cidade - Texto Limite de 28 caracteres Campo obrigatório
// Estado - Select Todos os estados do Brasil Utilize estruturas de repetição via JavaScript para gerar os <option> Campo obrigatório
// Tipo - Radio Button Casa, Apartamento Campo obrigatório
// 2- Crie outro <fieldset> para dados do seu último emprego
// Resumo do currículo - TextArea Limite de 1000 caracteres Campo obrigatório
// Cargo - Texto Limite de 40 caracteres Campo obrigatório
// Descrição do cargo - Texto Limite de 500 caracteres Campo obrigatório
// - Data de início - Texto Verificar o formato da data dd/mm/aaaa. O dia deve ser > 0 e <= 31. O mês deve ser > 0 e <= 12. O ano não pode ser negativo. Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada. Campo obrigatório
// 3- Logo abaixo do formulário, crie um botão que: Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit. Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário. Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário. Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.
// 4- Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

// script.js
// script.js
function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    states.appendChild(option);
  }
}

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function defaultValidation(input, name){
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
    return false;
  }
  
  return true;
}

function dateValidation(input, name){
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if(!regex.test(input.value)){
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

function getSelectedOption(select){
  return select.options[select.selectedIndex];
}

function selectValidation(select, name){
  let option = getSelectedOption(select);
  let validation = inputs[name];

  if(validation.required && (!option || option.disabled)){
    return false;
  }

  return true;
}

function radioValidation(radio, name){
  let checked = document.querySelector(`[name=${name}]:checked`)
  
  if(checked === null){
    return false;
  }

  return true;
}

let validationStrategies = {
  default: defaultValidation,
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

function validateInput(inputName){
  let inputType = inputs[inputName].type;
  let input = document.querySelector(`[name=${inputName}]`)

  if(inputType){
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }

  return validationStrategies.default(input, inputName);
}
  
function renderErrorMessages(messages){
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

function defaultRendering(input){
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

function radioRendering(input){
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

function selectRendering(input){
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

let renderStrategies = {
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

function renderData(){
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

function validateData(){
  let validationsList = {};

  for(let inputName in inputs){
    let isValid = validateInput(inputName);
    validationsList[inputName] = isValid;
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);
    }
  }

  return {
    errorQtd: counter,
    messages,
  }
}

function clearDivs(){
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();
  
  if(validation.errorQtd === 0){
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
  }
}

function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

window.onload = function () {
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}