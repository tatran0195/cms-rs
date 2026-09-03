import { getLocale } from '../runtime.js';

const translations = {"ar":"البحث والذكاء الاصطناعي","bn":"Search and AI","de":"Search and AI","en":"Search and AI","es":"Search and AI","fr":"Search and AI","hi":"Search and AI","id":"Search and AI","pt-BR":"Search and AI","ru":"Search and AI","ur":"Search and AI","zh-CN":"Search and AI"};

export function settings_usage_group_searchAi(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
