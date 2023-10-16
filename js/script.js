// Функция для добавления нового элемента в список дел и сохранения в localStorage
function addTodo() {
    const newTodoInput = document.getElementById('newTodoInput');
    const todoList = document.querySelector('.todo_list ol');

    const todoText = newTodoInput.value.trim();
    if (todoText === '') {
        alert('Введите текст задачи!');
        return;
    }

    // Создаем новый элемент списка
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
        <label>
            <input type="checkbox"/>
            <span>${todoText}</span>
            <time>${getCurrentDate()}</time>
            <button onclick="removeTodo()"></button>
            <div></div>
        </label>
    `;

    // Добавляем новый элемент в список
    todoList.appendChild(todoItem);

    // Сохраняем обновленный список дел в localStorage
    saveTodosToLocalStorage();

    // Очищаем поле ввода
    newTodoInput.value = '';
}

// Функция для удаления элемента из списка дел и обновления localStorage
function removeTodo() {
    const todoItem = event.target.parentElement.parentElement;
    const todoList = document.querySelector('.todo_list ol');
    todoList.removeChild(todoItem);

    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}

// Функция для сохранения списка дел в localStorage
function saveTodosToLocalStorage() {
    const todoList = document.querySelector('.todo_list ol');
    const todos = todoList.innerHTML;
    localStorage.setItem('todos', todos);
}

// Функция для загрузки списка дел из localStorage при загрузке страницы
function loadTodosFromLocalStorage() {
    const todoList = document.querySelector('.todo_list ol');
    const todos = localStorage.getItem('todos');
    if (todos) {
        todoList.innerHTML = todos;
    }
}

// Вызываем функцию загрузки списка дел из localStorage при загрузке страницы
window.onload = loadTodosFromLocalStorage;


// Функция для очистки списка дел
function clearTodos() {
    const todoList = document.querySelector('.todo_list ol');
    todoList.innerHTML = '';

    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}

// Функция для получения текущей даты в формате "от ДД.ММ.ГГГГ"
function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `от ${day}.${month}.${year}`;
}
