import { getLocale } from '../runtime.js';

const translations = {"ar":"Zapier","bn":"Zapier","de":"Zapier","en":"Zapier","es":"Zapier","fr":"Zapier","hi":"Zapier","id":"Zapier","pt-BR":"Zapier","ru":"Zapier","ur":"Zapier","zh-CN":"Zapier"};

export function settings_integrations_provider_zapier(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
