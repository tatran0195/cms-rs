import { getLocale } from '../runtime.js';

const translations = {"ar":"إليك","bn":"আপনি","de":"Du","en":"you","es":"tu","fr":"vous","hi":"आप","id":"kamu","pt-BR":"você","ru":"ты","ur":"آپ","zh-CN":"你"};

export function settings_notifications_youfallback(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
