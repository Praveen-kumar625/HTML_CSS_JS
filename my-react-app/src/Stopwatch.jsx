import { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0') +
      ':' +
      String(milliseconds).padStart(2, '0')
    );
  };

  const cardStyle = {
    backgroundColor: '#1e293b',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #334155',
    textAlign: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  };

  const timeStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#818cf8',
    fontFamily: 'monospace',
    margin: '10px 0'
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
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.1s ease-in-out'
  });

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 16px 0', color: '#94a3b8' }}>Stopwatch</h3>
      <div style={timeStyle}>{formatTime()}</div>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setIsRunning(!isRunning)} 
          style={btnStyle(isRunning ? '#ef4444' : '#10b981')}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button 
          onClick={() => { setTime(0); setIsRunning(false); }} 
          style={btnStyle('#334155')}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
