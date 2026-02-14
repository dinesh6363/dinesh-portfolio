import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Layers, ShoppingCart, FileText, Rocket, Server, Plane, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'Enterprise Business Website',
    desc: 'A comprehensive, scalable company website built with Laravel and a modern UI framework. Features dynamic content management, responsive design, optimized SEO, and seamless performance across all devices. Designed to handle high traffic and provide a premium brand experience.',
    tech: ['Laravel', 'JavaScript', 'Tailwind CSS', 'SQL', 'REST API'],
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Advanced Admin Dashboard',
    desc: 'A feature-rich, role-based admin dashboard with real-time analytics, interactive charts, data tables, and comprehensive user management. Built with performance optimization at its core, supporting complex data visualization and multi-level access control.',
    tech: ['React', 'Node.js', 'SQL', 'Chart.js', 'Tailwind CSS'],
    icon: Layers,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'E-commerce Platform',
    desc: 'A full-stack e-commerce solution with product catalog, shopping cart, wishlist, order management, and payment-ready checkout flow. Includes inventory management, user authentication, and a responsive storefront optimized for conversions.',
    tech: ['Laravel', 'React', 'SQL', 'REST API', 'Bootstrap'],
    icon: ShoppingCart,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Custom CMS System',
    desc: 'A dynamic content management system with modular architecture, supporting multiple content types, media management, user roles, and a drag-and-drop page builder. Built for flexibility and ease of use by non-technical users.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'SQL', 'jQuery'],
    icon: FileText,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'High-Performance Portfolio',
    desc: 'A blazing-fast React portfolio system with server-side rendering capabilities, SEO optimization, and Core Web Vitals excellence. Features smooth animations, dark/light themes, and a modern design that scores 95+ on Lighthouse.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    icon: Rocket,
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'API-Driven Web Application',
    desc: 'A sophisticated web application powered by RESTful APIs with dynamic data rendering, real-time updates, caching strategies, and comprehensive error handling. Demonstrates clean architecture and scalable API integration patterns.',
    tech: ['Node.js', 'React', 'REST API', 'SQL', 'Postman'],
    icon: Server,
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    title: 'Tour & Travel Software',
    desc: 'A comprehensive travel booking platform built on WordPress with API integrations to multiple OTAs (Online Travel Agencies). Features hotel and flight search, booking management, payment processing, and a custom admin panel for travel agents.',
    tech: ['WordPress', 'PHP', 'REST API', 'OTA Integration', 'JavaScript'],
    icon: Plane,
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Business Communication Software',
    desc: 'An automated business messaging platform enabling companies to send messages via WhatsApp Business API (WABA) and Telegram Bot. Supports bulk messaging, template management, chatbot flows, and real-time delivery tracking.',
    tech: ['Laravel', 'WhatsApp WABA', 'Telegram Bot', 'REST API', 'SQL'],
    icon: MessageCircle,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of the applications and systems I've built throughout my career."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-dark-surface/80 border-dark-border hover:border-dark-accent/40 hover:shadow-xl hover:shadow-dark-accent/10'
                  : 'bg-light-surface/80 border-light-border hover:border-light-accent/40 hover:shadow-xl hover:shadow-light-accent/10'
              }`}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark
                          ? 'hover:bg-dark-surface-2 text-dark-text-muted hover:text-white'
                          : 'hover:bg-light-surface-2 text-light-text-muted hover:text-gray-900'
                      }`}
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="#"
                      className={`p-2 rounded-lg transition-colors ${
                        isDark
                          ? 'hover:bg-dark-surface-2 text-dark-text-muted hover:text-white'
                          : 'hover:bg-light-surface-2 text-light-text-muted hover:text-gray-900'
                      }`}
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className={`font-poppins font-bold text-lg mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${project.gradient} transition-all duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isDark
                          ? 'bg-dark-surface-2 text-dark-text-muted'
                          : 'bg-light-surface-2 text-light-text-muted'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
