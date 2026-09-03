import { getLocale } from '../runtime.js';

const translations = {"ar":"فرق API التي تريد أداة واحدة لتصميم الواجهة واختبارها ونشر مرجع تفاعلي، لا منصة عامة لوثائق المنتج فقط.","bn":"Arabic page content","de":"Arabic page content","en":"فرق API التي تريد أداة واحدة لتصميم الواجهة واختبارها ونشر مرجع تفاعلي، لا منصة عامة لوثائق المنتج فقط.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_apidog_bestfor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
