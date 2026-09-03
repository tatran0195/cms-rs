import { getLocale } from '../runtime.js';

const translations = {"ar":"التحليلات","bn":"বিশ্লেষণ","de":"Analytik","en":"Analytics","es":"Analítica","fr":"Analyse","hi":"विश्लेषिकी","id":"Analisis","pt-BR":"Análise","ru":"Аналитика","ur":"تجزیات","zh-CN":"分析"};

export function settings_analytics_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
