type GtagFn = (...args: any[]) => void;

declare global {
 interface Window {
  dataLayer?: unknown[];
  gtag?: GtagFn;
 }
}

export const initGA4 = (measurementId?: string) => {
 if (!measurementId) return;
 if (typeof window === 'undefined') return;

 const existing = document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`);
 if (existing) return;

 window.dataLayer = window.dataLayer || [];
 window.gtag = window.gtag || ((...args: any[]) => {
  window.dataLayer!.push(args);
 });

 const gtagScript = document.createElement('script');
 gtagScript.async = true;
 gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
 document.head.appendChild(gtagScript);

 const inline = document.createElement('script');
 inline.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', { send_page_view: true });`;
 document.head.appendChild(inline);
};

export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
 if (typeof window === 'undefined') return;
 if (typeof window.gtag !== 'function') return;
 window.gtag('event', eventName, params || {});
};
