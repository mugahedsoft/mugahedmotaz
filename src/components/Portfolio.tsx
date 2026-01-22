import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', en: 'All', ar: 'الكل' },
    { id: 'web', en: 'Web Apps', ar: 'تطبيقات الويب' },
    { id: 'design', en: 'UI/UX', ar: 'التصميم' },
    { id: 'marketing', en: 'Landing Pages', ar: 'صفحات الهبوط' },
  ];

  const projects = [
    {
      id: 1,
      category: 'web',
      titleEn: 'E-Commerce Dashboard',
      titleAr: 'لوحة تحكم التجارة الإلكترونية',
      descEn: 'Full-featured admin dashboard for online stores',
      descAr: 'لوحة تحكم متكاملة للمتاجر الإلكترونية',
      gradient: 'from-blue-500/80 to-purple-600/80',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      category: 'design',
      titleEn: 'FinTech Mobile App',
      titleAr: 'تطبيق مالي للهاتف',
      descEn: 'Modern UI design for financial services',
      descAr: 'تصميم واجهة عصرية للخدمات المالية',
      gradient: 'from-emerald-500/80 to-teal-600/80',
      tags: ['Figma', 'UI/UX', 'Prototype'],
    },
    {
      id: 3,
      category: 'marketing',
      titleEn: 'SaaS Landing Page',
      titleAr: 'صفحة هبوط SaaS',
      descEn: 'High-converting landing page for software product',
      descAr: 'صفحة هبوط عالية التحويل لمنتج برمجي',
      gradient: 'from-orange-500/80 to-red-600/80',
      tags: ['Next.js', 'SEO', 'Analytics'],
    },
    {
      id: 4,
      category: 'web',
      titleEn: 'Healthcare Platform',
      titleAr: 'منصة الرعاية الصحية',
      descEn: 'Patient management and appointment system',
      descAr: 'نظام إدارة المرضى والمواعيد',
      gradient: 'from-cyan-500/80 to-blue-600/80',
      tags: ['React', 'PostgreSQL', 'API'],
    },
    {
      id: 5,
      category: 'design',
      titleEn: 'Travel Booking App',
      titleAr: 'تطبيق حجز السفر',
      descEn: 'Intuitive booking experience design',
      descAr: 'تصميم تجربة حجز سلسة',
      gradient: 'from-pink-500/80 to-rose-600/80',
      tags: ['Figma', 'Animation', 'Mobile'],
    },
    {
      id: 6,
      category: 'marketing',
      titleEn: 'Agency Portfolio',
      titleAr: 'محفظة الوكالة',
      descEn: 'Creative agency showcase website',
      descAr: 'موقع عرض لوكالة إبداعية',
      gradient: 'from-violet-500/80 to-purple-600/80',
      tags: ['React', 'Framer Motion', 'CMS'],
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-scroll-offset py-24 bg-secondary" ref={ref}>
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t('My Work', 'أعمالي')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t('Featured', 'مشاريع')}{' '}
            <span className="text-accent">{t('Projects', 'مميزة')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'A selection of projects showcasing my expertise in development, design, and digital solutions.',
              'مجموعة مختارة من المشاريع التي تعرض خبرتي في التطوير والتصميم والحلول الرقمية.'
            )}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-medium ${activeFilter === filter.id
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'hover:border-accent hover:text-accent'
                }`}
            >
              {t(filter.en, filter.ar)}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Eye className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                  {t(project.titleEn, project.titleAr)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.descEn, project.descAr)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-1 text-xs bg-secondary text-foreground/70 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
