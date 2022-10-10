const inputTitle = document.querySelector('#task-title');
const buttonAdd = document.querySelector('#task-add');
const task = document.querySelector('#task');
const deleteButton = document.querySelector('btn-delete');
const doneButton = document.querySelector('btn-concluded');

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
  const taskAction = document.createElement('div');
  taskAction.classList.add('task-actions');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add("btn-delete");
  deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewbox="2 0 40 40"><path fill="white" d="m12.45 38.35-2.8-2.8L21.2 24 9.65 12.45l2.8-2.8L24 21.2 35.55 9.65l2.8 2.8L26.8 24l11.55 11.55-2.8 2.8L24 26.8Z"/></svg>';
  const doneButton = document.createElement('button');
  doneButton.classList.add("btn-concluded");
  doneButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewbox="2 0 40 40"><path fill="white" d="M18.9 36.4 7 24.5l2.9-2.85 9 9L38.05 11.5l2.9 2.85Z"/></svg>';


  //Insere o novo título dentro do novo card
  newCard.appendChild(newTitle);
  //Insere o botão de delete dentro da div
  taskAction.appendChild(deleteButton);
  //Insere o botão de delete dentro da div
  taskAction.appendChild(doneButton);
  //Insere a div dos botões dentro do card
  newCard.appendChild(taskAction);
  //Insere o novo Card na tela
  task.appendChild(newCard);
  //Reseta o input
  inputTitle.value = "";

  //Função de deletar
  deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    newCard.remove();
  });

  //Função de concluir
  doneButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (!newCard.classList.contains("done")) {
      newCard.classList.add("done");
    } else {
      newCard.classList.remove("done");
    }
  });
});