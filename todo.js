const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

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
  todoList.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  checkButton.innerText = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteTodo);
  deleteButton.innerText = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);

  // 入力内容をリストに追加
  todoList.appendChild(newTodo);

  // 入力フォームの値を削除
  todoInput.value = '';
};

const switchState = (e) => {
  let checkButton = e.target;
  if (!checkButton.classList.contains('complete')) {
    checkButton.innerHTML = '完了';
    checkButton.classList.add('complete');
  } else {
    checkButton.innerHTML = '□未着手';
    checkButton.classList.remove('complete');
  }
};

const deleteTodo = (e) => {
  const todoList = e.target.closest('li');
  todoList.remove();
}

addButton.addEventListener('click', addTodo);