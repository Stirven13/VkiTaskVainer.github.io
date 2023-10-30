// Интерфейс для задачи
export interface Todo {
    text: string;
    date: string;
}

// Функция для добавления нового элемента в список дел и сохранения в localStorage
export function addTodo(): void {
    const newTodoInput: HTMLInputElement = document.getElementById('newTodoInput') as HTMLInputElement;
    const todoList: HTMLUListElement = document.querySelector('.todo_list ol') as HTMLUListElement;

    const todoText: string = newTodoInput.value.trim();
    if (todoText === '') {
        alert('Введите текст задачи!');
        return;
    }

    // Создаем новый элемент списка
    const todoItem: Todo = {
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

// Функция для удаления элемента из списка дел и обновления localStorage
export function removeTodo(event: Event): void {
    const target = event.target as HTMLElement;
    const todoItem: HTMLElement | null = target.parentElement?.parentElement as HTMLElement;
    if (!todoItem) {
        return;
    }

    const todoList: HTMLUListElement = document.querySelector('.todo_list ol') as HTMLUListElement;
    todoList.removeChild(todoItem);

    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}


// Функция для создания HTML элемента задачи
export function createTodoElement(todo: Todo): HTMLLIElement {
    const todoItem: HTMLLIElement = document.createElement('li');
    todoItem.innerHTML = `
        <label>
            <input type="checkbox"/>
            <span>${todo.text}</span>
            <time>${todo.date}</time>
            <button onclick="removeTodo()"></button>
            <div></div>
        </label>
    `;
    return todoItem;
}

// Функция для сохранения списка дел в localStorage
export function saveTodosToLocalStorage(): void {
    const todoList: HTMLUListElement = document.querySelector('.todo_list ol') as HTMLUListElement;
    const todos: string = todoList.innerHTML;
    localStorage.setItem('todos', todos);
}

// Функция для загрузки списка дел из localStorage при загрузке страницы
export function loadTodosFromLocalStorage(): void {
    const todoList: HTMLUListElement = document.querySelector('.todo_list ol') as HTMLUListElement;
    const todos: string | null = localStorage.getItem('todos');
    if (todos) {
        todoList.innerHTML = todos;
    }
}

// Вызываем функцию загрузки списка дел из localStorage при загрузке страницы
window.onload = loadTodosFromLocalStorage;

// Функция для очистки списка дел
export function clearTodos(): void {
    const todoList: HTMLUListElement = document.querySelector('.todo_list ol') as HTMLUListElement;
    todoList.innerHTML = '';

    // Обновляем список дел в localStorage после удаления элемента
    saveTodosToLocalStorage();
}

// Функция для получения текущей даты в формате "от ДД.ММ.ГГГГ"
export function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const day: string = String(currentDate.getDate()).padStart(2, '0');
    const month: string = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year: number = currentDate.getFullYear();
    return `от ${day}.${month}.${year}`;
}
