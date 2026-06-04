/**
 * @file script.js
 * @description Core logic for the Task Management System.
 * @author Praveen Kumar
 */

// =========================================
// DOM Configuration
// =========================================
const SELECTORS = {
  nameInput: 'nameInput',
  liveText: 'liveText',
  todoInput: 'todoInput',
  todoList: 'todoList',
  addBtn: 'addBtn',
};

const UI = {
  nameInput: document.getElementById(SELECTORS.nameInput),
  liveText: document.getElementById(SELECTORS.liveText),
  todoInput: document.getElementById(SELECTORS.todoInput),
  todoList: document.getElementById(SELECTORS.todoList),
  addBtn: document.getElementById(SELECTORS.addBtn),
};

// =========================================
// 1. Live Input Interaction
// =========================================

/**
 * Updates the preview text as the user types.
 */
UI.nameInput.addEventListener('input', (e) => {
  UI.liveText.innerText = e.target.value || 'Typing will appear here...';
});

// =========================================
// 2. Task Management Logic
// =========================================

/**
 * Creates and appends a new task to the DOM.
 */
const handleAddTask = () => {
  const taskContent = UI.todoInput.value.trim();

  if (!taskContent) {
    console.warn('Empty task input detected.');
    return;
  }

  // Create list item container
  const taskItem = document.createElement('li');
  taskItem.innerText = taskContent;

  // Create deletion control
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('deleteBtn');

  // Handle task removal
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  // Assemble and render
  taskItem.appendChild(deleteBtn);
  UI.todoList.appendChild(taskItem);

  // Reset input state
  UI.todoInput.value = '';
};

// =========================================
// 3. Event Orchestration
// =========================================

// Handle primary click interaction
UI.addBtn.addEventListener('click', handleAddTask);

// Handle accessibility for keyboard users (Enter key)
UI.todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleAddTask();
  }
});

// Visual state management: Focus
UI.todoInput.addEventListener('focus', () => {
  UI.todoInput.style.backgroundColor = 'var(--input-focus, #f0f4ff)';
});

// Visual state management: Blur
UI.todoInput.addEventListener('blur', () => {
  UI.todoInput.style.backgroundColor = '#ffffff';
});
