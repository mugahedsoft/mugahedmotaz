import { Link } from "react-router-dom";

const UiUxDesign = () => {
 return (
  <main className="min-h-screen bg-background">
   <div className="site-container py-16 sm:py-20">
    <div className="mb-8">
     <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
      الرجوع للرئيسية
     </Link>
    </div>

    <header className="max-w-3xl">
     <h1 className="text-3xl sm:text-4xl font-bold text-foreground">تصميم UI/UX يحوّل الزائر إلى عميل</h1>
     <p className="mt-4 text-lg text-muted-foreground">
      أصمم واجهات وتجارب استخدام واضحة وجذابة، مبنية على فهم المستخدم وأهداف عملك، مع تصميم متجاوب وتسليم جاهز للتطوير.
     </p>
     <div className="mt-8 flex flex-wrap gap-3">
      <a
       href="/#contact"
       className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
      >
       اطلب تصميم واجهة
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
      <h2 className="font-bold text-foreground">ما الذي يشمله التصميم</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>Wireframes + User Flows</li>
       <li>UI Design (نظام ألوان/تايبوجرافي)</li>
       <li>Components قابلة لإعادة الاستخدام</li>
       <li>Responsive Design لكل الأجهزة</li>
       <li>Prototype للتجربة قبل التطوير</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">نتائج تركز على التحويل</h2>
      <ul className="mt-4 space-y-2 text-muted-foreground">
       <li>وضوح في الرسالة وCTA</li>
       <li>تجربة سهلة تقلل الإرتباك</li>
       <li>تصميم يعطي ثقة واحترافية</li>
       <li>جاهزية للإعلانات وصفحات الهبوط</li>
      </ul>
     </div>

     <div className="rounded-2xl bg-card border border-border p-6">
      <h2 className="font-bold text-foreground">المخرجات</h2>
      <p className="mt-4 text-muted-foreground">
       ملفات تصميم منظمة + دليل ستايل + ملاحظات للتطوير لضمان تنفيذ مطابق للتصميم.
      </p>
     </div>
    </section>

    <section className="mt-12 rounded-2xl bg-card border border-border p-6">
     <h2 className="text-xl font-bold text-foreground">أسئلة شائعة</h2>
     <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
       <h3 className="font-semibold text-foreground">هل التصميم يشمل تجربة الهاتف؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يتم تصميم الواجهات Mobile-first ثم تكييفها لباقي الأحجام.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل يمكن تطوير التصميم بعد التسليم؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يمكن إضافة شاشات/تدفقات لاحقًا، أو تحويل التصميم إلى نظام Design System.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل تقدم تصميم + تطوير؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يمكن تنفيذ المشروع كاملًا (تصميم ثم تطوير) لتسليم منتج متكامل.
       </p>
      </div>
      <div>
       <h3 className="font-semibold text-foreground">هل يمكن تحسين تصميم موجود؟</h3>
       <p className="mt-2 text-muted-foreground">
        نعم، يمكن عمل UI Refresh وتحسين تجربة المستخدم بناءً على أهدافك.
       </p>
      </div>
     </div>
    </section>

    <div className="mt-12">
     <a
      href="/#contact"
      className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
     >
      ابدأ الآن
     </a>
    </div>
   </div>
  </main>
 );
};

export default UiUxDesign;
