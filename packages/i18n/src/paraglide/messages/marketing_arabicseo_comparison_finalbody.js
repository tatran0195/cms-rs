import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ مشروعًا مجانيًا في Nibleaf، وانشر صفحة اختبار مختلطة الاتجاه، ثم قارنها بالمنصة التي تستخدمها اليوم. لا تحتاج بطاقة دفع.","bn":"Arabic page content","de":"Arabic page content","en":"أنشئ مشروعًا مجانيًا في Nibleaf، وانشر صفحة اختبار مختلطة الاتجاه، ثم قارنها بالمنصة التي تستخدمها اليوم. لا تحتاج بطاقة دفع.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_finalbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
