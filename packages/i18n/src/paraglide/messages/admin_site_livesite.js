import { getLocale } from '../runtime.js';

const translations = {"ar":"الموقع المنشور","bn":"Live Site","de":"Live Site","en":"Live Site","es":"Live Site","fr":"Live Site","hi":"Live Site","id":"Live Site","pt-BR":"Live Site","ru":"Live Site","ur":"Live Site","zh-CN":"Live Site"};

export function admin_site_livesite(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
