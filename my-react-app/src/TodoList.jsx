import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(["Vite Setup", "Components", "Props & State", "Dark Mode Styling"]);
  const [inputValue, setInputValue] = useState("");

  const cardStyle = {
    backgroundColor: '#1e293b',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid #334155',
    color: '#f8fafc'
  };

  const inputStyle = {
    flex: 1,
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
  };

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 25px 0', color: '#818cf8' }}>Learning Goals</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <input 
          style={inputStyle}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's next?"
        />
        <button onClick={addTask} style={{ 
          backgroundColor: '#818cf8', 
          color: 'white', 
          padding: '0 25px', 
          borderRadius: '8px', 
          border: 'none', 
          cursor: 'pointer',
          fontWeight: '700'
        }}>Add</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tasks.map((task, index) => (
          <div key={index} style={{ 
            padding: '16px', 
            borderRadius: '12px', 
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#c084fc' }}></div>
            <span style={{ color: '#cbd5e1' }}>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
