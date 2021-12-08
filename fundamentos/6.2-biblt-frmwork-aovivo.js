const button = document.querySelector('#btn-dont-click'); // "alert" estilizado

button.addEventListener('click', () => {
  const divModal = document.querySelector('div.modal'); // div.modal é um outro jeito de chamar a classe
  const objModal = new bootstrap.Modal(divModal); // cria um novo objeto chamado Modal passando a .modal 
  objModal.show(); // retorna um objeto, com ele em mãos, mostramos(show()), dai sobe o alert estilizado
});