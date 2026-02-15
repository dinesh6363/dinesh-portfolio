import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download, ArrowRight, Target, Lightbulb, Rocket, Shield,
  Code2, Users, Zap, Globe, User
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';

const PROFILE_IMAGE = '/profile.webp';
const TEAM_IMAGE = '/team.webp';

const strengths = [
  {
    icon: Target,
    title: 'Problem Solving',
    desc: 'I break down complex challenges into manageable solutions, approaching every problem with a systematic and analytical mindset.',
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    desc: 'I design applications built to grow — with clean, modular architecture that supports long-term scalability and maintainability.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    desc: 'Speed matters. I optimize every layer of the stack to deliver fast, responsive applications that users love.',
  },
  {
    icon: Lightbulb,
    title: 'Modern UI/UX',
    desc: 'I craft pixel-perfect, intuitive interfaces that combine aesthetic excellence with seamless user experiences.',
  },
  {
    icon: Shield,
    title: 'Code Quality',
    desc: 'I write clean, well-documented, and thoroughly tested code that other developers can easily understand and maintain.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'I thrive in collaborative environments, communicating effectively with cross-functional teams to deliver outstanding results.',
  },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer committed to building exceptional digital experiences."
        />

        {/* Profile Image + Intro */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center lg:sticky lg:top-28"
          >
            <div className="relative">
              <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl`} />
              <div className={`relative w-64 h-80 sm:w-72 sm:h-88 rounded-2xl overflow-hidden border-2 ${
                isDark ? 'border-dark-border' : 'border-light-border'
              }`}>
                <img
                  src={PROFILE_IMAGE}
                  alt="Dinesh Jangu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className={`w-full h-full items-center justify-center hidden ${
                    isDark ? 'bg-dark-surface-2' : 'bg-light-surface-2'
                  }`}
                >
                  <User size={80} className={isDark ? 'text-dark-text-muted' : 'text-light-text-muted'} />
                </div>
              </div>
              <div className={`absolute -bottom-4 -right-4 px-5 py-2.5 rounded-xl font-poppins font-semibold text-white text-sm shadow-lg ${
                isDark ? 'bg-dark-accent' : 'bg-light-accent'
              }`}>
                3+ Years Exp
              </div>
            </div>
          </motion.div>

          {/* Developer Journey */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h3 className={`font-poppins text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Developer Journey
            </h3>
            <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
              <p>
                My journey into software development began with a deep curiosity for how the web works.
                What started as tinkering with HTML and CSS quickly evolved into a passion for building
                full-stack applications that make a real impact.
              </p>
              <p>
                Over the years, I've had the privilege of working with innovative startups and established
                companies, honing my craft across the entire development spectrum — from designing intuitive
                frontend interfaces to architecting robust backend systems and APIs.
              </p>
              <p>
                Today, as a Senior Full Stack Developer at Kansoft Solutions, I lead the development of
                enterprise-grade web applications. I work across the React, Angular, Laravel, and Node.js
                ecosystems, constantly pushing the boundaries of what's possible with modern web technologies.
              </p>
              <p>
                I believe in writing code that is not only functional but elegant — code that tells a story
                and stands the test of time. My approach combines technical excellence with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg ${
                  isDark
                    ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25'
                    : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25'
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all border ${
                  isDark
                    ? 'border-dark-border text-white hover:border-dark-accent/40 hover:bg-dark-surface'
                    : 'border-light-border text-gray-900 hover:border-light-accent/40 hover:bg-light-surface-2'
                }`}
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {[
                { icon: Code2, label: 'Full Stack', value: '3+ Years' },
                { icon: Globe, label: 'Technologies', value: '15+' },
                { icon: Rocket, label: 'Projects', value: '50+' },
                { icon: Zap, label: 'Clients', value: '20+' },
              ].map((stat, i) => (
                <GlassCard key={stat.label} delay={i * 0.1} hover={false} className="text-center py-4 px-3">
                  <stat.icon size={20} className={`mx-auto mb-2 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`} />
                  <div className={`font-poppins font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-xs ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Strengths */}
        <SectionHeading
          title="What I Bring to the Table"
          subtitle="Core strengths that define my approach to software development."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, i) => (
            <GlassCard key={strength.title} delay={i * 0.08}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                <strength.icon size={24} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
              </div>
              <h3 className={`font-poppins font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {strength.title}
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                {strength.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Team & Collaboration */}
        <div className="mt-24 mb-24">
          <SectionHeading
            title="Collaboration & Teamwork"
            subtitle="Great products are built by great teams — and I've been fortunate to work with some of the best."
          />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-15 blur-xl`} />
              <div className={`relative rounded-2xl overflow-hidden border-2 aspect-video ${
                isDark ? 'border-dark-border' : 'border-light-border'
              }`}>
                <img
                  src={TEAM_IMAGE}
                  alt="Dinesh Jangu with team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className={`w-full h-full items-center justify-center hidden ${
                    isDark ? 'bg-dark-surface-2' : 'bg-light-surface-2'
                  }`}
                >
                  <Users size={64} className={isDark ? 'text-dark-text-muted' : 'text-light-text-muted'} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`font-poppins text-2xl font-bold mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Built with Teams, Grown Through People
              </h3>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                <p>
                  Throughout my career, I've had the privilege of collaborating with diverse teams — from
                  compact startup squads to larger enterprise groups. Each team brought its own culture,
                  workflow, and perspective, and every experience has shaped me into a more versatile developer.
                </p>
                <p>
                  Working closely with designers, project managers, QA engineers, and fellow developers has
                  taught me that the best solutions emerge from open communication and shared ownership.
                  I actively participate in code reviews, knowledge-sharing sessions, and brainstorming to
                  elevate the entire team's output.
                </p>
                <p>
                  Whether it's pair programming on a complex feature, onboarding a new team member, or
                  presenting architectural decisions to stakeholders — I believe in leading by example and
                  contributing beyond just writing code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Work Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-8 sm:p-12 border relative overflow-hidden ${
            isDark ? 'bg-dark-surface border-dark-border' : 'bg-light-surface border-light-border'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
          <div className="relative z-10">
            <h3 className={`font-poppins text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Work Philosophy
            </h3>
            <div className={`text-lg leading-relaxed space-y-4 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
              <p>
                I believe that great software is born at the intersection of technical excellence and
                user empathy. Every line of code I write serves a purpose — to solve problems, delight
                users, and create lasting value.
              </p>
              <p>
                I follow agile methodologies, embrace continuous learning, and stay current with the
                latest technologies and best practices. Whether working independently or as part of a
                team, I'm committed to delivering quality on time, every time.
              </p>
              <p>
                Beyond writing code, I'm passionate about mentoring, knowledge sharing, and contributing
                to the developer community. I see every project as an opportunity to grow and to push the
                boundaries of what's possible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
