import { useState } from 'react';

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const cardStyle = {
    backgroundColor: '#1e293b',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #334155',
    textAlign: 'center'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 20px 0', color: '#94a3b8' }}>Motivation</h3>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{ 
          padding: '12px 24px', 
          borderRadius: '10px', 
          border: '1px solid #475569',
          backgroundColor: isVisible ? '#334155' : 'transparent',
          color: 'white',
          cursor: 'pointer',
          fontWeight: '500',
          transition: 'all 0.3s'
        }}
      >
        {isVisible ? "Hide Quote" : "Get Inspired"}
      </button>

      {isVisible && (
        <div style={{ marginTop: '25px', padding: '15px', borderRadius: '12px', background: '#0f172a', borderLeft: '4px solid #c084fc' }}>
          <p style={{ fontStyle: 'italic', color: '#cbd5e1', margin: '0', fontSize: '0.95rem' }}>
            "Coding is the closest thing we have to magic."
          </p>
        </div>
      )}
    </div>
  );
}

export default ToggleMessage;
