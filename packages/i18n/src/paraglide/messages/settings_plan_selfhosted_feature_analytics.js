import { getLocale } from '../runtime.js';

const translations = {"ar":"تحليلات مدمجة","bn":"অন্তর্নির্মিত বিশ্লেষণ","de":"Integrierte Analyse","en":"Built-in analytics","es":"Análisis integrados","fr":"Analyses intégrées","hi":"अंतर्निहित विश्लेषण","id":"Analisis bawaan","pt-BR":"Análise integrada","ru":"Встроенная аналитика","ur":"بلٹ ان اینالیٹکس","zh-CN":"内置分析"};

export function settings_plan_selfhosted_feature_analytics(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
