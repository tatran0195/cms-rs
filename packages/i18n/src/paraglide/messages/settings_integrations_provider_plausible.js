import { getLocale } from '../runtime.js';

const translations = {"ar":"Plausible","bn":"Plausible","de":"Plausible","en":"Plausible","es":"Plausible","fr":"Plausible","hi":"Plausible","id":"Plausible","pt-BR":"Plausible","ru":"Plausible","ur":"Plausible","zh-CN":"Plausible"};

export function settings_integrations_provider_plausible(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
