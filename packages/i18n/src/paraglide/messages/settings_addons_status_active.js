import { getLocale } from '../runtime.js';

const translations = {"ar":"نشطة","bn":"সক্রিয়","de":"Aktiv","en":"Active","es":"Activo","fr":"Actif","hi":"सक्रिय","id":"Aktif","pt-BR":"Ativo","ru":"Активно","ur":"فعال","zh-CN":"已启用"};

export function settings_addons_status_active(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
