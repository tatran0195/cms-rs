import { getLocale } from '../runtime.js';

const translations = {"ar":"Maxio","bn":"Maxio","de":"Maxio","en":"Maxio","es":"Maxio","fr":"Maxio","hi":"Maxio","id":"Maxio","pt-BR":"Maxio","ru":"Maxio","ur":"Maxio","zh-CN":"Maxio"};

export function settings_integrations_provider_maxio(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
