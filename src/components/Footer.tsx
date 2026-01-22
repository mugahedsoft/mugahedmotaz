import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { en: 'Home', ar: 'الرئيسية', href: '#home' },
    { en: 'About', ar: 'عني', href: '#about' },
    { en: 'Services', ar: 'الخدمات', href: '#services' },
    { en: 'Portfolio', ar: 'أعمالي', href: '#portfolio' },
    { en: 'Contact', ar: 'تواصل', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-start">
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="text-2xl font-bold text-white"
            >
              <span className="text-accent">m</span>ugahed
              <span className="text-accent">m</span>otaz
            </a>
            <p className="text-white/60 text-sm mt-2">
              {t(
                'Building modern digital experiences',
                'بناء تجارب رقمية عصرية'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-white/70 hover:text-accent text-sm transition-colors"
              >
                {t(link.en, link.ar)}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-end">
            <p className="text-white/60 text-sm flex items-center justify-center md:justify-end gap-1">
              {t('Made with', 'صنع بـ')}
              <Heart className="w-4 h-4 text-accent fill-accent" />
              {t('by mugahedmotaz', 'بواسطة mugahedmotaz')}
            </p>
            <p className="text-white/40 text-xs mt-1">
              © {currentYear} {t('All rights reserved', 'جميع الحقوق محفوظة')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
