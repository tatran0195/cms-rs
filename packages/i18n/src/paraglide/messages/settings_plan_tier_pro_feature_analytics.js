import { getLocale } from '../runtime.js';

const translations = {"ar":"تحليلات متقدّمة","bn":"উন্নত বিশ্লেষণ","de":"Erweiterte Analysen","en":"Advanced analytics","es":"Análisis avanzado","fr":"Analyses avancées","hi":"उन्नत विश्लेषण","id":"Analisis tingkat lanjut","pt-BR":"Análise avançada","ru":"Расширенная аналитика","ur":"اعلی درجے کے تجزیات","zh-CN":"高级分析"};

export function settings_plan_tier_pro_feature_analytics(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
