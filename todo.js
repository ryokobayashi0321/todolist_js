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
  todoContent.addEventListener('click', editTodo);
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
};

// フォーカスが外れた際（編集完了後）にフィールドを消去する関数
const saveTodoContent = (e) => {
  const itemToSave = e.target;
  const textValue = itemToSave.value;
  if (textValue !== '') {
    itemToSave.parentNode.textContent = textValue;
  }
};

const editTodo = (e) => {
  const itemToEdit = e.target;

  // 編集用のテキストフィールドに置き換え
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('editbox');
  input.setAttribute('value', itemToEdit.textContent);
  itemToEdit.textContent = '';
  itemToEdit.appendChild(input);

  const editContent = itemToEdit.querySelector('.editbox');
  // フォーカスが外れた際（編集完了後）にフィールドを除去するイベントを追加
  editContent.addEventListener('blur', saveTodoContent);
}


addButton.addEventListener('click', addTodo);