import { getLocale } from '../runtime.js';

const translations = {"ar":"رموز إخراج الذكاء الاصطناعي","bn":"AI output tokens","de":"AI output tokens","en":"AI output tokens","es":"AI output tokens","fr":"AI output tokens","hi":"AI output tokens","id":"AI output tokens","pt-BR":"AI output tokens","ru":"AI output tokens","ur":"AI output tokens","zh-CN":"AI output tokens"};

export function settings_usage_meter_aiOutputToken(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
