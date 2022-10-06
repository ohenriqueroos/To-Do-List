let buttonAdd = document.querySelector("#task-add");

buttonAdd.addEventListener("click", function (event) {
  event.preventDefault();

  getFormTask();
  createTask();
});

function getFormTask () {
  let title = document.querySelector("#task-title").value;
  let description = document.querySelector("#task-description").value;
  let time = document.querySelector("#task-time").value;
  
  let cardTitle = document.querySelector("#card-title");
  cardTitle.textContent = title;

  let cardDescription = document.querySelector("#card-description");
  cardDescription.textContent = description;

  let cardTime = document.querySelector("#card-time");
  cardTime.textContent = time;
};

function createTask () {
  let task = document.querySelector('#task');

  function addTask () {
    let newTask = document.createElement("div");
    newTask.classList.add("card");
    let newTaskTitle = document.createElement("h4");
    newTaskTitle.setAttribute('id', 'card-title');
    let newTaskDescription = document.createElement("p");
    newTaskDescription.setAttribute('id', 'card-description');
    let newTime = document.createElement("div");
    newTime.classList.add("task-end");

    newTask.appendChild(newTaskTitle);
    newTask.appendChild(newTaskDescription);
    newTask.appendChild(newTime);

    let time = document.createElement("div");
    time.classList.add("time");

    let timeTitle = document.createElement("h5");
    timeTitle.innerHTML = "Hora de entrega:"
    time.appendChild(timeTitle);

    let timeDelivery = document.createElement("p");
    timeDelivery.setAttribute('id', 'card-time');
    time.appendChild(timeDelivery);

    newTime.appendChild(time);
  };
  console.log(task);
  console.log(addTask());
};