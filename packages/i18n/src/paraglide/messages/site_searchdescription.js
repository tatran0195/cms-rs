import { getLocale } from '../runtime.js';

const translations = {"ar":"بحث نصي كامل وتقريبي عبر هذا الموقع.","bn":"এই সাইট জুড়ে পূর্ণ-পাঠ্য এবং অস্পষ্ট অনুসন্ধান।","de":"Volltext- und Fuzzy-Suche auf dieser Website.","en":"Full-text and fuzzy search across this site.","es":"Búsqueda de texto completo y difusa en este sitio.","fr":"Recherche en texte intégral et floue sur ce site.","hi":"इस साइट पर पूर्ण-पाठ और अस्पष्ट खोज।","id":"Pencarian teks lengkap dan fuzzy di situs ini.","pt-BR":"Pesquisa de texto completo e difusa neste site.","ru":"Полнотекстовый и нечеткий поиск по этому сайту.","ur":"اس سائٹ پر مکمل متن اور مبہم تلاش۔","zh-CN":"本网站的全文搜索和模糊搜索。"};

export function site_searchdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
