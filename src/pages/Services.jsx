import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Layers, Globe, Zap, Palette, Wrench, Settings, Bot, BarChart3,
  ArrowRight, CheckCircle2, Star, Briefcase
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Web Development',
    desc: 'End-to-end web application development from database design to frontend implementation. I build robust, scalable solutions using modern frameworks and best practices.',
    features: ['Custom Web Applications', 'Database Architecture', 'API Development', 'Authentication Systems'],
  },
  {
    icon: Layers,
    title: 'React / Laravel Website',
    desc: 'Specialized in building dynamic, high-performance websites using React for interactive UIs and Laravel for powerful backend systems.',
    features: ['Single Page Applications', 'Server-Side Rendering', 'Admin Dashboards', 'Content Management'],
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    desc: 'Custom WordPress themes, plugins, and full website development. From business sites to complex custom solutions built on WordPress.',
    features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Site Migration'],
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    desc: 'Transform slow-loading websites into lightning-fast experiences. I optimize every aspect from server response to frontend rendering.',
    features: ['Core Web Vitals', 'Database Optimization', 'Caching Strategies', 'Asset Optimization'],
  },
  {
    icon: Palette,
    title: 'UI Modernization',
    desc: 'Revamp outdated interfaces with modern, responsive designs. I bring your vision to life with clean aesthetics and intuitive user experiences.',
    features: ['Responsive Redesign', 'Component Libraries', 'Design Systems', 'Accessibility'],
  },
  {
    icon: Wrench,
    title: 'Bug Fixing & Maintenance',
    desc: 'Reliable ongoing support and maintenance services. I identify root causes, fix bugs efficiently, and keep your applications running smoothly.',
    features: ['Bug Diagnosis', 'Performance Fixes', 'Security Patches', 'Regular Updates'],
  },
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    desc: 'Custom AI-powered chatbots for websites, WhatsApp, and Telegram. Automate customer support, lead generation, and business workflows with intelligent conversational bots.',
    features: ['Website Chat Widgets', 'WhatsApp & Telegram Bots', 'AI-Powered Responses', 'Lead Generation Flows'],
  },
  {
    icon: BarChart3,
    title: 'GTM, GA4 & Meta Pixel Tracking',
    desc: 'End-to-end analytics and tracking setup using Google Tag Manager, GA4, and Meta Pixel. Accurately measure user behavior, conversions, and marketing performance across your web applications.',
    features: ['Google Tag Manager Setup', 'GA4 Event Tracking', 'Meta Pixel & Conversions API', 'Custom Dashboard & Reports'],
  },
  {
    icon: Settings,
    title: 'Custom Web Solutions',
    desc: 'Tailored solutions for unique business requirements. From integrations to automation, I build exactly what your business needs.',
    features: ['Third-Party Integrations', 'Workflow Automation', 'Custom APIs', 'Data Migration'],
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understanding your goals, requirements, and vision for the project.' },
  { num: '02', title: 'Planning', desc: 'Defining architecture, tech stack, timeline, and deliverables.' },
  { num: '03', title: 'Development', desc: 'Building your solution with clean code and regular progress updates.' },
  { num: '04', title: 'Delivery', desc: 'Testing, optimization, deployment, and knowledge transfer.' },
];

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Freelance Services"
          subtitle="Available for freelance projects. Let me help you build something amazing."
        />

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
            isDark
              ? 'bg-green-500/10 border border-green-500/20'
              : 'bg-green-500/10 border border-green-500/20'
          }`}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              Currently Available for Freelance Work
            </span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <GlassCard key={service.title} delay={i * 0.08}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                <service.icon size={24} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
              </div>
              <h3 className={`font-poppins font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                    <CheckCircle2 size={14} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Process Section */}
        <SectionHeading
          title="How I Work"
          subtitle="A streamlined process that ensures quality delivery on every project."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {processSteps.map((step, i) => (
            <GlassCard key={step.num} delay={i * 0.1} hover={false}>
              <div className={`font-poppins text-4xl font-bold mb-3 ${isDark ? 'text-dark-accent/30' : 'text-light-accent/30'}`}>
                {step.num}
              </div>
              <h3 className={`font-poppins font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {step.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                {step.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Why Hire Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl border p-8 sm:p-12 mb-16 ${isDark ? 'bg-dark-surface border-dark-border' : 'bg-light-surface border-light-border'}`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`font-poppins text-2xl sm:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Why Work With Me?
              </h3>
              <ul className="space-y-3">
                {[
                  'Clean, maintainable code that stands the test of time',
                  'Transparent communication and regular progress updates',
                  'On-time delivery with attention to every detail',
                  'Post-delivery support and documentation',
                  'Performance-first approach to every project',
                  'Modern tech stack and industry best practices',
                ].map((point) => (
                  <li key={point} className={`flex items-start gap-3 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                    <Star size={16} className={`shrink-0 mt-1 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className={`inline-block rounded-2xl p-8 ${isDark ? 'bg-dark-bg' : 'bg-light-surface-2'}`}>
                <Briefcase size={48} className={`mx-auto mb-4 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`} />
                <h4 className={`font-poppins text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Ready to Start?
                </h4>
                <p className={`text-sm mb-6 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                  Let's discuss your project requirements.
                </p>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${
                    isDark
                      ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25'
                      : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25'
                  }`}
                >
                  Hire Me Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
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
              Hire Me for Your Next Project
            </h2>
            <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
              Whether you need a full-stack application, a modern UI overhaul, or performance optimization —
              I deliver results that exceed expectations.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-white text-lg transition-all shadow-lg ${
                isDark
                  ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25 hover:shadow-dark-accent/40'
                  : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25 hover:shadow-light-accent/40'
              }`}
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
