import { getLocale } from '../runtime.js';

const translations = {"ar":"الخطوط","bn":"টাইপোগ্রাফি","de":"Typografie","en":"Typography","es":"tipografía","fr":"Typographie","hi":"टाइपोग्राफी","id":"Tipografi","pt-BR":"Tipografia","ru":"Типография","ur":"نوع ٹائپ","zh-CN":"版式"};

export function settings_typography(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
