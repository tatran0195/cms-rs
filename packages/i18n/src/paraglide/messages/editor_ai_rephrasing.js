import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ إعادة الصياغة…","bn":"রিফ্রেসিং...","de":"Umformulierung…","en":"Rephrasing…","es":"Reformulando…","fr":"Reformuler…","hi":"दोबारा लिखना...","id":"Mengulangi…","pt-BR":"Reformulando…","ru":"Перефразируя…","ur":"دوبارہ بیان کیا جا رہا ہے…","zh-CN":"改写…"};

export function editor_ai_rephrasing(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
