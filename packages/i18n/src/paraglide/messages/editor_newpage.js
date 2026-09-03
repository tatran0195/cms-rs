import { getLocale } from '../runtime.js';

const translations = {"ar":"صفحة جديدة","bn":"নতুন পাতা","de":"Neue Seite","en":"New page","es":"Nueva pagina","fr":"Nouvelle page","hi":"नया पेज","id":"Halaman baru","pt-BR":"Nova página","ru":"Новая страница","ur":"نیا صفحہ","zh-CN":"新页面"};

export function editor_newpage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
