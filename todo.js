const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoLIst = document.querySelector('.todo-list');

const addTodo = () => {
  // 入力値フォームが空欄の場合追加しない
  if (todoInput.value === '') return;

  const newTodo = document.createElement('li');

  // タスク名
  const todoContent = document.createElement('span')
  todoContent.innerText = todoInput.value;
  todoContent.classList.add('todo-content');
  newTodo.appendChild(todoContent);

  // 完了 未着手ボタン
  todoLIst.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.innerText = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);

  // 入力内容をリストに追加
  todoLIst.appendChild(newTodo);

  // 入力フォームの値を削除
  todoInput.value = '';
};

addButton.addEventListener('click', addTodo);