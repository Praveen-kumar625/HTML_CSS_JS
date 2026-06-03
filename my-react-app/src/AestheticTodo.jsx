import { useState, useEffect } from 'react';
import './AestheticTodo.css';

const AestheticTodo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('aesthetic-todos');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: "Welcome to My Todo list ✨", completed: false },
      { id: 2, text: "Aap yaha apne task add kar sakte h 👆", completed: false },
      { id: 3, text: "Task complete ho jaye to us pr click kre ✅", completed: true }
    ];
  });
  
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('aesthetic-todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAll = () => {
    if (window.confirm('Clear all tasks?')) {
      setTasks([]);
    }
  };

  return (
    <div className="todo-app-container">
      <div className="todo-header">
        <h1>Todo </h1>
      </div>
      
      <form className="todo-input-group" onSubmit={addTask}>
        <input 
          type="text" 
          className="todo-input"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="todo-add-btn">+</button>
      </form>
      
      <ul className="todo-list">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
              <span className="todo-text" onClick={() => toggleTask(task.id)}>
                {task.text}
              </span>
              <button className="todo-delete-btn" onClick={() => deleteTask(task.id)}>
                ×
              </button>
            </li>
          ))
        ) : (
          <p className="todo-empty-state">hi kya aap khush h 🌿</p>
        )}
      </ul>
      
      <div className="todo-footer">
        <span>{tasks.filter(t => !t.completed).length} tasks left</span>
        {tasks.length > 0 && (
          <button className="clear-all-btn" onClick={clearAll}>Clear All</button>
        )}
      </div>
    </div>
  );
};

export default AestheticTodo;
