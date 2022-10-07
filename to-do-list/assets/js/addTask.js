const inputTitle = document.querySelector('#task-title');
const buttonAdd = document.querySelector('#task-add');
const task = document.querySelector('#task');

buttonAdd.addEventListener('click', function (e) {
  e.preventDefault();
  const title = inputTitle.value;
  
  // Cria um novo Card
  const newCard = document.createElement('div');
  newCard.classList.add("card");
  // Cria um novo Título
  const newTitle = document.createElement('h4');
  newTitle.innerHTML = title;
  newTitle.setAttribute('id', 'card-title');

  //Adiciona os botões
  
  
  //Insere o novo título denreo do novo card.
  newCard.appendChild(newTitle);
  //Insere o novo Card na tela
  task.appendChild(newCard);
  //Reseta o input
  inputTitle.value = "";
});