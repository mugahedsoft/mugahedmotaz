import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const WebDevelopment = () => {
 const { t } = useLanguage();
 return (
  <div className="min-h-screen bg-background">
   <Header />
   <main className="pt-24 sm:pt-28">
    <div className="site-container py-16 sm:py-20">
     <div className="mb-8">
      <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
       {t('Back to Home', 'الرجوع للرئيسية')}
      </Link>
     </div>

     <header className="max-w-3xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
       {t('Professional Web Development', 'تطوير مواقع وتطبيقات ويب احترافية')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
       {t(
        'I build fast, secure, and scalable websites—from business sites to dashboards and SaaS—with excellent UX and SEO-ready foundations.',
        'أبني مواقع سريعة وآمنة وقابلة للتوسع، من صفحات الشركات والمتاجر إلى لوحات التحكم وتطبيقات SaaS، مع تجربة مستخدم ممتازة وتجهيزات SEO.'
       )}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
       <a
        href="/#contact"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
       >
        {t('Request a Quote', 'اطلب عرض سعر')}
       </a>
       <a
        href="https://wa.me/249900318100"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
       >
        {t('WhatsApp', 'واتساب')}
       </a>
      </div>
     </header>

     <section className="mt-12 grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('What you get', 'ماذا ستحصل عليه')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Fast, responsive website on all devices', 'موقع سريع ومتجاوب لكل الأجهزة')}</li>
        <li>{t('Clean modern UI', 'واجهة مستخدم نظيفة وحديثة')}</li>
        <li>{t('Basic SEO setup', 'تهيئة أساسية لمحركات البحث (SEO)')}</li>
        <li>{t('Secure code and best practices', 'حماية وأفضل ممارسات للكود')}</li>
        <li>{t('Scalable foundation for future features', 'قابلية توسّع وإضافة مزايا لاحقًا')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('Development services', 'خدمات التطوير')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Business websites', 'مواقع شركات وصفحات تعريفية')}</li>
        <li>{t('E-commerce experiences', 'متاجر إلكترونية وتجارب شراء')}</li>
        <li>{t('Dashboards', 'لوحات تحكم Dashboards')}</li>
        <li>{t('Web applications', 'تطبيقات ويب Web Apps')}</li>
        <li>{t('SaaS platforms', 'منصات SaaS')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('Tech stack', 'التقنيات')}</h2>
       <p className="mt-4 text-muted-foreground">
        {t(
         'React, TypeScript, TailwindCSS, API integration—clean architecture with performance and tracking readiness.',
         'React, TypeScript, TailwindCSS, API Integration، مع بناء نظيف وتجهيز للقياس والتحسين.'
        )}
       </p>
      </div>
     </section>

     <section className="mt-12 rounded-2xl bg-card border border-border p-6">
      <h2 className="text-xl font-bold text-foreground">{t('FAQ', 'أسئلة شائعة')}</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
       <div>
        <h3 className="font-semibold text-foreground">{t('How long does it take?', 'كم يستغرق تنفيذ الموقع؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'It depends on scope. Most business sites take 7–14 days. Larger projects are delivered in clear milestones.',
          'يعتمد على حجم المشروع. غالبًا المواقع التعريفية من 7 إلى 14 يوم، والمشاريع الأكبر يتم تقسيمها لمراحل واضحة.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Will it be fast on mobile?', 'هل سيكون الموقع سريعًا على الهاتف؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. I optimize for performance and Core Web Vitals with responsive, mobile-first UI.',
          'نعم، يتم بناء الموقع بأفضل ممارسات الأداء وCore Web Vitals مع تصميم متجاوب.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Does it include SEO?', 'هل تشمل الخدمة تهيئة SEO؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes—basic SEO (meta + sitemap + heading structure). For ranking, we add service pages, content, and links.',
          'تشمل تهيئة SEO الأساسية (meta + sitemap + بنية عناوين). وللتصدر نضيف صفحات خدمات ومحتوى وروابط.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Do you offer support?', 'هل توفر دعم بعد التسليم؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. Maintenance, updates, and performance improvements can be provided monthly.',
          'نعم، يمكن توفير باقات صيانة وتحديثات وتحسينات أداء بشكل شهري.'
         )}
        </p>
       </div>
      </div>
     </section>

     <div className="mt-12">
      <a
       href="/#contact"
       className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
      >
       {t('Contact now', 'تواصل الآن')}
      </a>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 );
};

export default WebDevelopment;
