import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function SectionHeading({ title, subtitle }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4 }}
      className="text-center mb-16"
    >
      <h2 className={`font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className={`h-1 w-20 rounded-full ${isDark ? 'bg-dark-accent' : 'bg-light-accent'}`} />
      </div>
    </motion.div>
  );
}
