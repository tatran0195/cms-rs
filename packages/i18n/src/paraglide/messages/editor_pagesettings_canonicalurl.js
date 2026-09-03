import { getLocale } from '../runtime.js';

const translations = {"ar":"الرابط الأساسي (Canonical)","bn":"ক্যানোনিকাল URL","de":"Kanonische URL","en":"Canonical URL","es":"URL canónica","fr":"URL canonique","hi":"कैनोनिकल यूआरएल","id":"URL kanonik","pt-BR":"URL canônico","ru":"Канонический URL-адрес","ur":"کیننیکل URL","zh-CN":"规范网址"};

export function editor_pagesettings_canonicalurl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
