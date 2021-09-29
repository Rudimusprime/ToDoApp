const toDoList = [];
const form = document.querySelector('form');
const list = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span')
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (!taskName) return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${taskName} <button>Usuń</button>`;
    toDoList.push(task);
    renderList();
    list.appendChild(task);
    input.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;
    renderList();
}

const renderList = () => {
    list.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        list.appendChild(toDoElement);
    })
}

form.addEventListener('submit', addTask);
