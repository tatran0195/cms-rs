import { getLocale } from '../runtime.js';

const translations = {"ar":"الصفحة غير موجودة","bn":"পেজ পাওয়া যায়নি","de":"Seite nicht gefunden","en":"Page not found","es":"Página no encontrada","fr":"Page introuvable","hi":"पेज नहीं मिला","id":"Halaman tidak ditemukan","pt-BR":"Página não encontrada","ru":"Страница не найдена","ur":"صفحہ نہیں ملا","zh-CN":"找不到页面"};

export function notfound_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
