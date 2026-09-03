import { getLocale } from '../runtime.js';

const translations = {"ar":"لا. قد يلغي البرنامج رسوم الترخيص لكنه ينقل إليك DNS وTLS وقاعدة البيانات والتخزين والنسخ الاحتياطي والمراقبة والترقية والاستعادة. احسب وقت التشغيل والمخاطر، لا سعر الخادم فقط.","bn":"Arabic page content","de":"Arabic page content","en":"لا. قد يلغي البرنامج رسوم الترخيص لكنه ينقل إليك DNS وTLS وقاعدة البيانات والتخزين والنسخ الاحتياطي والمراقبة والترقية والاستعادة. احسب وقت التشغيل والمخاطر، لا سعر الخادم فقط.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_faqhostinganswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
