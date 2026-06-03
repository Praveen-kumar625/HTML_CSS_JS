import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Task from './pages/Task';
import NotFound from './pages/NotFound';
import Scene from './components/Scene';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/task" element={
          <motion.div initial={{ opacity: 0, x: 100, rotate: 10 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: -100, rotate: -10 }} transition={{ type: "spring", damping: 12 }}>
            <Task />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0, scale: 0.5, rotateY: 180 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 0.5, rotateY: -180 }} transition={{ duration: 0.6 }}>
            <About />
          </motion.div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const appStyle = {
    backgroundColor: '#020617',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    color: '#f1f5f9',
    overflowX: 'hidden'
  };

  const navWrapperStyle = {
    position: 'sticky',
    top: '20px',
    zIndex: '100',
    margin: '0 auto',
    width: 'fit-content',
    padding: '10px 30px',
    borderRadius: '99px',
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(30, 41, 59, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#94a3b8',
    textDecoration: 'none',
    fontWeight: '700',
    padding: '10px 20px',
    borderRadius: '50px',
    transition: 'all 0.3s'
  });

  return (
    <Router>
      <div style={appStyle}>
        <Scene />
        
        <header style={{ padding: '40px 0 20px' }}>
          <motion.h1 
            initial={{ y: -30 }} 
            animate={{ y: 0 }} 
            whileHover={{ scale: 1.5, rotate: [0, -5, 5, 0] }}
            style={{ 
              textAlign: 'center', 
              fontSize: '2rem', 
              fontWeight: '800', 
              background: 'linear-gradient(135deg, #818cf8, #c084fc)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'constant',
              cursor: 'pointer'
            }}>
            Praveen ke karnaame
          </motion.h1>
        </header>

        <nav style={navWrapperStyle}>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Home', 'Task', 'About'].map((item) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                style={linkStyle}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  {item}
                </motion.div>
              </NavLink>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <AnimatedRoutes />
        </main>

        <footer style={{ textAlign: 'center', padding: '100px 0 40px', color: '#475569', fontSize: '1rem' }}>
          Made with full of ab apni tarif kaise karu and a lot of ☕
        </footer>
      </div>
    </Router>
  );
}

export default App;
