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
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('aesthetic-todos', JSON.stringify(tasks));
  }, [tasks]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    if (editingId) {
      setTasks(tasks.map(task => 
        task.id === editingId ? { ...task, text: inputValue } : task
      ));
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setInputValue('');
    }
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setInputValue(task.text);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setInputValue('');
  };

  const clearAll = () => {
    if (window.confirm('Clear all tasks?')) {
      setTasks([]);
      setEditingId(null);
      setInputValue('');
    }
  };

  return (
    <div className="todo-app-container">
      <div className="todo-header">
        <h1>Todo </h1>
      </div>
      
      <form className="todo-input-group" onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          className="todo-input"
          placeholder={editingId ? "Update task..." : "Add a task..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        <button type="submit" className={`todo-btn-primary ${editingId ? 'updating' : ''}`}>
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button type="button" className="todo-btn-cancel" onClick={cancelEditing}>
            Cancel
          </button>
        )}
      </form>
      
      <ul className="todo-list">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''} ${editingId === task.id ? 'editing' : ''}`}>
              <div className="todo-item-main">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">
                  {task.text}
                </span>
              </div>
              <div className="todo-item-actions">
                <button className="todo-btn-edit" onClick={() => startEditing(task)}>
                  Edit
                </button>
                <button className="todo-btn-delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="todo-empty">No tasks yet. Add one above! 🌿</p>
        )}
      </ul>
      
      <div className="todo-footer">
        <span>{tasks.filter(t => !t.completed).length} tasks remaining</span>
        {tasks.length > 0 && (
          <button className="clear-all-btn" onClick={clearAll}>Clear All</button>
        )}
      </div>
    </div>
  );
};

export default AestheticTodo;
