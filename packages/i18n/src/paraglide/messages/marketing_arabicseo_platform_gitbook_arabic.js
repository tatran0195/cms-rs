import { getLocale } from '../runtime.js';

const translations = {"ar":"توثّق GitBook تعريب واجهة الموقع ونشر اللغات كنسخ يختار بينها القارئ، لكن صفحاتها الحالية لا تقدّم وعدًا صريحًا بتوافق كل مكوّن مع RTL.","bn":"Arabic page content","de":"Arabic page content","en":"توثّق GitBook تعريب واجهة الموقع ونشر اللغات كنسخ يختار بينها القارئ، لكن صفحاتها الحالية لا تقدّم وعدًا صريحًا بتوافق كل مكوّن مع RTL.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_gitbook_arabic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
