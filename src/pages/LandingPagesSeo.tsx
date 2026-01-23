import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_NUMBER, buildWebsiteLeadMessage, getWhatsAppLink } from '@/lib/whatsapp';

const LandingPagesSeo = () => {
 const { t } = useLanguage();

 const whatsappMessage = buildWebsiteLeadMessage(
  t(
   "Hi! I came from mugahedmotaz.com and I'd like to request a service.",
   'مرحباً! أنا قادم من موقع mugahedmotaz.com وأرغب بطلب خدمة.'
  )
 );
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
       {t('SEO Landing Pages Built for Ads & Conversions', 'صفحات هبوط SEO جاهزة للإعلانات والتحويل')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
       {t(
        'I build fast, persuasive landing pages focused on value proposition and clear CTAs—with SEO foundations and tracking to increase leads.',
        'أبني صفحات هبوط سريعة ومقنعة، مركزة على عرض القيمة (Value Proposition) وCTA واضح، مع تهيئة SEO وقياس الأداء لزيادة الطلبات.'
       )}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
       <a
        href="/#contact"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
       >
        {t('Request a Landing Page', 'اطلب صفحة هبوط')}
       </a>
       <a
        href={getWhatsAppLink(whatsappMessage, WHATSAPP_NUMBER)}
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
       <h2 className="font-bold text-foreground">{t('Ideal for', 'مناسب لمن؟')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Paid ads (Meta/Google)', 'إعلانات ممولة (Meta/Google)')}</li>
        <li>{t('Local or remote services', 'خدمات محلية أو عن بعد')}</li>
        <li>{t('Digital products or courses', 'منتجات رقمية أو دورات')}</li>
        <li>{t('Businesses that need more leads', 'شركات تريد زيادة طلبات التواصل')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('What’s included', 'ماذا تشمل الصفحة')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Strong hero + clear CTA', 'قسم Hero قوي + CTA واضح')}</li>
        <li>{t('Benefits + social proof', 'مميزات/فوائد + إثبات اجتماعي')}</li>
        <li>{t('FAQ to reduce objections', 'FAQ لتقليل اعتراضات العميل')}</li>
        <li>{t('Speed & performance optimization', 'تحسين سرعة وأداء')}</li>
        <li>{t('Basic SEO setup', 'تهيئة SEO الأساسية')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('Tracking & optimization', 'القياس والتحسين')}</h2>
       <p className="mt-4 text-muted-foreground">
        {t(
         'Conversion tracking for CTA/WhatsApp/Form and iteration to improve conversion rate.',
         'تجهيز تتبع التحويلات (CTA/WhatsApp/Form) ومراجعة نقاط التحسين لرفع معدل التحويل.'
        )}
       </p>
      </div>
     </section>

     <section className="mt-12 rounded-2xl bg-card border border-border p-6">
      <h2 className="text-xl font-bold text-foreground">{t('FAQ', 'أسئلة شائعة')}</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
       <div>
        <h3 className="font-semibold text-foreground">{t('Is it good for ads?', 'هل تصلح الصفحة للإعلانات؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. It’s designed specifically for ad traffic with clear messaging and fast conversion.',
          'نعم، يتم تصميمها خصيصًا للإعلانات مع رسالة واضحة وتحويل سريع.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Can you add a contact form?', 'هل يمكن إضافة نموذج تواصل؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes, and it can be connected to email or a CRM depending on your needs.',
          'نعم، ويمكن ربطه بإرسال بريد فعلي أو CRM حسب احتياجك.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Do you guarantee #1 on Google?', 'هل تضمن الصفحة الأولى في Google؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'No instant guarantees. We build the right foundation (SEO + content) then improve with service pages, links, and ongoing content.',
          'لا يوجد ضمان فوري للترتيب، لكن نجهز الأساس الصحيح (SEO + محتوى) ثم نعمل على صفحات خدمات وروابط ومحتوى مستمر.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Can you improve an existing page?', 'هل يمكن تحسين صفحة موجودة؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. I can rewrite copy and improve design/speed to increase conversions.',
          'نعم، يمكن إعادة كتابة المحتوى وتحسين التصميم والسرعة لرفع التحويل.'
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

export default LandingPagesSeo;
