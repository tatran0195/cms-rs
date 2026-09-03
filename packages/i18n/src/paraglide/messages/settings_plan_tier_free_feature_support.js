import { getLocale } from '../runtime.js';

const translations = {"ar":"دعم المجتمع","bn":"সম্প্রদায় সমর্থন","de":"Community-Unterstützung","en":"Community support","es":"Apoyo comunitario","fr":"Soutien communautaire","hi":"सामुदायिक समर्थन","id":"Dukungan komunitas","pt-BR":"Apoio comunitário","ru":"Поддержка сообщества","ur":"کمیونٹی سپورٹ","zh-CN":"社区支持"};

export function settings_plan_tier_free_feature_support(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
