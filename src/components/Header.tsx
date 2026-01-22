import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { en: 'Home', ar: 'الرئيسية', href: '#home' },
    { en: 'About', ar: 'عني', href: '#about' },
    { en: 'Services', ar: 'الخدمات', href: '#services' },
    { en: 'Workflow', ar: 'منهجية العمل', href: '#workflow' },
    { en: 'Portfolio', ar: 'أعمالي', href: '#portfolio' },
    { en: 'Contact', ar: 'تواصل', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${isScrolled ? 'shadow-card border-b border-border' : ''
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="text-xl sm:text-2xl font-bold text-primary"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-accent">m</span>ugahed
            <span className="text-accent">m</span>otaz
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative group"
              >
                {t(item.en, item.ar)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="h-9 px-3 font-semibold border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </Button>

            {/* CTA Button - Desktop */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-accent hover:shadow-lg transition-all"
            >
              {t('Get Started', 'ابدأ الآن')}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                >
                  {t(item.en, item.ar)}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-4"
              >
                {t('Get Started', 'ابدأ الآن')}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
