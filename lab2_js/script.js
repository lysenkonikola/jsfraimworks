const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  // Створюємо новий елемент завдання
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  // Додаємо чекбокс для відмітки виконання завдання
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);

  // Додаємо текст для завдання
  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = 'New TODO';

  // Додаємо кнопку видалення
  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    list.removeChild(todoItem);
    updateCounts();
  });

  // Додаємо всі елементи до списку
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  list.appendChild(todoItem);

  // Оновлюємо кількість завдань
  updateCounts();
}

function updateCounts() {
  const totalItems = list.children.length;
  const uncheckedItems = Array.from(list.children).filter(item => {
    return !item.querySelector(`.${classNames.TODO_CHECKBOX}`).checked;
  }).length;

  itemCountSpan.textContent = totalItems;
  uncheckedCountSpan.textContent = uncheckedItems;
}

function updateUncheckedCount() {
  updateCounts();
}
