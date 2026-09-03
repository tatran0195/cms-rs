import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ تحميل فترة UTC الحالية","bn":"Loading the current UTC period","de":"Loading the current UTC period","en":"Loading the current UTC period","es":"Loading the current UTC period","fr":"Loading the current UTC period","hi":"Loading the current UTC period","id":"Loading the current UTC period","pt-BR":"Loading the current UTC period","ru":"Loading the current UTC period","ur":"Loading the current UTC period","zh-CN":"Loading the current UTC period"};

export function settings_usage_period_loading(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
