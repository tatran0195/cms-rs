import { getLocale } from '../runtime.js';

const translations = {"ar":"غير متصل","bn":"সংযুক্ত নয়","de":"Nicht verbunden","en":"Not connected","es":"No conectado","fr":"Non connecté","hi":"संबद्ध नहीं","id":"Tidak tersambung","pt-BR":"Não conectado","ru":"Не подключено","ur":"منسلک نہیں","zh-CN":"未连接"};

export function settings_integrations_notconnected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
