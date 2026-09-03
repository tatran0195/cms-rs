import { getLocale } from '../runtime.js';

const translations = {"ar":"تُجمع عبر التحليلات المدمجة دون ملفات تعريف الارتباط.","bn":"বিল্ট-ইন, কুকি-লেস বিশ্লেষণ দ্বারা সংগৃহীত।","de":"Wird von der integrierten, cookielosen Analyse erfasst.","en":"Collected by the built-in, cookie-less analytics.","es":"Recopilado por el análisis integrado sin cookies.","fr":"Collecté par les analyses intégrées sans cookies.","hi":"अंतर्निर्मित, कुकी-रहित विश्लेषण द्वारा एकत्रित किया गया।","id":"Dikumpulkan oleh analitik bawaan tanpa cookie.","pt-BR":"Coletado pela análise integrada e sem cookies.","ru":"Собирается встроенной аналитикой без файлов cookie.","ur":"بلٹ ان، کوکی لیس اینالیٹکس کے ذریعے جمع کیا گیا۔","zh-CN":"由内置的无 cookie 分析收集。"};

export function settings_usage_group_traffic_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
