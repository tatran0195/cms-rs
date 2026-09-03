import { getLocale } from '../runtime.js';

const translations = {"ar":"أهم الصفحات","bn":"শীর্ষ পাতা","de":"Top-Seiten","en":"Top pages","es":"Páginas principales","fr":"Premières pages","hi":"शीर्ष पृष्ठ","id":"Halaman teratas","pt-BR":"Páginas principais","ru":"Лучшие страницы","ur":"سرفہرست صفحات","zh-CN":"首页"};

export function analytics_section_toppages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
