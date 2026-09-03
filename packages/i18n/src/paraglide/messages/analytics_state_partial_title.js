import { getLocale } from '../runtime.js';

const translations = {"ar":"بعض بيانات التحليلات غير مكتملة","bn":"Some analytics are incomplete","de":"Some analytics are incomplete","en":"Some analytics are incomplete","es":"Some analytics are incomplete","fr":"Some analytics are incomplete","hi":"Some analytics are incomplete","id":"Some analytics are incomplete","pt-BR":"Some analytics are incomplete","ru":"Some analytics are incomplete","ur":"Some analytics are incomplete","zh-CN":"Some analytics are incomplete"};

export function analytics_state_partial_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
