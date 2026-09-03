import { getLocale } from '../runtime.js';

const translations = {"ar":"المحتوى المفهرس","bn":"Indexed content","de":"Indexed content","en":"Indexed content","es":"Indexed content","fr":"Indexed content","hi":"Indexed content","id":"Indexed content","pt-BR":"Indexed content","ru":"Indexed content","ur":"Indexed content","zh-CN":"Indexed content"};

export function settings_usage_meter_indexedContent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
