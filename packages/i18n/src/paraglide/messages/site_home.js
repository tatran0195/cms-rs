import { getLocale } from '../runtime.js';

const translations = {"ar":"الرئيسية","bn":"Home","de":"Home","en":"Home","es":"Home","fr":"Home","hi":"Home","id":"Home","pt-BR":"Home","ru":"Home","ur":"Home","zh-CN":"Home"};

export function site_home(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
