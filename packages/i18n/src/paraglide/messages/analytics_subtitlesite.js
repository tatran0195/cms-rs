import { getLocale } from '../runtime.js';

const translations = {"ar":"نشاط الزيارات والبحث على موقعك المنشور.","bn":"আপনার প্রকাশিত সাইটে ট্রাফিক এবং অনুসন্ধান কার্যকলাপ.","de":"Traffic und Suchaktivität auf Ihrer veröffentlichten Website.","en":"Traffic and search activity on your published site.","es":"Tráfico y actividad de búsqueda en su sitio publicado.","fr":"Activité de trafic et de recherche sur votre site publié.","hi":"आपकी प्रकाशित साइट पर ट्रैफ़िक और खोज गतिविधि।","id":"Lalu lintas dan aktivitas penelusuran di situs yang Anda terbitkan.","pt-BR":"Tráfego e atividade de pesquisa em seu site publicado.","ru":"Трафик и поисковая активность на опубликованном сайте.","ur":"آپ کی شائع شدہ سائٹ پر ٹریفک اور تلاش کی سرگرمی۔","zh-CN":"您发布的网站上的流量和搜索活动。"};

export function analytics_subtitlesite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
