const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoLIst = document.querySelector('.todo-list');

const addTodo = () => {
  const newTodo = document.createElement('li');
  todoLIst.appendChild(newTodo);
};

addButton.addEventListener('click', addTodo);