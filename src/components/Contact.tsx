import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('Message Sent!', 'تم إرسال الرسالة!'),
      description: t(
        "Thank you for reaching out. I'll get back to you soon.",
        'شكراً لتواصلك. سأرد عليك قريباً.'
      ),
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      labelEn: 'Email',
      labelAr: 'البريد الإلكتروني',
      value: 'hello@mugahedmotaz.com',
      href: 'mailto:hello@mugahedmotaz.com',
    },
    {
      icon: MessageCircle,
      labelEn: 'WhatsApp',
      labelAr: 'واتساب',
      value: '+1 234 567 890',
      href: 'https://wa.me/1234567890',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {t("Let's Connect", 'لنتواصل')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              {t("Let's Build Your", 'لنبني مشروعك')}{' '}
              <span className="text-accent">{t('Project Together', 'معاً')}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg">
              {t(
                "Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.",
                'لديك مشروع في ذهنك؟ أحب أن أسمع عنه. تواصل معي ولنصنع شيئاً مذهلاً.'
              )}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <info.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t(info.labelEn, info.labelAr)}
                    </p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                  <ArrowIcon className="w-5 h-5 text-muted-foreground ltr:ml-auto rtl:mr-auto group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('Send a Message', 'أرسل رسالة')}
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('Your Name', 'اسمك')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('John Doe', 'محمد أحمد')}
                    required
                    className="bg-secondary border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('Your Email', 'بريدك الإلكتروني')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('Your Message', 'رسالتك')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('Tell me about your project...', 'أخبرني عن مشروعك...')}
                    required
                    rows={5}
                    className="bg-secondary border-border focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-accent hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      {t('Sending...', 'جارٍ الإرسال...')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      {t('Send Message', 'إرسال الرسالة')}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
