import { motion } from 'framer-motion';
import {
  Code2, Server, Database, Wrench, Sparkles,
  Globe, Layers, Terminal, GitBranch, Box,
  Palette, Layout, Cpu, Braces, FileCode2, Bot,
  Link2, BarChart3, Target
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const skillGroups = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML', icon: Globe, level: 95 },
      { name: 'CSS', icon: Palette, level: 92 },
      { name: 'JavaScript', icon: Braces, level: 90 },
      { name: 'React', icon: Code2, level: 88 },
      { name: 'Angular', icon: Box, level: 80 },
      { name: 'Tailwind CSS', icon: Palette, level: 90 },
      { name: 'Bootstrap', icon: Layout, level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'PHP', icon: FileCode2, level: 90 },
      { name: 'Laravel', icon: Layers, level: 92 },
      { name: 'Node.js', icon: Server, level: 82 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'SQL', icon: Database, level: 88 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: GitBranch, level: 90 },
      { name: 'Postman', icon: Terminal, level: 85 },
      { name: 'WordPress', icon: Globe, level: 85 },
      { name: 'jQuery', icon: Braces, level: 82 },
    ],
  },
  {
    title: 'Integrations & Analytics',
    icon: BarChart3,
    skills: [
      { name: '3rd Party Integrations', icon: Link2, level: 88 },
      { name: 'GTM / GA4 Tracking', icon: BarChart3, level: 85 },
      { name: 'Meta Pixel Tracking', icon: Target, level: 84 },
    ],
  },
  {
    title: 'Modern',
    icon: Sparkles,
    skills: [
      { name: 'GenAI', icon: Bot, level: 80 },
      { name: 'Prompt Engineering', icon: Cpu, level: 82 },
    ],
  },
];

function SkillCard({ name, icon: Icon, level, isDark, delay }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl border p-5 transition-all duration-300 ${
        isDark
          ? 'bg-dark-surface/80 border-dark-border hover:border-dark-accent/40 hover:shadow-lg hover:shadow-dark-accent/10'
          : 'bg-light-surface/80 border-light-border hover:border-light-accent/40 hover:shadow-lg hover:shadow-light-accent/10'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-xl transition-colors ${
          isDark
            ? 'bg-dark-accent/10 group-hover:bg-dark-accent/20'
            : 'bg-light-accent/10 group-hover:bg-light-accent/20'
        }`}>
          <Icon size={20} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
        </div>
        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-dark-border' : 'bg-light-surface-2'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${
            isDark
              ? 'from-dark-accent to-purple-500'
              : 'from-light-accent to-purple-500'
          }`}
        />
      </div>
      <div className={`text-right mt-1.5 text-xs font-medium ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
        {level}%
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit built through years of professional development experience."
        />

        <div className="space-y-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                  <group.icon size={22} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                </div>
                <h3 className={`font-poppins text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {group.title}
                </h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} isDark={isDark} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
