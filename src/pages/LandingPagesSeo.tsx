import { Link } from "react-router-dom";

const LandingPagesSeo = () => {
 return (
  <main className="min-h-screen bg-background">
   <div className="site-container py-16 sm:py-20">
    <div className="mb-8">
     <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
      الرجوع للرئيسية
     </Link>
    </div>

    <header className="max-w-3xl">
     <h1 className="text-3xl sm:text-4xl font-bold text-foreground">صفحات هبوط SEO جاهزة للإعلانات والتحويل</h1>
     <p className="mt-4 text-lg text-muted-foreground">
      أبني صفحات هبوط سريعة ومقنعة، مركزة على عرض القيمة (Value Proposition) وCTA واضح، مع تهيئة SEO وقياس الأداء لزيادة الطلبات.
     </p>
     <div className="mt-8 flex flex-wrap gap-3">
      <a
       href="/#contact"
       className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
      >
       اطلب صفحة هبوط
      </a>
      <a
       href="https://wa.me/249900318100"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
      >
       واتساب
      </a>
     </div>
    </header>

    <section className="mt-12 grid gap-6 lg:grid-cols-3">
     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">مناسب لمن؟</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>إعلانات ممولة (Meta/Google)</li>
       <li>خدمات محلية أو عن بعد</li>
       <li>منتجات رقمية أو دورات</li>
       <li>شركات تريد زيادة طلبات التواصل</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">ماذا تشمل الصفحة</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>قسم Hero قوي + CTA واضح</li>
       <li>مميزات/فوائد + إثبات اجتماعي</li>
       <li>FAQ لتقليل اعتراضات العميل</li>
       <li>تحسين سرعة وأداء</li>
       <li>تهيئة SEO الأساسية</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">القياس والتحسين</h2>
      <p className="mt-4 text-muted-foreground">
       تجهيز تتبع التحويلات (CTA/WhatsApp/Form) ومراجعة نقاط التحسين لرفع معدل التحويل.
      </p>
     </div>
    </section>

    <section className="mt-12 rounded-2xl bg-card border border-border p-6">
     <h2 className="text-xl font-bold text-foreground">أسئلة شائعة</h2>
     <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
       <h3 className="font-semibold text-foreground">هل تصلح الصفحة للإعلانات؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يتم تصميمها خصيصًا للإعلانات مع رسالة واضحة وتحويل سريع.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل يمكن إضافة نموذج تواصل؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، ويمكن ربطه بإرسال بريد فعلي أو CRM حسب احتياجك.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل تضمن الصفحة الأولى في Google؟</h3>
       <p className="mt-2 text-muted-foreground">
        لا يوجد ضمان فوري للترتيب، لكن نجهز الأساس الصحيح (SEO + محتوى) ثم نعمل على صفحات خدمات وروابط ومحتوى مستمر.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل يمكن تحسين صفحة موجودة؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يمكن إعادة كتابة المحتوى وتحسين التصميم والسرعة لرفع التحويل.
       </p>
      </div>
     </div>
    </section>

    <div className="mt-12">
     <a
      href="/#contact"
      className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
     >
      تواصل الآن
     </a>
    </div>
   </div>
  </main>
 );
};

export default LandingPagesSeo;
