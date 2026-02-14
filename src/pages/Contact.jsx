import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_bcufqf7';
const EMAILJS_TEMPLATE_ID = 'template_dup5d8o';
const EMAILJS_PUBLIC_KEY = 'cn_zR7LftRMQbIH5t';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dineshjangu6363@gmail.com', href: 'mailto:dineshjangu6363@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 96721 06363', href: 'tel:+919672106363' },
    { icon: MapPin, label: 'Location', value: 'India', href: null },
    { icon: Github, label: 'GitHub', value: 'github.com/dinesh6363', href: 'https://github.com/dinesh6363' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/dinesh-jangu', href: 'https://www.linkedin.com/in/dinesh-jangu-465555244' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl border p-6 sm:p-8 ${
              isDark ? 'bg-dark-surface/80 border-dark-border' : 'bg-light-surface/80 border-light-border'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                  <MessageSquare size={20} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                </div>
                <h3 className={`font-poppins font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send a Message
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${
                      isDark
                        ? 'bg-dark-bg border-dark-border text-white placeholder:text-dark-text-muted focus:ring-dark-accent/40 focus:border-dark-accent'
                        : 'bg-light-bg border-light-border text-gray-900 placeholder:text-light-text-muted focus:ring-light-accent/40 focus:border-light-accent'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 ${
                      isDark
                        ? 'bg-dark-bg border-dark-border text-white placeholder:text-dark-text-muted focus:ring-dark-accent/40 focus:border-dark-accent'
                        : 'bg-light-bg border-light-border text-gray-900 placeholder:text-light-text-muted focus:ring-light-accent/40 focus:border-light-accent'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none focus:ring-2 ${
                      isDark
                        ? 'bg-dark-bg border-dark-border text-white placeholder:text-dark-text-muted focus:ring-dark-accent/40 focus:border-dark-accent'
                        : 'bg-light-bg border-light-border text-gray-900 placeholder:text-light-text-muted focus:ring-light-accent/40 focus:border-light-accent'
                    }`}
                  />
                </div>

                <motion.button
                  whileHover={status === 'sending' ? {} : { scale: 1.02 }}
                  whileTap={status === 'sending' ? {} : { scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
                    isDark
                      ? 'bg-dark-accent hover:bg-dark-accent-hover shadow-dark-accent/25'
                      : 'bg-light-accent hover:bg-light-accent-hover shadow-light-accent/25'
                  }`}
                >
                  {status === 'sending' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-green-500 bg-green-500/10 px-4 py-3 rounded-xl"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-red-500 bg-red-500/10 px-4 py-3 rounded-xl"
                  >
                    <AlertCircle size={18} />
                    Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <GlassCard key={info.label} delay={i * 0.1} hover={false}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                    <info.icon size={20} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium text-sm transition-colors ${
                          isDark ? 'text-white hover:text-dark-accent' : 'text-gray-900 hover:text-light-accent'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Quick Response */}
            <div className={`rounded-2xl border p-6 text-center ${
              isDark ? 'bg-dark-surface/80 border-dark-border' : 'bg-light-surface/80 border-light-border'
            }`}>
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'
              }`}>
                <Mail size={28} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
              </div>
              <h4 className={`font-poppins font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Quick Response
              </h4>
              <p className={`text-sm ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
                I typically respond within 24 hours. Looking forward to hearing about your project!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
