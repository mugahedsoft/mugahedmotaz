import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_NUMBER = '249900318100';

const WhatsAppFloatingButton = () => {
 const { t } = useLanguage();

 return (
  <a
   href={`https://wa.me/${WHATSAPP_NUMBER}`}
   target="_blank"
   rel="noopener noreferrer"
   aria-label={t('Chat on WhatsApp', 'تواصل عبر واتساب')}
   onClick={() => trackEvent('whatsapp_click', { placement: 'floating_button' })}
   className="fixed bottom-4 ltr:right-4 rtl:left-4 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-accent-foreground shadow-accent hover:bg-accent/90 hover:shadow-lg transition-all"
  >
   <MessageCircle className="w-5 h-5" />
   <span className="text-sm font-semibold">
    {t('WhatsApp', 'واتساب')}
   </span>
  </a>
 );
};

export default WhatsAppFloatingButton;
