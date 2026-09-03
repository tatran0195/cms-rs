import { getLocale } from '../runtime.js';

const translations = {"ar":"تتبّع Google Analytics 4 وPlausible لموقعك المنشور.","bn":"আপনার প্রকাশিত সাইটের জন্য Google Analytics 4 এবং Plausible ট্র্যাকিং।","de":"Google Analytics 4 und Plausible-Tracking für Ihre veröffentlichte Website.","en":"Google Analytics 4 and Plausible tracking for your published site.","es":"Seguimiento de Google Analytics 4 y Plausible para su sitio publicado.","fr":"Suivi Google Analytics 4 et Plausible pour votre site publié.","hi":"आपकी प्रकाशित साइट के लिए Google Analytics 4 और Plausible ट्रैकिंग।","id":"Pelacakan Google Analytics 4 dan Plausible untuk situs yang Anda terbitkan.","pt-BR":"Google Analytics 4 e rastreamento Plausible para o seu site publicado.","ru":"Отслеживание Google Analytics 4 и Plausible для опубликованного сайта.","ur":"آپ کی شائع کردہ سائٹ کے لیے Google Analytics 4 اور Plausible ٹریکنگ۔","zh-CN":"Google Analytics 4 and Plausible tracking for your published site. 谷歌分析4和Plausible 追踪您的已出版网站."};

export function settings_integrations_analytics_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
