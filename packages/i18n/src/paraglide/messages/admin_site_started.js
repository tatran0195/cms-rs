import { getLocale } from '../runtime.js';

const translations = {"ar":"بدأت","bn":"Started","de":"Started","en":"Started","es":"Started","fr":"Started","hi":"Started","id":"Started","pt-BR":"Started","ru":"Started","ur":"Started","zh-CN":"Started"};

export function admin_site_started(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
