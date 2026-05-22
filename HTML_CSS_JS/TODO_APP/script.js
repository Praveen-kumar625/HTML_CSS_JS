/* script.js */
/* Author: Praveen kumar */

// =========================================
// DOM Elements Selection
// =========================================
const UI = {
    nameInput: document.getElementById("nameInput"),
    liveText: document.getElementById("liveText"),
    todoInput: document.getElementById("todoInput"),
    todoList: document.getElementById("todoList"),
    addBtn: document.getElementById("addBtn")
};

// =========================================
// 1. INPUT EVENT LOGIC
// =========================================

/**
 * Jaise hi user type karega, live text update hoga
 */
UI.nameInput.addEventListener("input", (e) => {
    UI.liveText.innerText = e.target.value || "Typing will appear here...";
});

// =========================================
// 2. TODO LIST LOGIC
// =========================================

/**
 * Naya task list mein add karne ka function
 */
const addTodo = () => {
    const task = UI.todoInput.value.trim();

    // Khali input ko rokna
    if (!task) {
        alert("Please enter a valid task");
        return;
    }

    // List item (li) create karna
    const li = document.createElement("li");
    li.innerText = task;

    // Delete button create karna
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");

    // Delete event attach karna
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Elements ko append karna
    li.appendChild(deleteBtn);
    UI.todoList.appendChild(li);

    // Input box clear karna
    UI.todoInput.value = "";
};

// =========================================
// 3. EVENT LISTENERS FOR TODO
// =========================================

// Click par task add karna
UI.addBtn.addEventListener("click", addTodo);

// Enter dabane par task add karna (Keyboard Event)
UI.todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo();
    }
});

// Focus event - Input par click karte waqt background change karna
UI.todoInput.addEventListener("focus", () => {
    UI.todoInput.style.backgroundColor = "var(--input-focus)";
});

// Blur event - Input se bahar click karne par background reset karna
UI.todoInput.addEventListener("blur", () => {
    UI.todoInput.style.backgroundColor = "white";
});