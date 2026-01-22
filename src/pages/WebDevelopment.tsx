import { Link } from "react-router-dom";

const WebDevelopment = () => {
 return (
  <main className="min-h-screen bg-background">
   <div className="site-container py-16 sm:py-20">
    <div className="mb-8">
     <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
      الرجوع للرئيسية
     </Link>
    </div>

    <header className="max-w-3xl">
     <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
      تطوير مواقع وتطبيقات ويب احترافية
     </h1>
     <p className="mt-4 text-lg text-muted-foreground">
      أبني مواقع سريعة وآمنة وقابلة للتوسع، من صفحات الشركات والمتاجر إلى لوحات التحكم وتطبيقات SaaS، مع تجربة مستخدم ممتازة وتجهيزات SEO.
     </p>
     <div className="mt-8 flex flex-wrap gap-3">
      <a
       href="/#contact"
       className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
      >
       اطلب عرض سعر
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
      <h2 className="font-bold text-foreground">ماذا ستحصل عليه</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>موقع سريع ومتجاوب لكل الأجهزة</li>
       <li>واجهة مستخدم نظيفة وحديثة</li>
       <li>تهيئة أساسية لمحركات البحث (SEO)</li>
       <li>حماية وأفضل ممارسات للكود</li>
       <li>قابلية توسّع وإضافة مزايا لاحقًا</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">خدمات التطوير</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>مواقع شركات وصفحات تعريفية</li>
       <li>متاجر إلكترونية وتجارب شراء</li>
       <li>لوحات تحكم Dashboards</li>
       <li>تطبيقات ويب Web Apps</li>
       <li>منصات SaaS</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">التقنيات</h2>
      <p className="mt-4 text-muted-foreground">
       React, TypeScript, TailwindCSS, API Integration، مع بناء نظيف وتجهيز للقياس والتحسين.
      </p>
     </div>
    </section>

    <section className="mt-12 rounded-2xl bg-card border border-border p-6">
     <h2 className="text-xl font-bold text-foreground">أسئلة شائعة</h2>
     <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
       <h3 className="font-semibold text-foreground">كم يستغرق تنفيذ الموقع؟</h3>
       <p className="mt-2 text-muted-foreground">
        يعتمد على حجم المشروع. غالبًا المواقع التعريفية من 7 إلى 14 يوم، والمشاريع الأكبر يتم تقسيمها لمراحل واضحة.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل سيكون الموقع سريعًا على الهاتف؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يتم بناء الموقع بأفضل ممارسات الأداء وCore Web Vitals مع تصميم متجاوب.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل تشمل الخدمة تهيئة SEO؟</h3>
       <p className="mt-2 text-muted-foreground">
        تشمل تهيئة SEO الأساسية (meta + sitemap + بنية عناوين). وللتصدر نضيف صفحات خدمات ومحتوى وروابط.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل توفر دعم بعد التسليم؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يمكن توفير باقات صيانة وتحديثات وتحسينات أداء بشكل شهري.
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

export default WebDevelopment;
