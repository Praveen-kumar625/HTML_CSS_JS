import { motion } from 'framer-motion';
import Greeting from '../Greeting';
import Counter from '../Counter';
import AestheticTodo from '../AestheticTodo';
import ToggleMessage from '../ToggleMessage';
import Stopwatch from '../Stopwatch';
import RerenderConcept from '../RerenderConcept';
import UserForm from '../UserForm';

function Task() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    padding: '20px'
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <motion.div 
        initial={{ rotate: -2 }}
        animate={{ rotate: 2 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#818cf8' }}>Work Hard, Play wit Praveen 🕹️</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem' }}> yaha h mere karnamo ki list </p>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        style={containerStyle}
      >
        <motion.div variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
          <Greeting name="Praveen" />
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          whileHover={{ scale: 1.02 }}
          style={{ gridColumn: '1 / -1', background: 'rgba(30, 41, 59, 0.5)', borderRadius: '25px', padding: '30px', border: '1px solid rgba(129, 140, 248, 0.2)', backdropFilter: 'blur(10px)' }}
        >
          <RerenderConcept />
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring" }}>
          <UserForm />
        </motion.div>
        
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring" }}>
          <Counter />
        </motion.div>
        
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring" }}>
          <Stopwatch />
        </motion.div>
        
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} transition={{ type: "spring" }}>
          <ToggleMessage />
        </motion.div>
        
        <motion.div variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
          <AestheticTodo />
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ textAlign: 'center', marginTop: '100px', fontSize: '3rem' }}
      >
        🎈
      </motion.div>
    </div>
  );
}

export default Task;
