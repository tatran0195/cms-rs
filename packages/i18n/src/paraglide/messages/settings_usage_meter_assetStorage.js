import { getLocale } from '../runtime.js';

const translations = {"ar":"تخزين الملفات","bn":"Asset storage","de":"Asset storage","en":"Asset storage","es":"Asset storage","fr":"Asset storage","hi":"Asset storage","id":"Asset storage","pt-BR":"Asset storage","ru":"Asset storage","ur":"Asset storage","zh-CN":"Asset storage"};

export function settings_usage_meter_assetStorage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
