import { getLocale } from '../runtime.js';

const translations = {"ar":"قد تعرض منصة ما فقرة عربية من اليمين إلى اليسار، لكن تجربة التوثيق الكاملة تشمل المحرر، وشجرة الصفحات، والتنقل، والشيفرة داخل النص، ونتائج البحث، ووسوم اللغة لمحركات البحث. صُممت هذه الطبقات معًا في Nibleaf.","bn":"Arabic page content","de":"Arabic page content","en":"قد تعرض منصة ما فقرة عربية من اليمين إلى اليسار، لكن تجربة التوثيق الكاملة تشمل المحرر، وشجرة الصفحات، والتنقل، والشيفرة داخل النص، ونتائج البحث، ووسوم اللغة لمحركات البحث. صُممت هذه الطبقات معًا في Nibleaf.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_landing_featuresbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
