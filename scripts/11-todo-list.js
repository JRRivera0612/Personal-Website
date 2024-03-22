let todoList = JSON.parse(localStorage.getItem('list')) || [{
  name: 'make dinner',
  dueDate: '2024-03-11'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for(i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate} = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      localStorage.setItem('list',JSON.stringify(todoList));
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({name, dueDate});

  localStorage.setItem('list',JSON.stringify(todoList));

  inputElement.value = '';
  
  renderTodoList();
}
