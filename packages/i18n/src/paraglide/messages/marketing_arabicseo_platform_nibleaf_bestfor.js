import { getLocale } from '../runtime.js';

const translations = {"ar":"الفِرق التي تريد الكتابة من المتصفح مع الاحتفاظ بـ Markdown، وتحتاج تجربة عربية وRTL داخل المحرر وموقع القارئ معًا.","bn":"Arabic page content","de":"Arabic page content","en":"الفِرق التي تريد الكتابة من المتصفح مع الاحتفاظ بـ Markdown، وتحتاج تجربة عربية وRTL داخل المحرر وموقع القارئ معًا.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_nibleaf_bestfor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
