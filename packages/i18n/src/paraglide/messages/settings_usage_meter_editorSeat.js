import { getLocale } from '../runtime.js';

const translations = {"ar":"مقاعد المحررين","bn":"Editor seats","de":"Editor seats","en":"Editor seats","es":"Editor seats","fr":"Editor seats","hi":"Editor seats","id":"Editor seats","pt-BR":"Editor seats","ru":"Editor seats","ur":"Editor seats","zh-CN":"Editor seats"};

export function settings_usage_meter_editorSeat(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
