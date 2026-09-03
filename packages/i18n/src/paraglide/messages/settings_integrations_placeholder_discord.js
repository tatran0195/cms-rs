import { getLocale } from '../runtime.js';

const translations = {"ar":"https://discord.com/api/webhooks/…","bn":"https://discord.com/api/webhooks/…","de":"https://discord.com/api/webhooks/…","en":"https://discord.com/api/webhooks/…","es":"https://discord.com/api/webhooks/…","fr":"https://discord.com/api/webhooks/…","hi":"https://discord.com/api/webhooks/…","id":"https://discord.com/api/webhooks/…","pt-BR":"https://discord.com/api/webhooks/…","ru":"https://discord.com/api/webhooks/…","ur":"https://discord.com/api/webhooks/…","zh-CN":"https://discord.com/api/webhooks/…"};

export function settings_integrations_placeholder_discord(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
