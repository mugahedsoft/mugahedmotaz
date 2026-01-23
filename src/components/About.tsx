import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Code2, Palette, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      en: 'Modern Development',
      ar: 'تطوير عصري',
      descEn: 'Using the latest technologies and frameworks',
      descAr: 'باستخدام أحدث التقنيات والأطر البرمجية',
    },
    {
      icon: Palette,
      en: 'Creative Design',
      ar: 'تصميم إبداعي',
      descEn: 'User-centered design that converts',
      descAr: 'تصميم يركز على المستخدم ويحقق النتائج',
    },
    {
      icon: Rocket,
      en: 'Full Delivery',
      ar: 'تسليم متكامل',
      descEn: 'From idea to launch and beyond',
      descAr: 'من الفكرة إلى الإطلاق وما بعده',
    },
  ];

  const skills = [
    { en: 'React & Next.js', ar: 'React & Next.js' },
    { en: 'TypeScript', ar: 'TypeScript' },
    { en: 'Node.js', ar: 'Node.js' },
    { en: 'UI/UX Design', ar: 'تصميم UI/UX' },
    { en: 'Figma', ar: 'Figma' },
    { en: 'SEO & Marketing', ar: 'SEO والتسويق' },
  ];

  return (
    <section id="about" className="section-scroll-offset py-28 bg-secondary" ref={ref}>
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3" />
              <div className="absolute inset-0 bg-accent rounded-3xl -rotate-3 opacity-80" />

              {/* Main content card */}
              <div className="relative bg-card rounded-3xl p-6 sm:p-8 shadow-lg h-full flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 leading-snug">
                          {t(item.en, item.ar)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(item.descEn, item.descAr)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {t('About Me', 'عني')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t(
                'Transforming Ideas Into Digital Reality',
                'أحوّل الأفكار إلى واقع رقمي'
              )}
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                {t(
                  "I'm a full-stack developer and designer with a passion for creating exceptional digital experiences. With over 5 years of experience, I've helped businesses of all sizes establish their online presence.",
                  'أنا مطور ومصمم متكامل شغوف بإنشاء تجارب رقمية استثنائية. مع أكثر من 5 سنوات من الخبرة، ساعدت العديد من الشركات بمختلف أحجامها في بناء حضورها الرقمي.'
                )}
              </p>
              <p>
                {t(
                  "I believe in delivering complete solutions - from the initial concept to the final launch and ongoing support. My approach combines modern development practices with creative design thinking.",
                  'أؤمن بتقديم حلول متكاملة - من المفهوم الأولي إلى الإطلاق النهائي والدعم المستمر. منهجي يجمع بين ممارسات التطوير الحديثة والتفكير التصميمي الإبداعي.'
                )}
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">
                {t('Core Skills', 'المهارات الأساسية')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-primary/5 text-primary font-medium rounded-full text-sm border border-primary/10 hover:border-accent hover:text-accent transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 inline ltr:mr-2 rtl:ml-2" />
                    {t(skill.en, skill.ar)}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
