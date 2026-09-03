import { getLocale } from '../runtime.js';

const translations = {"ar":"ابدأ بـ Nibleaf إذا كانت أولوية الفريق محررًا بصريًا وMarkdown ودعم RTL في دورة العمل كاملة. جرّب صفحة فعلية قبل نقل المحتوى.","bn":"Arabic page content","de":"Arabic page content","en":"ابدأ بـ Nibleaf إذا كانت أولوية الفريق محررًا بصريًا وMarkdown ودعم RTL في دورة العمل كاملة. جرّب صفحة فعلية قبل نقل المحتوى.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_recommendationproductbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
