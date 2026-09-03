import { getLocale } from '../runtime.js';

const translations = {"ar":"عندما تحتاج العربية إلى تجربة كاملة في المحرر والقارئ والبحث، لا مجرد محاذاة فقرة.","bn":"Arabic page content","de":"Arabic page content","en":"عندما تحتاج العربية إلى تجربة كاملة في المحرر والقارئ والبحث، لا مجرد محاذاة فقرة.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_landing_fittwo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
