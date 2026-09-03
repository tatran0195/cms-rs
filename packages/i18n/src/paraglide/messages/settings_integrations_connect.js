import { getLocale } from '../runtime.js';

const translations = {"ar":"ربط","bn":"সংযুক্ত করুন","de":"Verbinden","en":"Connect","es":"Conectar","fr":"Connecter","hi":"कनेक्ट करें","id":"Sambung","pt-BR":"Conectar","ru":"Подключить","ur":"منسلک کریں","zh-CN":"连接"};

export function settings_integrations_connect(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
