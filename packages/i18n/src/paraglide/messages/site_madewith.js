import { getLocale } from '../runtime.js';

const translations = {"ar":"صُنع باستخدام","bn":"Made with","de":"Made with","en":"Made with","es":"Made with","fr":"Made with","hi":"Made with","id":"Made with","pt-BR":"Made with","ru":"Made with","ur":"Made with","zh-CN":"Made with"};

export function site_madewith(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
