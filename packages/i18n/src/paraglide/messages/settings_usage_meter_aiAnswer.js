import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابات الذكاء الاصطناعي","bn":"AI answers","de":"AI answers","en":"AI answers","es":"AI answers","fr":"AI answers","hi":"AI answers","id":"AI answers","pt-BR":"AI answers","ru":"AI answers","ur":"AI answers","zh-CN":"AI answers"};

export function settings_usage_meter_aiAnswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
