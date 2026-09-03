import { getLocale } from '../runtime.js';

const translations = {"ar":"التحكم بالمصدر","bn":"উৎস নিয়ন্ত্রণ","de":"Quellcodeverwaltung","en":"Source control","es":"Control de origen","fr":"Contrôle des sources","hi":"स्रोत नियंत्रण","id":"Kontrol sumber","pt-BR":"Controlo da fonte","ru":"Контроль источника","ur":"ماخذ کنٹرول","zh-CN":"源控件"};

export function settings_integrations_category_sourcecontrol(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
