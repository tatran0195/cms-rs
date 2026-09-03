import { getLocale } from '../runtime.js';

const translations = {"ar":"نطاقات مخصصة وتسليم عالمي سريع","bn":"কাস্টম ডোমেন এবং দ্রুত বিশ্বব্যাপী বিতরণ","de":"Benutzerdefinierte Domains und schnelle globale Lieferung","en":"Custom domains and fast global delivery","es":"Dominios personalizados y entrega global rápida","fr":"Domaines personnalisés et livraison mondiale rapide","hi":"कस्टम डोमेन और तेज़ वैश्विक डिलीवरी","id":"Domain khusus dan pengiriman global yang cepat","pt-BR":"Domínios personalizados e entrega global rápida","ru":"Пользовательские домены и быстрая доставка по всему миру","ur":"حسب ضرورت ڈومینز اور تیز رفتار عالمی ترسیل","zh-CN":"自定义域和快速的全球交付"};

export function auth_brand_domains(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
