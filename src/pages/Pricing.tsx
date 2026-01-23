import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_LINK = 'https://wa.me/249900318100';

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      nameEn: 'Starter Landing Page',
      nameAr: 'صفحة هبوط (أساسية)',
      priceEn: '$149',
      priceAr: '149$ تقريباً',
      descEn: 'A fast, conversion-focused landing page ready for ads and WhatsApp leads.',
      descAr: 'صفحة هبوط سريعة ومركزة على التحويل، جاهزة للإعلانات وطلبات واتساب.',
      featuresEn: [
        '1 page (landing)',
        'Mobile-first responsive',
        'Basic SEO + performance',
        'WhatsApp CTA + tracking-ready',
      ],
      featuresAr: [
        'صفحة واحدة (Landing)',
        'تصميم متجاوب Mobile-first',
        'تهيئة SEO أساسية + أداء',
        'زر واتساب + جاهزية للتتبع',
      ],
      highlight: false,
    },
    {
      nameEn: 'Business Website',
      nameAr: 'موقع شركة (احترافي)',
      priceEn: '$399',
      priceAr: '399$ تقريباً',
      descEn: 'A multi-section website for your brand with modern UI/UX and clear CTAs.',
      descAr: 'موقع احترافي لشركتك مع أقسام متعددة وتجربة مستخدم ممتازة وCTA واضحة.',
      featuresEn: [
        'Up to 5 sections',
        'Modern UI/UX',
        'On-page SEO foundation',
        'Contact form + WhatsApp',
      ],
      featuresAr: [
        'حتى 5 أقسام',
        'UI/UX حديث',
        'أساس SEO داخل الصفحة',
        'نموذج تواصل + واتساب',
      ],
      highlight: true,
    },
    {
      nameEn: 'SEO Landing Page Package',
      nameAr: 'باقة صفحات هبوط SEO',
      priceEn: '$599',
      priceAr: '599$ تقريباً',
      descEn: 'A landing page built for ranking and paid traffic with copy + structure + speed.',
      descAr: 'صفحة هبوط مبنية للتصدر والإعلانات: محتوى + هيكلة + سرعة.',
      featuresEn: [
        'Landing page + FAQ',
        'Keyword-focused structure',
        'Speed & Core Web Vitals',
        'Conversion-focused CTA',
      ],
      featuresAr: [
        'Landing + أسئلة شائعة',
        'هيكلة مبنية على كلمات مفتاحية',
        'سرعة وCore Web Vitals',
        'CTA قوي لرفع التحويل',
      ],
      highlight: false,
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
            <Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              {t('Services', 'الخدمات')}
            </Link>
          </div>

          <header className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('Pricing & Packages', 'الباقات والأسعار')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'Choose a clear package to start fast. You can always upgrade later as your project grows.',
                'اختر باقة واضحة للبدء بسرعة، ويمكنك الترقية لاحقاً حسب نمو مشروعك.'
              )}
            </p>
          </header>

          <section className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.nameEn}
                className={
                  plan.highlight
                    ? 'rounded-2xl bg-card border border-accent/50 p-6 shadow-accent'
                    : 'rounded-2xl bg-card border border-border p-6'
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-bold text-foreground">{t(plan.nameEn, plan.nameAr)}</h2>
                  {plan.highlight ? (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {t('Most Popular', 'الأكثر طلباً')}
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 text-3xl font-extrabold text-foreground">{t(plan.priceEn, plan.priceAr)}</div>
                <p className="mt-3 text-muted-foreground">{t(plan.descEn, plan.descAr)}</p>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {(t(plan.featuresEn.join('|'), plan.featuresAr.join('|'))
                    .split('|')
                    .filter(Boolean) as string[]
                  ).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
                  >
                    {t('Order via WhatsApp', 'اطلب عبر واتساب')}
                  </a>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-2xl bg-secondary border border-border p-6">
            <h2 className="text-xl font-bold text-foreground">{t('How it works', 'كيف نبدأ؟')}</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3 text-muted-foreground">
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="font-semibold text-foreground">{t('1) Message', '1) تواصل')}</div>
                <div className="mt-2 text-sm">{t('Send your idea and examples.', 'أرسل فكرتك وأمثلة تعجبك.')}</div>
              </div>
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="font-semibold text-foreground">{t('2) Confirm', '2) تأكيد')}</div>
                <div className="mt-2 text-sm">{t('We confirm scope, timeline, and price.', 'نحدد المطلوب والمدة والسعر.')}</div>
              </div>
              <div className="rounded-xl bg-background border border-border p-4">
                <div className="font-semibold text-foreground">{t('3) Deliver', '3) تنفيذ')}</div>
                <div className="mt-2 text-sm">{t('You get a fast, polished result.', 'تستلم نتيجة سريعة واحترافية.')}</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
