import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ fontSize: '8rem', marginBottom: '20px' }}
      >
        👻
      </motion.div>
      <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '20px' }}>Whoops tumne kho diya 😋</h1>
      <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '40px' }}></p>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/" style={{ 
          color: '#fff', 
          background: '#818cf8', 
          padding: '15px 30px', 
          borderRadius: '12px', 
          textDecoration: 'none', 
          fontWeight: '700' 
        }}>
          yaha kuch khas nahi chalo vapas chale🏠
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
