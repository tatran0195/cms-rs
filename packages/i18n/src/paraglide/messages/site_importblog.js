import { getLocale } from '../runtime.js';

const translations = {"ar":"المدونة","bn":"Blog","de":"Blog","en":"Blog","es":"Blog","fr":"Blog","hi":"Blog","id":"Blog","pt-BR":"Blog","ru":"Blog","ur":"Blog","zh-CN":"Blog"};

export function site_importblog(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
