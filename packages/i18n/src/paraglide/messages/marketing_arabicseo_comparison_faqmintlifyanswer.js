import { getLocale } from '../runtime.js';

const translations = {"ar":"نعم، توثيقه الرسمي يدرج العربية ويقول إن التخطيط يتحول إلى RTL عند ضبط اللغة. مع ذلك، اختبر الجداول والتنقل والشيفرة داخل النص في مشروعك، لأن دعم اللغة في الإعداد لا يثبت كل حالة عرض.","bn":"Arabic page content","de":"Arabic page content","en":"نعم، توثيقه الرسمي يدرج العربية ويقول إن التخطيط يتحول إلى RTL عند ضبط اللغة. مع ذلك، اختبر الجداول والتنقل والشيفرة داخل النص في مشروعك، لأن دعم اللغة في الإعداد لا يثبت كل حالة عرض.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_faqmintlifyanswer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
