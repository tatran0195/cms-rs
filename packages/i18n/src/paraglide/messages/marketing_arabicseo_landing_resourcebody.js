import { getLocale } from '../runtime.js';

const translations = {"ar":"أنشئ صفحة، واخلط فيها العربية مع أمر ومسار وجدول، ثم اختبرها على الهاتف وفي البحث قبل نقل بقية المحتوى. أداة Nibleaf المجانية تفحص HTML محليًا في متصفحك ولا ترفع الملف إلى خادمنا.","bn":"Arabic page content","de":"Arabic page content","en":"أنشئ صفحة، واخلط فيها العربية مع أمر ومسار وجدول، ثم اختبرها على الهاتف وفي البحث قبل نقل بقية المحتوى. أداة Nibleaf المجانية تفحص HTML محليًا في متصفحك ولا ترفع الملف إلى خادمنا.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_landing_resourcebody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
