import { getLocale } from '../runtime.js';

const translations = {"ar":"مفعّلة","bn":"সক্রিয়","de":"Aktiviert","en":"Enabled","es":"Activado","fr":"Activé","hi":"सक्षम","id":"Aktif","pt-BR":"Ativado","ru":"Включено","ur":"فعال","zh-CN":"已启用"};

export function settings_search_aianswers_enabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
