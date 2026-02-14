import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart, Code2, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t ${isDark ? 'bg-dark-surface/50 border-dark-border' : 'bg-light-surface/50 border-light-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-dark-accent/10' : 'bg-light-accent/10'}`}>
                <Code2 size={20} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
              </div>
              <span className={`font-poppins font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Dinesh<span className={isDark ? 'text-dark-accent' : 'text-light-accent'}>.dev</span>
              </span>
            </Link>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
              Building scalable, high-performance web applications with modern technologies and clean architecture.
            </p>
          </div>

          <div>
            <h4 className={`font-poppins font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { path: '/about', label: 'About' },
                { path: '/skills', label: 'Skills' },
                { path: '/experience', label: 'Experience' },
                { path: '/projects', label: 'Projects' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors ${isDark ? 'text-dark-text-muted hover:text-dark-accent' : 'text-light-text-muted hover:text-light-accent'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-poppins font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/dinesh6363', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/dinesh-jangu-465555244', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:dineshjangu6363@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+919672106363', label: 'Phone' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all ${
                    isDark
                      ? 'bg-dark-surface hover:bg-dark-accent/20 text-dark-text-muted hover:text-dark-accent'
                      : 'bg-light-surface-2 hover:bg-light-accent/10 text-light-text-muted hover:text-light-accent'
                  }`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-10 pt-8 border-t text-center ${isDark ? 'border-dark-border' : 'border-light-border'}`}>
          <p className={`text-sm flex items-center justify-center gap-1 ${isDark ? 'text-dark-text-muted' : 'text-light-text-muted'}`}>
            &copy; {year} Dinesh Jangu. Crafted with
            <Heart size={14} className="text-red-500 fill-red-500" />
            and clean code.
          </p>
        </div>
      </div>
    </footer>
  );
}
