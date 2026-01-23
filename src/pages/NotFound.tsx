import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background">
      <div className="site-container py-24 sm:py-28">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-card">
          <div className="text-center">
            <div className="text-6xl sm:text-7xl font-extrabold text-accent">404</div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
              {t('Page Not Found', 'الصفحة غير موجودة')}
            </h1>
            <p className="mt-3 text-muted-foreground">
              {t(
                "The page you're looking for doesn't exist or has been moved.",
                'الرابط الذي أدخلته غير صحيح أو تم نقل الصفحة.'
              )}
            </p>

            <div className="mt-6 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{t('Tried URL:', 'الرابط الذي تم إدخاله:')}</span>{' '}
              <span className="break-all">{location.pathname}</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Link to="/">{t('Back to Home', 'الرجوع للرئيسية')}</Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto font-semibold">
                <a href="/#contact">{t('Contact Me', 'تواصل معي')}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
