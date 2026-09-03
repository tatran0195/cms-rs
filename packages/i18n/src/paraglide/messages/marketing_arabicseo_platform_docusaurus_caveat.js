import { getLocale } from '../runtime.js';

const translations = {"ar":"ليس منصة تحرير مرئي مُدارة؛ المترجمون والكتّاب غير التقنيين يحتاجون عادةً سير عمل Git وأدوات مراجعة إضافية.","bn":"Arabic page content","de":"Arabic page content","en":"ليس منصة تحرير مرئي مُدارة؛ المترجمون والكتّاب غير التقنيين يحتاجون عادةً سير عمل Git وأدوات مراجعة إضافية.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_docusaurus_caveat(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
