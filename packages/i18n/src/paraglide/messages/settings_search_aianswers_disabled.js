import { getLocale } from '../runtime.js';

const translations = {"ar":"معطّلة","bn":"নিষ্ক্রিয়","de":"Deaktiviert","en":"Disabled","es":"Desactivado","fr":"Désactivé","hi":"अक्षम","id":"Nonaktif","pt-BR":"Desativado","ru":"Отключено","ur":"غیر فعال","zh-CN":"已禁用"};

export function settings_search_aianswers_disabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
