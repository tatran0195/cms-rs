import { getLocale } from '../runtime.js';

const translations = {"ar":"الجمعة","bn":"শুক্রবার","de":"Freitag","en":"Friday","es":"viernes","fr":"vendredi","hi":"शुक्रवार","id":"Jumat","pt-BR":"Sexta-feira","ru":"пятница","ur":"جمعہ","zh-CN":"周五"};

export function settings_exports_workflow_day_friday(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
