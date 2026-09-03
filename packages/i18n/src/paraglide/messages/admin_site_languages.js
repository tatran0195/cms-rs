import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغات","bn":"Languages","de":"Languages","en":"Languages","es":"Languages","fr":"Languages","hi":"Languages","id":"Languages","pt-BR":"Languages","ru":"Languages","ur":"Languages","zh-CN":"Languages"};

export function admin_site_languages(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
