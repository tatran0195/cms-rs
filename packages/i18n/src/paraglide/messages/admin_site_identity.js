import { getLocale } from '../runtime.js';

const translations = {"ar":"هوية الموقع","bn":"Identity","de":"Identity","en":"Identity","es":"Identity","fr":"Identity","hi":"Identity","id":"Identity","pt-BR":"Identity","ru":"Identity","ur":"Identity","zh-CN":"Identity"};

export function admin_site_identity(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
