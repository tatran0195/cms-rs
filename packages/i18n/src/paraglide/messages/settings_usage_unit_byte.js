import { getLocale } from '../runtime.js';

const translations = {"ar":"بايت","bn":"B","de":"B","en":"B","es":"B","fr":"B","hi":"B","id":"B","pt-BR":"B","ru":"B","ur":"B","zh-CN":"B"};

export function settings_usage_unit_byte(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
