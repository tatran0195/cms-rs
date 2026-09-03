import { getLocale } from '../runtime.js';

const translations = {"ar":"لا. ابدأ بالصفحات التي تحل أول مشكلة للقارئ: البدء السريع والتثبيت والمصادقة والأخطاء الشائعة. اربط الترجمات المتقابلة بـ hreflang، وانشر بقية الصفحات عندما تراجعها.","bn":"Arabic page content","de":"Arabic page content","en":"لا. ابدأ بالصفحات التي تحل أول مشكلة للقارئ: البدء السريع والتثبيت والمصادقة والأخطاء الشائعة. اربط الترجمات المتقابلة بـ hreflang، وانشر بقية الصفحات عندما تراجعها.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_faqtranslationanswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
