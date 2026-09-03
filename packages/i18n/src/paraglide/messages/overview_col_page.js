import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحة","bn":"পাতা","de":"Seite","en":"Page","es":"Página","fr":"Pages","hi":"पेज","id":"Halaman","pt-BR":"Página","ru":"Страница","ur":"صفحہ","zh-CN":"页面"};

export function overview_col_page(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
