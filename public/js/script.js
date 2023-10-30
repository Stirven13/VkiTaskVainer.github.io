"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = exports.clearTodos = exports.loadTodosFromLocalStorage = exports.saveTodosToLocalStorage = exports.createTodoElement = exports.removeTodo = exports.addTodo = void 0;
// Функция для добавления нового элемента в список дел и сохранения в localStorage
function addTodo() {
    var newTodoInput = document.getElementById('newTodoInput');
    var todoList = document.querySelector('.todo_list ol');
    var todoText = newTodoInput.value.trim();
    if (todoText === '') {
        alert('Введите текст задачи!');
        return;
    }
    // Создаем новый элемент списка
    var todoItem = {
        text: todoText,
        date: getCurrentDate(),
    };
    // Добавляем новый элемент в список
    todoList.appendChild(createTodoElement(todoItem));
    // Сохраняем обновленный список дел в localStorage
    saveTodosToLocalStorage();
    // Очищаем поле ввода
    newTodoInput.value = '';
}
exports.addTodo = addTodo;
// Функция для удаления элемента из списка дел и обновления localStorage
function removeTodo(event) {
    var _a;
    var target = event.target;
    var todoItem = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    if (!todoItem) {
        return;
    }
    var todoList = document.querySelector('.todo_list ol');
    todoList.removeChild(todoItem);
    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}
exports.removeTodo = removeTodo;
// Функция для создания HTML элемента задачи
function createTodoElement(todo) {
    var todoItem = document.createElement('li');
    todoItem.innerHTML = "\n        <label>\n            <input type=\"checkbox\"/>\n            <span>".concat(todo.text, "</span>\n            <time>").concat(todo.date, "</time>\n            <button onclick=\"removeTodo()\"></button>\n            <div></div>\n        </label>\n    ");
    return todoItem;
}
exports.createTodoElement = createTodoElement;
// Функция для сохранения списка дел в localStorage
function saveTodosToLocalStorage() {
    var todoList = document.querySelector('.todo_list ol');
    var todos = todoList.innerHTML;
    localStorage.setItem('todos', todos);
}
exports.saveTodosToLocalStorage = saveTodosToLocalStorage;
// Функция для загрузки списка дел из localStorage при загрузке страницы
function loadTodosFromLocalStorage() {
    var todoList = document.querySelector('.todo_list ol');
    var todos = localStorage.getItem('todos');
    if (todos) {
        todoList.innerHTML = todos;
    }
}
exports.loadTodosFromLocalStorage = loadTodosFromLocalStorage;
// Вызываем функцию загрузки списка дел из localStorage при загрузке страницы
window.onload = loadTodosFromLocalStorage;
// Функция для очистки списка дел
function clearTodos() {
    var todoList = document.querySelector('.todo_list ol');
    todoList.innerHTML = '';
    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}
exports.clearTodos = clearTodos;
// Функция для получения текущей даты в формате "от ДД.ММ.ГГГГ"
function getCurrentDate() {
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    return "\u043E\u0442 ".concat(day, ".").concat(month, ".").concat(year);
}
exports.getCurrentDate = getCurrentDate;
