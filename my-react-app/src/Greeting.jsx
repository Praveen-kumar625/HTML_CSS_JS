function Greeting({ name }) {
  const cardStyle = {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    padding: '30px',
    borderRadius: '16px',
    color: 'white',
    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
    textAlign: 'left'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ margin: '0', fontSize: '1.8rem' }}>Welcome back bhai {name} ✨</h2>
      <p style={{ margin: '10px 0 0 0', opacity: '0.9' }}>
      react ke sath journey started..........
      </p>
    </div>
  );
}

export default Greeting;
