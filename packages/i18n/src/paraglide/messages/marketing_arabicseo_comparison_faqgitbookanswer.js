import { getLocale } from '../runtime.js';

const translations = {"ar":"لا يمكن إثبات دعم كامل من التوثيق العام الحالي. GitBook يشرح تعريب واجهة الموقع ونشر المحتوى بلغات متعددة، لكنه لا يقدّم في الصفحات المرتبطة ضمانًا صريحًا لكل القوائم والجداول وكتل الشيفرة في RTL؛ اختبر محتوى عربيًا فعليًا قبل القرار.","bn":"Arabic page content","de":"Arabic page content","en":"لا يمكن إثبات دعم كامل من التوثيق العام الحالي. GitBook يشرح تعريب واجهة الموقع ونشر المحتوى بلغات متعددة، لكنه لا يقدّم في الصفحات المرتبطة ضمانًا صريحًا لكل القوائم والجداول وكتل الشيفرة في RTL؛ اختبر محتوى عربيًا فعليًا قبل القرار.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_faqgitbookanswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
