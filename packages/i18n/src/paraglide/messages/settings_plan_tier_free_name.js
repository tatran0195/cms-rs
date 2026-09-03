import { getLocale } from '../runtime.js';

const translations = {"ar":"مجانية","bn":"বিনামূল্যে","de":"Kostenlos","en":"Free","es":"Gratis","fr":"Gratuit","hi":"निःशुल्क","id":"Gratis","pt-BR":"Grátis","ru":"Бесплатно","ur":"مفت","zh-CN":"免费"};

export function settings_plan_tier_free_name(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
