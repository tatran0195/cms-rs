import { getLocale } from '../runtime.js';

const translations = {"ar":"صفحة","bn":"পৃষ্ঠা","de":"Seite","en":"page","es":"página","fr":"page","hi":"पेज","id":"halaman","pt-BR":"página","ru":"страница","ur":"صفحہ","zh-CN":"页面"};

export function site_changelogpage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
