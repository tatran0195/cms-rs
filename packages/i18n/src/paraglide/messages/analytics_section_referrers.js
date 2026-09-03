import { getLocale } from '../runtime.js';

const translations = {"ar":"مصادر الإحالة","bn":"রেফারার","de":"Referenten","en":"Referrers","es":"Referentes","fr":"Référents","hi":"सन्दर्भकर्ता","id":"Referensi","pt-BR":"Referenciadores","ru":"Рефереры","ur":"حوالہ دینے والے","zh-CN":"推荐人"};

export function analytics_section_referrers(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
