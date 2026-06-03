import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <motion.div 
        animate={{ 
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        style={{ fontSize: '5rem', marginBottom: '20px' }}
      >
        🤭🤭🤭
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '20px' }}
      >
        Welcome to the Praveen world <br /> 
        <span style={{ color: '#818cf8' }}></span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '500px', marginBottom: '40px' }}
      >
        bhai bore ho rahe ho kya , koi baat nahi mere karnamo pe najar dalna jara 😁😁😁
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/task" style={{
          padding: '15px 40px',
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '15px',
          fontWeight: '800',
          fontSize: '1.2rem',
          boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'
        }}>
          chalo shuru karte h 🏃💨
        </Link>
      </motion.div>

      <div style={{ marginTop: '60px', display: 'flex', gap: '30px' }}>
        {['💪', '🤪', '😝'].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            style={{ fontSize: '2rem' }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
