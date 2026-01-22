import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Lightbulb,
  FileSearch,
  PenTool,
  Code,
  TestTube2,
  Rocket,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Workflow = () => {
  const { t, direction } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      titleEn: 'Idea & Requirements',
      titleAr: 'الفكرة والمتطلبات',
      descEn: 'Understanding your vision and goals',
      descAr: 'فهم رؤيتك وأهدافك',
    },
    {
      icon: FileSearch,
      number: '02',
      titleEn: 'Planning & Strategy',
      titleAr: 'التخطيط والاستراتيجية',
      descEn: 'Creating a roadmap for success',
      descAr: 'إنشاء خارطة طريق للنجاح',
    },
    {
      icon: PenTool,
      number: '03',
      titleEn: 'UI/UX Design',
      titleAr: 'تصميم UI/UX',
      descEn: 'Crafting beautiful interfaces',
      descAr: 'صياغة واجهات جميلة',
    },
    {
      icon: Code,
      number: '04',
      titleEn: 'Development',
      titleAr: 'التطوير',
      descEn: 'Building with clean code',
      descAr: 'البناء بكود نظيف',
    },
    {
      icon: TestTube2,
      number: '05',
      titleEn: 'Testing',
      titleAr: 'الاختبار',
      descEn: 'Ensuring quality and performance',
      descAr: 'ضمان الجودة والأداء',
    },
    {
      icon: Rocket,
      number: '06',
      titleEn: 'Launch',
      titleAr: 'الإطلاق',
      descEn: 'Going live with confidence',
      descAr: 'الانطلاق بثقة',
    },
    {
      icon: HeartHandshake,
      number: '07',
      titleEn: 'Support & Growth',
      titleAr: 'الدعم والنمو',
      descEn: 'Ongoing maintenance and updates',
      descAr: 'صيانة وتحديثات مستمرة',
    },
  ];

  return (
    <section id="workflow" className="section-scroll-offset py-24 bg-primary" ref={ref}>
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {t('How I Work', 'منهجية العمل')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6">
            {t('From Idea to', 'من الفكرة إلى')}{' '}
            <span className="text-accent">{t('Reality', 'الواقع')}</span>
          </h2>
          <p className="text-white/70 text-lg">
            {t(
              'A structured approach that ensures quality delivery at every stage of your project.',
              'نهج منظم يضمن جودة التسليم في كل مرحلة من مراحل مشروعك.'
            )}
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <step.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Number Badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center z-20">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h4 className="font-semibold text-white text-sm mb-2">
                    {t(step.titleEn, step.titleAr)}
                  </h4>

                  {/* Description */}
                  <p className="text-white/50 text-xs">
                    {t(step.descEn, step.descAr)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
