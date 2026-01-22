import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Globe,
  Layout,
  Smartphone,
  Database,
  Palette,
  Target,
  TrendingUp,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Globe,
      titleEn: 'Web Development',
      titleAr: 'تطوير الويب',
      descEn: 'Custom websites, web applications, dashboards, and SaaS platforms built with modern technologies.',
      descAr: 'مواقع ويب مخصصة، تطبيقات ويب، لوحات تحكم، ومنصات SaaS مبنية بأحدث التقنيات.',
      features: [
        { en: 'Websites', ar: 'مواقع الويب' },
        { en: 'Web Applications', ar: 'تطبيقات الويب' },
        { en: 'Dashboards', ar: 'لوحات التحكم' },
        { en: 'SaaS Platforms', ar: 'منصات SaaS' },
      ],
    },
    {
      icon: Palette,
      titleEn: 'UI/UX Design',
      titleAr: 'تصميم UI/UX',
      descEn: 'User-centered design that combines aesthetics with functionality for optimal user experience.',
      descAr: 'تصميم يركز على المستخدم يجمع بين الجماليات والوظائف لتجربة مستخدم مثالية.',
      features: [
        { en: 'User Interface Design', ar: 'تصميم واجهة المستخدم' },
        { en: 'User Experience', ar: 'تجربة المستخدم' },
        { en: 'Prototyping', ar: 'النماذج الأولية' },
        { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
      ],
    },
    {
      icon: Target,
      titleEn: 'Digital Marketing',
      titleAr: 'التسويق الرقمي',
      descEn: 'Strategic SEO, landing pages, and conversion optimization to maximize your online presence.',
      descAr: 'تحسين محركات البحث، صفحات الهبوط، وتحسين التحويلات لتعظيم حضورك الرقمي.',
      features: [
        { en: 'SEO Optimization', ar: 'تحسين محركات البحث' },
        { en: 'Landing Pages', ar: 'صفحات الهبوط' },
        { en: 'Conversion Optimization', ar: 'تحسين التحويلات' },
        { en: 'Ad-Ready Setup', ar: 'إعداد للإعلانات' },
      ],
    },
    {
      icon: Layers,
      titleEn: 'Full Project Delivery',
      titleAr: 'تسليم المشاريع الكاملة',
      descEn: 'End-to-end service from initial concept to launch, with ongoing support and maintenance.',
      descAr: 'خدمة شاملة من الفكرة الأولية إلى الإطلاق، مع دعم وصيانة مستمرة.',
      features: [
        { en: 'Idea to Launch', ar: 'من الفكرة للإطلاق' },
        { en: 'Design & Development', ar: 'التصميم والتطوير' },
        { en: 'Testing & QA', ar: 'الاختبار والجودة' },
        { en: 'Support & Growth', ar: 'الدعم والنمو' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="section-scroll-offset py-24 bg-background" ref={ref}>
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t('What I Offer', 'خدماتي')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t('Services That Drive', 'خدمات تدفع')}{' '}
            <span className="text-accent">{t('Results', 'النتائج')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Comprehensive digital solutions tailored to your business needs, delivered with precision and creativity.',
              'حلول رقمية شاملة مصممة لاحتياجات عملك، يتم تقديمها بدقة وإبداع.'
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Title & Arrow */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(service.titleEn, service.titleAr)}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {t(service.descEn, service.descAr)}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-sm bg-secondary text-foreground/80 rounded-full"
                    >
                      {t(feature.en, feature.ar)}
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

export default Services;
