import { getLocale } from '../runtime.js';

const translations = {"ar":"Cloudflare","bn":"Cloudflare","de":"Cloudflare","en":"Cloudflare","es":"Cloudflare","fr":"Cloudflare","hi":"Cloudflare","id":"Cloudflare","pt-BR":"Cloudflare","ru":"Cloudflare","ur":"Cloudflare","zh-CN":"Cloudflare"};

export function settings_integrations_provider_cloudflare(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
