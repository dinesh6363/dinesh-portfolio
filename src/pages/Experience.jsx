import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';

const experiences = [
  {
    company: 'Kansoft Solutions',
    role: 'Senior Full Stack Developer',
    period: 'Dec 2023 – Present',
    location: 'India',
    current: true,
    responsibilities: [
      'Leading development of scalable and modern web applications using cutting-edge technologies',
      'Built Tour & Travels software — end-to-end booking platform with API integrations to OTAs (Online Travel Agencies)',
      'Implemented and managed GTM, GA4, and Meta Pixel tracking to accurately measure user behavior, conversions, and marketing performance across web applications.',
      'Built Transportal software — logistics and transport management platform with real-time tracking',
      'WordPress development — custom theme and plugin development for client projects',
      'Working across React, Angular, Laravel, and Node.js ecosystems to deliver comprehensive solutions',
      'Designing robust application architecture and improving overall UI/UX quality',
      'Handling enterprise-level client requirements and translating business needs into technical solutions',
    ],
    tech: ['React', 'Angular', 'Laravel', 'Node.js', 'WordPress', 'Tailwind CSS', 'SQL'],
  },
  {
    company: 'AppCrave Technovation',
    role: 'Full Stack Developer',
    period: 'July 2022 – Dec 2023',
    location: 'India',
    current: false,
    responsibilities: [
      'Built full-stack web applications using Laravel, JavaScript, and SQL',
      'Created responsive and high-performance user interfaces with modern CSS frameworks',
      'Developed RESTful APIs and integrated third-party services and payment gateways',
      'Delivered custom business solutions tailored to individual client requirements',
      'Improved application performance, code quality, and deployment workflows',
      'Collaborated with design and product teams to deliver exceptional user experiences',
    ],
    tech: ['Laravel', 'JavaScript', 'PHP', 'SQL', 'Bootstrap', 'jQuery'],
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey building impactful software solutions."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-dark-border' : 'bg-light-border'}`} />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 sm:left-6 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 z-10 ${
                  exp.current
                    ? isDark
                      ? 'bg-dark-accent border-dark-bg'
                      : 'bg-light-accent border-light-bg'
                    : isDark
                      ? 'bg-dark-surface-2 border-dark-bg'
                      : 'bg-light-surface-2 border-light-bg'
                }`}>
                  {exp.current && (
                    <span className={`absolute inset-0 rounded-full animate-ping ${isDark ? 'bg-dark-accent/40' : 'bg-light-accent/40'}`} />
                  )}
                </div>

                <div className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-dark-surface/80 border-dark-border hover:border-dark-accent/30'
                    : 'bg-light-surface/80 border-light-border hover:border-light-accent/30'
                }`}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-poppins text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            isDark
                              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                              : 'bg-green-500/10 text-green-600 border border-green-500/20'
                          }`}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`font-semibold mt-1 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className={`flex flex-col gap-1 text-sm shrink-0 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                        <ChevronRight size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-dark-accent' : 'text-light-accent'}`} />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          isDark
                            ? 'bg-dark-accent/10 text-dark-accent'
                            : 'bg-light-accent/10 text-light-accent'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
