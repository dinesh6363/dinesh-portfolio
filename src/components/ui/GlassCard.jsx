import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : {}}
      className={`rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 ${
        isDark
          ? 'bg-dark-surface/80 border-dark-border hover:border-dark-accent/40 hover:shadow-lg hover:shadow-dark-accent/10'
          : 'bg-light-surface/80 border-light-border hover:border-light-accent/40 hover:shadow-lg hover:shadow-light-accent/10'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
