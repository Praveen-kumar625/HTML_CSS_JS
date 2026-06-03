import { motion } from 'framer-motion';

function About() {
  const cards = [
    { title: "Our Mission 🎯", text: "react ke sath game khelna", color: "#818cf8" },
    { title: "Tech Stack 💻", text: " React , Three.js, and Framer Motion", color: "#c084fc" },
    { title: "The Brains 🧠", text: "Praveen Jaiswal, a developer who clearly spent way too much time playing with react  today.", color: "#fb7185" }
  ];

  return (
    <div style={{ padding: '40px 0' }}>
      <motion.h1 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}
      >
        Behind the Magic 🎩✨
      </motion.h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ rotateY: 180, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ 
              width: '300px', 
              height: '250px', 
              perspective: '1000px',
              cursor: 'pointer'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: card.color, 
              borderRadius: '24px', 
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: `0 15px 30px ${card.color}33`
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'white' }}>{card.title}</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6' }}>{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        animate={{ x: [-20, 20, -20] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ textAlign: 'center', marginTop: '80px', fontSize: '1.2rem', color: '#475569' }}
      >
        Dekhte raho haste raho khate raho peete raho 🥚 (Just kidding, or am I?)
      </motion.div>
    </div>
  );
}

export default About;
