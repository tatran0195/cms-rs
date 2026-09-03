import { getLocale } from '../runtime.js';

const translations = {"ar":"الزيارات خلال 30 يومًا","bn":"Traffic30d","de":"Traffic30d","en":"Traffic30d","es":"Traffic30d","fr":"Traffic30d","hi":"Traffic30d","id":"Traffic30d","pt-BR":"Traffic30d","ru":"Traffic30d","ur":"Traffic30d","zh-CN":"Traffic30d"};

export function admin_site_traffic30d(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
