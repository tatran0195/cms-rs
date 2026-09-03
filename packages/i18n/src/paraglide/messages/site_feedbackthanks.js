import { getLocale } from '../runtime.js';

const translations = {"ar":"شكرًا على الملاحظة.","bn":"প্রতিক্রিয়া জন্য ধন্যবাদ.","de":"Danke für das Feedback.","en":"Thanks for the feedback.","es":"Gracias por los comentarios.","fr":"Merci pour les commentaires.","hi":"प्रतिक्रिया के लिए धन्यवाद.","id":"Terima kasih atas tanggapannya.","pt-BR":"Obrigado pelo feedback.","ru":"Спасибо за отзыв.","ur":"رائے کے لیے شکریہ","zh-CN":"感谢您的反馈。"};

export function site_feedbackthanks(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
