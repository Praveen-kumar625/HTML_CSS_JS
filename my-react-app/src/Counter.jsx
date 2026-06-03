import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const cardStyle = {
    backgroundColor: 'blue',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #334155',
    textAlign: 'center',
    color: 'red'
  };

  const btnStyle = (color) => ({
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: color,
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
    margin: '0 5px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  });

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 16px 0', color: '#94a3b8' }}>Jap Counter</h3>
      <div style={{ fontSize: '3rem', fontWeight: '800', color: '#818cf8' }}>{count}</div>
      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>Jay shree Ram</p>
      <button onClick={() => setCount(count + 1)} style={btnStyle('#6366f1')}>Count</button>
      <button onClick={() => setCount(0)} style={btnStyle('#334155')}>Reset</button>
    </div>
  );
}

export default Counter;
