import { getLocale } from '../runtime.js';

const translations = {"ar":"رموز إدخال الذكاء الاصطناعي","bn":"AI input tokens","de":"AI input tokens","en":"AI input tokens","es":"AI input tokens","fr":"AI input tokens","hi":"AI input tokens","id":"AI input tokens","pt-BR":"AI input tokens","ru":"AI input tokens","ur":"AI input tokens","zh-CN":"AI input tokens"};

export function settings_usage_meter_aiInputToken(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
