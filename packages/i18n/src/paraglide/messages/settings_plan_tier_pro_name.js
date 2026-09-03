import { getLocale } from '../runtime.js';

const translations = {"ar":"احترافية","bn":"প্রো","de":"Profi","en":"Pro","es":"profesional","fr":"Pro","hi":"प्रो","id":"Pro","pt-BR":"Pró","ru":"Про","ur":"پرو","zh-CN":"专业版"};

export function settings_plan_tier_pro_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
