import { getLocale } from '../runtime.js';

const translations = {"ar":"التحليلات","bn":"অ্যানালিটিক্স","de":"Analysen","en":"Analytics","es":"Estadísticas","fr":"Analyse","hi":"विश्लेषण","id":"Analitik","pt-BR":"Análise","ru":"Аналитика","ur":"تجزیات","zh-CN":"分析"};

export function settings_integrations_category_analytics(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
