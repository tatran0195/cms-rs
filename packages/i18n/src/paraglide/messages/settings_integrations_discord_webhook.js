import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط الـ Webhook","bn":"ওয়েবহুক URL","de":"Webhook-URL","en":"Webhook URL","es":"URL del webhook","fr":"URL Webhook","hi":"वेबहुक यूआरएल","id":"URL Webhook","pt-BR":"URL do Webhook","ru":"Webcook URL","ur":"ویب ہک URL","zh-CN":"Webhook 網址"};

export function settings_integrations_discord_webhook(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
