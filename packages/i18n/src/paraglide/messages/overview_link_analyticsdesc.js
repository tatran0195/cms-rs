import { getLocale } from '../runtime.js';

const translations = {"ar":"الزيارات وأهم الصفحات وعمليات البحث.","bn":"ট্রাফিক, শীর্ষ পৃষ্ঠা, এবং অনুসন্ধান.","de":"Traffic, Top-Seiten und Suchanfragen.","en":"Traffic, top pages, and searches.","es":"Tráfico, páginas principales y búsquedas.","fr":"Trafic, premières pages et recherches.","hi":"ट्रैफ़िक, शीर्ष पृष्ठ और खोजें।","id":"Lalu lintas, halaman teratas, dan pencarian.","pt-BR":"Tráfego, páginas principais e pesquisas.","ru":"Трафик, топ-страницы и поисковые запросы.","ur":"ٹریفک، سرفہرست صفحات، اور تلاشیں۔","zh-CN":"流量、热门页面和搜索。"};

export function overview_link_analyticsdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
