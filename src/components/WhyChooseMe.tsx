import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  Zap,
  Code2,
  HeartHandshake,
  Clock,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseMe = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Award,
      titleEn: 'Professional Mindset',
      titleAr: 'عقلية احترافية',
      descEn: 'Treating every project with the care and attention it deserves, delivering agency-level quality.',
      descAr: 'أتعامل مع كل مشروع بالعناية والاهتمام الذي يستحقه، مقدماً جودة على مستوى الوكالات.',
    },
    {
      icon: Zap,
      titleEn: 'One-Stop Solution',
      titleAr: 'حل متكامل',
      descEn: 'From design to development to marketing - get everything you need in one place.',
      descAr: 'من التصميم إلى التطوير إلى التسويق - احصل على كل ما تحتاجه في مكان واحد.',
    },
    {
      icon: Code2,
      titleEn: 'Modern Technologies',
      titleAr: 'تقنيات حديثة',
      descEn: 'Using the latest frameworks and tools to build fast, scalable, and maintainable solutions.',
      descAr: 'استخدام أحدث الأطر والأدوات لبناء حلول سريعة وقابلة للتوسع والصيانة.',
    },
    {
      icon: Shield,
      titleEn: 'High-Quality Results',
      titleAr: 'نتائج عالية الجودة',
      descEn: 'Clean code, pixel-perfect designs, and thoroughly tested deliverables.',
      descAr: 'كود نظيف، تصاميم دقيقة، ومنتجات مختبرة بشكل شامل.',
    },
    {
      icon: Clock,
      titleEn: 'Timely Delivery',
      titleAr: 'تسليم في الموعد',
      descEn: 'Meeting deadlines consistently with transparent communication throughout.',
      descAr: 'الالتزام بالمواعيد النهائية مع تواصل شفاف طوال المشروع.',
    },
    {
      icon: HeartHandshake,
      titleEn: 'Long-Term Support',
      titleAr: 'دعم طويل المدى',
      descEn: 'Post-launch maintenance and support to keep your project running smoothly.',
      descAr: 'صيانة ودعم ما بعد الإطلاق لضمان تشغيل مشروعك بسلاسة.',
    },
  ];

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t('Why Me', 'لماذا أنا')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t('Why Choose', 'لماذا تختار')}{' '}
            <span className="text-accent">{t('Me', 'خدماتي')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'What sets me apart and ensures your project is in capable hands.',
              'ما يميزني ويضمن أن مشروعك في أيدٍ أمينة.'
            )}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover-lift"
            >
              {/* Decorative Number */}
              <span className="absolute top-4 ltr:right-4 rtl:left-4 z-0 pointer-events-none select-none text-6xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(reason.titleEn, reason.titleAr)}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {t(reason.descEn, reason.descAr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
