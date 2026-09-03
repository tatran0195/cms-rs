import { getLocale } from '../runtime.js';

const translations = {"ar":"نشط","bn":"সক্রিয়","de":"Aktiv","en":"Active","es":"Activo","fr":"Activité","hi":"सक्रिय","id":"Aktif","pt-BR":"Activo","ru":"Активный","ur":"فعال","zh-CN":"活动"};

export function settings_integrations_status_active(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
