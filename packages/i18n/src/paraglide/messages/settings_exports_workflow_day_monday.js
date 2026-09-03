import { getLocale } from '../runtime.js';

const translations = {"ar":"الاثنين","bn":"সোমবার","de":"Montag","en":"Monday","es":"lunes","fr":"Lundi","hi":"सोमवार","id":"Senin","pt-BR":"Segunda-feira","ru":"понедельник","ur":"پیر","zh-CN":"星期一"};

export function settings_exports_workflow_day_monday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
