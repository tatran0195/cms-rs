import { getLocale } from '../runtime.js';

const translations = {"ar":"توثيقه الرسمي يذكر دعم RTL للعربية والعبرية وإصدار hreflang افتراضيًا ضمن نظام التدويل.","bn":"Arabic page content","de":"Arabic page content","en":"توثيقه الرسمي يذكر دعم RTL للعربية والعبرية وإصدار hreflang افتراضيًا ضمن نظام التدويل.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_platform_docusaurus_arabic(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
