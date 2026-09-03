import { getLocale } from '../runtime.js';

const translations = {"ar":"في هذه الصفحة","bn":"এই পৃষ্ঠায়","de":"Auf dieser Seite","en":"On this page","es":"En esta página","fr":"Sur cette page","hi":"इस पेज पर","id":"Di halaman ini","pt-BR":"Nesta página","ru":"На этой странице","ur":"اس صفحہ پر","zh-CN":"在此页面上"};

export function site_onthispage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
