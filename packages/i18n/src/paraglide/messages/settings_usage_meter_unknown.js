import { getLocale } from '../runtime.js';

const translations = {"ar":"مقياس الاستخدام","bn":"Usage meter","de":"Usage meter","en":"Usage meter","es":"Usage meter","fr":"Usage meter","hi":"Usage meter","id":"Usage meter","pt-BR":"Usage meter","ru":"Usage meter","ur":"Usage meter","zh-CN":"Usage meter"};

export function settings_usage_meter_unknown(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
