import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: Math.min(delay, 0.2) }}
      whileHover={hover && !prefersReducedMotion ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        isDark
          ? 'bg-dark-surface/80 border-dark-border hover:border-dark-accent/40 hover:shadow-lg hover:shadow-dark-accent/10'
          : 'bg-light-surface/80 border-light-border hover:border-light-accent/40 hover:shadow-lg hover:shadow-light-accent/10'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
