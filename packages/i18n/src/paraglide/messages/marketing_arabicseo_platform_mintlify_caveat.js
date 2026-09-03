import { getLocale } from '../runtime.js';

const translations = {"ar":"المنصة الأساسية مُدارة ومغلقة المصدر؛ خيار Enterprise للاستضافة الذاتية يخص الواجهة المخصصة بينما تبقى خدمات المحتوى والبحث والذكاء الاصطناعي مُدارة.","bn":"Arabic page content","de":"Arabic page content","en":"المنصة الأساسية مُدارة ومغلقة المصدر؛ خيار Enterprise للاستضافة الذاتية يخص الواجهة المخصصة بينما تبقى خدمات المحتوى والبحث والذكاء الاصطناعي مُدارة.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_mintlify_caveat(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
