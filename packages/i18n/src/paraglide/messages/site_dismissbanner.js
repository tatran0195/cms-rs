import { getLocale } from '../runtime.js';

const translations = {"ar":"إغلاق الشريط","bn":"ব্যানার খারিজ করুন","de":"Banner schließen","en":"Dismiss banner","es":"Descartar banner","fr":"Ignorer la bannière","hi":"बैनर खारिज करें","id":"Tutup spanduk","pt-BR":"Dispensar faixa","ru":"Закрыть баннер","ur":"بینر برخاست کریں۔","zh-CN":"关闭横幅"};

export function site_dismissbanner(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
