// events.js
let tasks = [];

// Function to display all tasks in the list
function renderTasks(tasks) {
    const list = document.querySelector('#todoList');
  list.innerHTML = ''; // clear old list

    tasks.forEach(task => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('strike');

    li.innerHTML = `
    <p>${task.detail}</p>
    <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
    </div>
    `;
    list.appendChild(li);
    });
}

// Function to add a new task
function newTask() {
    const input = document.querySelector('#todo');
    const taskDetail = input.value.trim();

  if (taskDetail === '') return; // ignore empty entries

    const newTask = {
    detail: taskDetail,
    completed: false
    };

    tasks.push(newTask);
  input.value = ''; // clear input
    renderTasks(tasks);
}

// Function to remove a task
function removeTask(taskElement) {
    tasks = tasks.filter(
    task => task.detail !== taskElement.querySelector('p').innerText
    );
    taskElement.remove();
}

// Function to mark a task as completed
function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
    task => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    taskElement.classList.toggle('strike');
}

// Function to handle clicks on the delete/complete icons
function manageTasks(event) {
    const action = event.target.dataset.action;
  if (!action) return; // ignore clicks outside icons

    const taskElement = event.target.closest('li');

    if (action === 'delete') {
    removeTask(taskElement);
    } else if (action === 'complete') {
    completeTask(taskElement);
    }
}

// Add event listeners
document.querySelector('#submitTask').addEventListener('click', newTask);
document.querySelector('#todoList').addEventListener('click', manageTasks);
