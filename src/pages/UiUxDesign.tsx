import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_NUMBER, buildWebsiteLeadMessage, getWhatsAppLink } from '@/lib/whatsapp';

const UiUxDesign = () => {
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
       {t('UI/UX Design That Converts Visitors into Clients', 'تصميم UI/UX يحوّل الزائر إلى عميل')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
       {t(
        'I design clear, attractive interfaces and user experiences based on real user understanding and your business goals—responsive and ready for development.',
        'أصمم واجهات وتجارب استخدام واضحة وجذابة، مبنية على فهم المستخدم وأهداف عملك، مع تصميم متجاوب وتسليم جاهز للتطوير.'
       )}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
       <a
        href="/#contact"
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
       >
        {t('Request UI/UX Design', 'اطلب تصميم واجهة')}
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
       <h2 className="font-bold text-foreground">{t('What’s included', 'ما الذي يشمله التصميم')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Wireframes + user flows', 'Wireframes + User Flows')}</li>
        <li>{t('UI design (colors/typography system)', 'UI Design (نظام ألوان/تايبوجرافي)')}</li>
        <li>{t('Reusable components', 'Components قابلة لإعادة الاستخدام')}</li>
        <li>{t('Responsive design for all devices', 'Responsive Design لكل الأجهزة')}</li>
        <li>{t('Prototype to test before development', 'Prototype للتجربة قبل التطوير')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('Conversion-focused outcomes', 'نتائج تركز على التحويل')}</h2>
       <ul className="mt-4 space-y-2 text-muted-foreground">
        <li>{t('Clear messaging and CTA', 'وضوح في الرسالة وCTA')}</li>
        <li>{t('Smooth UX that reduces friction', 'تجربة سهلة تقلل الإرتباك')}</li>
        <li>{t('A premium look that builds trust', 'تصميم يعطي ثقة واحترافية')}</li>
        <li>{t('Ready for ads and landing pages', 'جاهزية للإعلانات وصفحات الهبوط')}</li>
       </ul>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6">
       <h2 className="font-bold text-foreground">{t('Deliverables', 'المخرجات')}</h2>
       <p className="mt-4 text-muted-foreground">
        {t(
         'Organized design files + a style guide + developer notes to ensure accurate implementation.',
         'ملفات تصميم منظمة + دليل ستايل + ملاحظات للتطوير لضمان تنفيذ مطابق للتصميم.'
        )}
       </p>
      </div>
     </section>

     <section className="mt-12 rounded-2xl bg-card border border-border p-6">
      <h2 className="text-xl font-bold text-foreground">{t('FAQ', 'أسئلة شائعة')}</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
       <div>
        <h3 className="font-semibold text-foreground">{t('Does it include mobile design?', 'هل التصميم يشمل تجربة الهاتف؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. The design is mobile-first, then adapted for larger screens.',
          'نعم، يتم تصميم الواجهات Mobile-first ثم تكييفها لباقي الأحجام.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Can we extend the design later?', 'هل يمكن تطوير التصميم بعد التسليم؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. We can add more screens/flows or evolve it into a design system.',
          'نعم، يمكن إضافة شاشات/تدفقات لاحقًا، أو تحويل التصميم إلى نظام Design System.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Do you offer design + development?', 'هل تقدم تصميم + تطوير؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. I can deliver the full product (design then development).',
          'نعم، يمكن تنفيذ المشروع كاملًا (تصميم ثم تطوير) لتسليم منتج متكامل.'
         )}
        </p>
       </div>
       <div>
        <h3 className="font-semibold text-foreground">{t('Can you improve an existing UI?', 'هل يمكن تحسين تصميم موجود؟')}</h3>
        <p className="mt-2 text-muted-foreground">
         {t(
          'Yes. I can do a UI refresh and improve UX based on your goals.',
          'نعم، يمكن عمل UI Refresh وتحسين تجربة المستخدم بناءً على أهدافك.'
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
       {t('Start now', 'ابدأ الآن')}
      </a>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 );
};

export default UiUxDesign;
