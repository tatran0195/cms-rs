import { getLocale } from '../runtime.js';

const translations = {"ar":"Cloudflare R2","bn":"Cloudflare R2","de":"Cloudflare R2","en":"Cloudflare R2","es":"Cloudflare R2","fr":"Cloudflare R2","hi":"Cloudflare R2","id":"Cloudflare R2","pt-BR":"Cloudflare R2","ru":"Cloudflare R2","ur":"Cloudflare R2","zh-CN":"Cloudflare R2"};

export function settings_integrations_provider_cloudflarer2(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
