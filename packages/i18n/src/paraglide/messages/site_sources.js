import { getLocale } from '../runtime.js';

const translations = {"ar":"المصادر","bn":"Sources","de":"Sources","en":"Sources","es":"Sources","fr":"Sources","hi":"Sources","id":"Sources","pt-BR":"Sources","ru":"Sources","ur":"Sources","zh-CN":"Sources"};

export function site_sources(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
