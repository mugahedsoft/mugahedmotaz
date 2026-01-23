export const WHATSAPP_NUMBER = '249900318100';

export const getCurrentPageUrl = () => {
 if (typeof window === 'undefined') return '';
 return window.location.href;
};

export const buildWebsiteLeadMessage = (baseMessage: string) => {
 const url = getCurrentPageUrl();
 if (!url) return baseMessage;
 return `${baseMessage}\n\nPage: ${url}`;
};

export const getWhatsAppLink = (message: string, phoneNumber: string = WHATSAPP_NUMBER) => {
 const encoded = encodeURIComponent(message);
 return `https://wa.me/${phoneNumber}?text=${encoded}`;
};
