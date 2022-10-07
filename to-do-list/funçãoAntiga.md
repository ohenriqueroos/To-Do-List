let buttonAdd = document.querySelector("#task-add");

buttonAdd.addEventListener("click", function (event) {
  event.preventDefault();

  createTask();
});


function createTask () {

  //div principal
  let task = document.querySelector('#task');
  console.log(task);

  let newTask = document.createElement("div");
  newTask.classList.add("card");

  // criando título
  let newTaskTitle = document.createElement("h4");
  newTaskTitle.setAttribute('id', 'card-title');
  let titleForm = document.querySelector("#task-title").value;
  newTaskTitle.innerHTML = titleForm;
  
  // criando 
  let newTaskDescription = document.createElement("p");
  newTaskDescription.setAttribute('id', 'card-description');
  let descriptionForm = document.querySelector("#task-description").value;
  newTaskDescription.innerHTML = descriptionForm;

  let newTime = document.createElement("div");
  newTime.classList.add("task-end");
  
  let time = document.createElement("div");
  time.classList.add("time");

  let timeTitle = document.createElement("h5");
  timeTitle.innerHTML = "Hora de entrega:";
  time.appendChild(timeTitle);
  
  let timeDelivery = document.createElement("p");
  timeDelivery.setAttribute('id', 'card-time');
  time.appendChild(timeDelivery);
  let timeForm = document.querySelector("#task-time").value;
  timeDelivery.innerHTML = timeForm;

  newTask.appendChild(newTaskTitle);
  newTask.appendChild(newTaskDescription);
  newTask.appendChild(newTime);
  newTime.appendChild(time);

  console.log('aquele teste maroto');

  task.appendChild(newTask);

};
