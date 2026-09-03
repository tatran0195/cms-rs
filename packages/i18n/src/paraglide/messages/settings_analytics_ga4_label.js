import { getLocale } from '../runtime.js';

const translations = {"ar":"Google Analytics 4","bn":"Google বিশ্লেষণ 4","de":"Google Analytics 4","en":"Google Analytics 4","es":"Google Análisis 4","fr":"Google Analyse 4","hi":"Google एनालिटिक्स 4","id":"Google Analisis 4","pt-BR":"Google Análise 4","ru":"Google Аналитика 4","ur":"Google تجزیات 4","zh-CN":"Google 分析 4"};

export function settings_analytics_ga4_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
