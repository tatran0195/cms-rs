import { getLocale } from '../runtime.js';

const translations = {"ar":"Backblaze B2","bn":"Backblaze B2","de":"Backblaze B2","en":"Backblaze B2","es":"Backblaze B2","fr":"Backblaze B2","hi":"Backblaze B2","id":"Backblaze B2","pt-BR":"Backblaze B2","ru":"Backblaze B2","ur":"Backblaze B2","zh-CN":"Backblaze B2"};

export function settings_integrations_provider_backblazeb2(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
