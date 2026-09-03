import { getLocale } from '../runtime.js';

const translations = {"ar":"Discord","bn":"Discord","de":"Discord","en":"Discord","es":"Discord","fr":"Discord","hi":"Discord","id":"Discord","pt-BR":"Discord","ru":"Discord","ur":"Discord","zh-CN":"Discord"};

export function settings_integrations_provider_discord(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
