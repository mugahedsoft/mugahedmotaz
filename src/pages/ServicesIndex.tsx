import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_NUMBER, buildWebsiteLeadMessage, getWhatsAppLink } from '@/lib/whatsapp';

const ServicesIndex = () => {
 const { t } = useLanguage();

 const whatsappMessage = buildWebsiteLeadMessage(
  t(
   "Hi! I came from mugahedmotaz.com and I'd like to request a service.",
   'مرحباً! أنا قادم من موقع mugahedmotaz.com وأرغب بطلب خدمة.'
  )
 );

 const services = [
  {
   titleEn: 'Web Development',
   titleAr: 'تطوير مواقع وتطبيقات ويب',
   descEn: 'Custom websites, web apps, dashboards, and scalable solutions.',
   descAr: 'مواقع وتطبيقات ويب مخصصة، لوحات تحكم، وحلول قابلة للتوسع.',
   to: '/services/web-development',
  },
  {
   titleEn: 'UI/UX Design',
   titleAr: 'تصميم UI/UX',
   descEn: 'Interfaces and experiences that feel premium and convert.',
   descAr: 'واجهات وتجربة مستخدم احترافية ترفع التحويل.',
   to: '/services/ui-ux-design',
  },
  {
   titleEn: 'SEO Landing Pages',
   titleAr: 'صفحات هبوط SEO',
   descEn: 'Landing pages built for ads, speed, and search visibility.',
   descAr: 'صفحات هبوط جاهزة للإعلانات وسريعة ومهيئة للبحث.',
   to: '/services/landing-pages-seo',
  },
 ];

 return (
  <div className="min-h-screen bg-background">
   <Header />
   <main className="pt-24 sm:pt-28">
    <div className="site-container py-16 sm:py-20">
     <div className="mb-8 flex items-center justify-between gap-4">
      <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
       {t('Back to Home', 'الرجوع للرئيسية')}
      </Link>
      <Link to="/pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
       {t('Pricing', 'الباقات')}
      </Link>
     </div>

     <header className="max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
       {t('Services', 'الخدمات')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
       {t(
        'Choose a service page to see details, deliverables, and FAQs.',
        'اختر خدمة لتفاصيل التنفيذ والمخرجات والأسئلة الشائعة.'
       )}
      </p>
     </header>

     <section className="mt-12 grid gap-6 lg:grid-cols-3">
      {services.map((s) => (
       <Link
        key={s.to}
        to={s.to}
        className="rounded-2xl bg-card border border-border p-6 hover:border-accent/50 hover-lift transition-all"
       >
        <h2 className="font-bold text-foreground">{t(s.titleEn, s.titleAr)}</h2>
        <p className="mt-3 text-muted-foreground">{t(s.descEn, s.descAr)}</p>
        <div className="mt-6 text-accent font-semibold">
         {t('View details', 'عرض التفاصيل')}
        </div>
       </Link>
      ))}
     </section>

     <section className="mt-12 rounded-2xl bg-secondary border border-border p-6">
      <h2 className="text-xl font-bold text-foreground">{t('Ready to start?', 'جاهز نبدأ؟')}</h2>
      <p className="mt-3 text-muted-foreground">
       {t(
        'Message me on WhatsApp and tell me what you need. I usually reply quickly.',
        'راسلني على واتساب واذكر المطلوب. غالباً أرد بسرعة.'
       )}
      </p>
      <div className="mt-6">
       <a
        href={getWhatsAppLink(whatsappMessage, WHATSAPP_NUMBER)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
       >
        {t('WhatsApp', 'واتساب')}
       </a>
      </div>
     </section>
    </div>
   </main>
   <Footer />
  </div>
 );
};

export default ServicesIndex;
