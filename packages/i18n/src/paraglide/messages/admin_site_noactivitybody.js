import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يُسجل نشاط تشغيلي لهذا الموقع بعد.","bn":"No Activity Body","de":"No Activity Body","en":"No Activity Body","es":"No Activity Body","fr":"No Activity Body","hi":"No Activity Body","id":"No Activity Body","pt-BR":"No Activity Body","ru":"No Activity Body","ur":"No Activity Body","zh-CN":"No Activity Body"};

export function admin_site_noactivitybody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
