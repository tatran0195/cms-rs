import { getLocale } from '../runtime.js';

const translations = {"ar":"شريط إعلان","bn":"ব্যানার","de":"Banner","en":"Banner","es":"pancarta","fr":"Bannière","hi":"बैनर","id":"Spanduk","pt-BR":"Bandeira","ru":"Баннер","ur":"بینر","zh-CN":"横幅"};

export function editor_slash_banner_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
