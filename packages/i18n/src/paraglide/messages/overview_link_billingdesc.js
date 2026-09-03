import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطة والاستخدام لهذا الموقع.","bn":"এই সাইটের জন্য পরিকল্পনা এবং ব্যবহার.","de":"Plan und Nutzung dieser Website.","en":"Plan and usage for this site.","es":"Plan y uso de este sitio.","fr":"Planification et utilisation de ce site.","hi":"इस साइट के लिए योजना और उपयोग.","id":"Rencana dan penggunaan untuk situs ini.","pt-BR":"Plano e uso deste site.","ru":"План и использование этого сайта.","ur":"اس سائٹ کے لیے منصوبہ بندی اور استعمال۔","zh-CN":"本网站的规划和使用。"};

export function overview_link_billingdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
