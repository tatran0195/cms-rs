import { getLocale } from '../runtime.js';

const translations = {"ar":"Postmark","bn":"Postmark","de":"Postmark","en":"Postmark","es":"Postmark","fr":"Postmark","hi":"Postmark","id":"Postmark","pt-BR":"Postmark","ru":"Postmark","ur":"Postmark","zh-CN":"Postmark"};

export function settings_integrations_provider_postmark(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
