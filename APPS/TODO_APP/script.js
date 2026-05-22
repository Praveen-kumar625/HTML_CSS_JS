/**
 * Modern Task Orchestrator Logic
 * Refactored from web_4thSem reference
 */

class TodoManager {
    constructor() {
        this.todoInput = document.getElementById('todoInput');
        this.addTodoBtn = document.getElementById('addTodoBtn');
        this.todoList = document.getElementById('todoList');
        this.nameInput = document.getElementById('nameInput');
        this.liveText = document.getElementById('liveText');

        this.todos = JSON.parse(localStorage.getItem('orchestrator_tasks')) || [];
        
        this.init();
    }

    init() {
        this.renderTodos();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 1. Live Reflection Logic
        this.nameInput.addEventListener('input', () => {
            const value = this.nameInput.value.trim();
            this.liveText.textContent = value || "Awaiting input...";
        });

        // 2. Todo Logic
        this.addTodoBtn.addEventListener('click', () => this.addTask());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Visual feedback for focus
        this.todoInput.addEventListener('focus', () => {
            this.todoInput.parentElement.classList.add('focused');
        });
        this.todoInput.addEventListener('blur', () => {
            this.todoInput.parentElement.classList.remove('focused');
        });
    }

    addTask() {
        const text = this.todoInput.value.trim();
        if (!text) return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        this.todos.push(newTodo);
        this.saveAndRender();
        this.todoInput.value = '';
    }

    toggleTask(id) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.saveAndRender();
    }

    deleteTask(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveAndRender();
    }

    saveAndRender() {
        localStorage.setItem('orchestrator_tasks', JSON.stringify(this.todos));
        this.renderTodos();
    }

    renderTodos() {
        this.todoList.innerHTML = '';
        this.todos.forEach(todo => {
            const li = document.createElement('li');
            if (todo.completed) li.classList.add('completed');

            li.innerHTML = `
                <span>${this.escapeHTML(todo.text)}</span>
                <div class="actions">
                    <button class="toggle-btn">${todo.completed ? 'Undo' : 'Done'}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            // Attach events to buttons within the LI
            li.querySelector('.toggle-btn').addEventListener('click', () => this.toggleTask(todo.id));
            li.querySelector('.delete-btn').addEventListener('click', () => this.deleteTask(todo.id));

            this.todoList.appendChild(li);
        });
    }

    /**
     * Utility to prevent XSS
     */
    escapeHTML(str) {
        const p = document.createElement('p');
        p.textContent = str;
        return p.innerHTML;
    }
}

// Instantiate the application
document.addEventListener('DOMContentLoaded', () => {
    new TodoManager();
});
