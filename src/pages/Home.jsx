import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Code2, Layers, Briefcase, Rocket,
  Server, Globe, Palette, Database, GitBranch, Terminal
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillHighlights = [
  { icon: Code2, label: 'React' },
  { icon: Layers, label: 'Laravel' },
  { icon: Server, label: 'Node.js' },
  { icon: Globe, label: 'JavaScript' },
  { icon: Palette, label: 'Tailwind' },
  { icon: Database, label: 'SQL' },
  { icon: Terminal, label: 'PHP' },
  { icon: GitBranch, label: 'Git' },
];

const featuredProjects = [
  {
    title: 'Enterprise Business Website',
    desc: 'Scalable company website with Laravel & modern UI.',
    tech: ['Laravel', 'JavaScript', 'Tailwind'],
  },
  {
    title: 'Advanced Admin Dashboard',
    desc: 'Role-based dashboard with analytics and performance optimization.',
    tech: ['React', 'Node.js', 'SQL'],
  },
  {
    title: 'E-commerce Platform',
    desc: 'Full-stack shopping system with cart and payment-ready structure.',
    tech: ['Laravel', 'React', 'SQL'],
  },
];

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'opacity-30' : 'opacity-20'}`}>
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-dark-accent/20' : 'bg-light-accent/20'}`} />
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-purple-500/15' : 'bg-purple-500/10'}`} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${
                isDark
                  ? 'bg-dark-accent/10 text-dark-accent border border-dark-accent/20'
                  : 'bg-light-accent/10 text-light-accent border border-light-accent/20'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-dark-accent' : 'bg-light-accent'}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-dark-accent' : 'bg-light-accent'}`} />
              </span>
              Available for freelance work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className={`font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dinesh Jangu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`font-poppins text-xl sm:text-2xl font-medium mb-4 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}
            >
              Senior Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`text-lg max-w-2xl mx-auto mb-10 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}
            >
              I build scalable, high-performance, and modern web applications
              that deliver exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className={`group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${
                  isDark
                    ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25 hover:shadow-dark-accent/40'
                    : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25 hover:shadow-light-accent/40'
                }`}
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all border ${
                  isDark
                    ? 'border-dark-border text-white hover:bg-dark-surface hover:border-dark-accent/40'
                    : 'border-light-border text-gray-900 hover:bg-light-surface hover:border-light-accent/40'
                }`}
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDark ? 'border-dark-text-muted' : 'border-light-text-muted'}`}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-dark-accent' : 'bg-light-accent'}`}
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface-2/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`font-poppins text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`}>
                About Me
              </h3>
              <h2 className={`font-poppins text-3xl sm:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Passionate Developer with a Mission
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                With years of hands-on experience in full-stack development, I specialize in building
                robust, scalable applications that solve real-world problems. From enterprise-level
                platforms to high-performance web apps, I bring ideas to life with clean code and
                modern architecture.
              </p>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-dark-accent hover:text-dark-accent-hover' : 'text-light-accent hover:text-light-accent-hover'}`}
              >
                Learn more about me
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: '3+', label: 'Years Experience' },
                { num: '50+', label: 'Projects Delivered' },
                { num: '20+', label: 'Happy Clients' },
                { num: '15+', label: 'Technologies' },
              ].map((stat, i) => (
                <GlassCard key={stat.label} delay={i * 0.1} className="text-center">
                  <div className={`font-poppins text-3xl font-bold mb-1 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`}>
                    {stat.num}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Technologies I work with to build modern, scalable web applications."
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {skillHighlights.map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={item}>
                <GlassCard className="flex flex-col items-center gap-3 py-8">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                    <Icon size={28} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                  </div>
                  <span className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{label}</span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link
              to="/skills"
              className={`inline-flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-dark-accent hover:text-dark-accent-hover' : 'text-light-accent hover:text-light-accent-hover'}`}
            >
              View all skills
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface-2/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey in software development."
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                company: 'Kansoft Solutions',
                role: 'Senior Full Stack Developer',
                period: 'Dec 2023 – Present',
                desc: 'Leading development of scalable web applications with React, Angular, Laravel, and Node.js ecosystems.',
              },
              {
                company: 'AppCrave Technovation',
                role: 'Full Stack Developer',
                period: 'July 2022 – Dec 2023',
                desc: 'Built full-stack web applications using Laravel, JavaScript, and SQL with responsive UI.',
              },
            ].map((exp, i) => (
              <GlassCard key={exp.company} delay={i * 0.15}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <div>
                    <h3 className={`font-poppins font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={isDark ? 'text-dark-accent' : 'text-light-accent'}>{exp.company}</p>
                  </div>
                  <span className={`text-sm mt-1 sm:mt-0 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className={isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}>{exp.desc}</p>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/experience"
              className={`inline-flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-dark-accent hover:text-dark-accent-hover' : 'text-light-accent hover:text-light-accent-hover'}`}
            >
              View full experience
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of the projects I've built that showcase my expertise."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <GlassCard key={project.title} delay={i * 0.1}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                  <Rocket size={24} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                </div>
                <h3 className={`font-poppins font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-dark-accent/10 text-dark-accent'
                          : 'bg-light-accent/10 text-light-accent'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-dark-accent hover:text-dark-accent-hover' : 'text-light-accent hover:text-light-accent-hover'}`}
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Freelance CTA */}
      <section className={`py-24 ${isDark ? 'bg-dark-surface/30' : 'bg-light-surface-2/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 text-center border ${
              isDark ? 'bg-dark-surface border-dark-border' : 'bg-light-surface border-light-border'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <h2 className={`font-poppins text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Have a project in mind?
              </h2>
              <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                I'm available for freelance work. Let's collaborate and build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${
                    isDark
                      ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25'
                      : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25'
                  }`}
                >
                  <Briefcase size={18} />
                  Hire Me
                </Link>
                <Link
                  to="/services"
                  className={`inline-flex items-center gap-2 font-semibold transition-colors ${isDark ? 'text-dark-accent hover:text-dark-accent-hover' : 'text-light-accent hover:text-light-accent-hover'}`}
                >
                  View Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
