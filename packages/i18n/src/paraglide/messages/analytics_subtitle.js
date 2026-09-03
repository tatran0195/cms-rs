import { getLocale } from '../runtime.js';

const translations = {"ar":"نشاط الزيارات والبحث عبر جميع مواقع التوثيق الخاصة بك.","bn":"আপনার সমস্ত ডকুমেন্টেশন সাইট জুড়ে ট্রাফিক এবং অনুসন্ধান কার্যকলাপ.","de":"Traffic- und Suchaktivitäten auf allen Ihren Dokumentationsseiten.","en":"Traffic and search activity across all your documentation sites.","es":"Tráfico y actividad de búsqueda en todos sus sitios de documentación.","fr":"Activité de trafic et de recherche sur tous vos sites de documentation.","hi":"आपकी सभी दस्तावेज़ साइटों पर ट्रैफ़िक और खोज गतिविधि।","id":"Lalu lintas dan aktivitas pencarian di seluruh situs dokumentasi Anda.","pt-BR":"Tráfego e atividade de pesquisa em todos os seus sites de documentação.","ru":"Трафик и поисковая активность на всех ваших сайтах с документацией.","ur":"آپ کی تمام دستاویزات کی سائٹس پر ٹریفک اور تلاش کی سرگرمی۔","zh-CN":"所有文档站点的流量和搜索活动。"};

export function analytics_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
